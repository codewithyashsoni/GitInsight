import { useState, useEffect } from 'react'
import Logo from "./components/Logo.jsx"
import SearchBar from "./components/SearchBar.jsx"
import UserData from "./components/UserData.jsx"
import Loader from "./components/Loader.jsx"

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if(!query) return;
    fetchData(query);
  }, [query])

  async function fetchData(username){
    setData(null)
    setLoading(true);
    setError("");
    try{
      const [userResponse, repoResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos`)
      ]);

      if(userResponse.status === 404){
        throw new Error("User not found");
      }
      if(userResponse.status === 403){
        throw new Error("GitHub API rate limit exceeded");
      }
      if(!userResponse.ok){
        throw new Error("Something went wrong");
      }
      if(!repoResponse.ok){
        throw new Error("Failed to fetch repositories");
      }

      const [userData, repoData] = await Promise.all([
        userResponse.json(),
        repoResponse.json()
      ]);

      const newData = {
        user: userData,
        repos: repoData
      }
      setData(newData);
    }catch(error){
      setError(error.message);
      console.error("error message:", error.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <Logo />
      <SearchBar setQuery={setQuery} loading={loading} />
      {loading ? 
        (<Loader />)
        :
        (data && <UserData data={data} />)
      }

    </div>
  )
}

export default App
