import {useState} from "react"
import RepositoryControls from "./RepositoryControls.jsx"
import RepositoryList from "./RepositoryList.jsx"

function RepositorySection({data}){
    const [sort, setSort] = useState("Recently Updated");
    const [filter, setFilter] = useState("");

    function filterRepositories(repos, filterInput){
        const trimmedFilter = filterInput.trim().toLowerCase();
        return repos.filter((repo) => repo.name.toLowerCase().includes(trimmedFilter));
    }

    const filteredRepositories = filterRepositories(data, filter);

    function sortRepositories(repos, sortInput){
        const sortedRepos = [...repos];
        if(sortInput === "Recently Updated"){
            return sortedRepos.sort((a,b) => (
                new Date(b.updated_at) - new Date(a.updated_at)
            ))
        }

        if(sortInput === "Most Stars"){
            return sortedRepos.sort((a,b) => (
                b.stargazers_count - a.stargazers_count
            ))
        }
        return sortedRepos;
    }

    const sortedRepositories = sortRepositories(filteredRepositories, sort);

    return(
        <div className="repository-section-container">
            <RepositoryControls sort={sort} setSort={setSort} filter={filter} setFilter={setFilter} />
            <RepositoryList repos={sortedRepositories} />
        </div>
    )
}
export default RepositorySection