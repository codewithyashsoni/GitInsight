import { useState, useEffect } from 'react'
import Logo from "./components/Logo.jsx"
import SearchBar from "./components/SearchBar.jsx"
import UserData from "./components/UserData.jsx"
import Loader from "./components/Loader.jsx"
import ErrorMessage from "./components/ErrorMessage.jsx"

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
        throw {
          title: "User not found",
          message: "Please check the username and try again."
        }
      }
      if(userResponse.status === 403){
        throw {
          title: "Rate limit exceeded",
          message: "GitHub rate limit exceeded.Please try again later."
        }
      }
      if(!userResponse.ok){
        throw {
          title: "Something went wrong",
          message: "Unable to fetch the user profile. Please try again later."
        }
      }
      if(!repoResponse.ok){
        throw {
          title: "Repository error",
          message: "Unable to fetch repositories. Please try again."
        }
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
      if(error.title){
        setError(error);
      }else{
        setError({
          title: "Connection failed",
          message: "Please check your internet connection and try again."
        })
      }
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <Logo />
      <SearchBar setQuery={setQuery} loading={loading} />
      {loading ? (
        <Loader />
      ) : (
        error ? (
          <ErrorMessage title={error.title} message={error.message} />
        ) : (
          data && <UserData data={data} />
        )
      )
      }
    </div>
  )
}

export default App
