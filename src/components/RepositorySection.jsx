import {useState} from "react"
import RepositoryControls from "./RepositoryControls.jsx"
import RepositoryList from "./RepositoryList.jsx"

function RepositorySection({data}){
    const [sort, setSort] = useState("Recently Updated");
    const [filter, setFilter] = useState("");

    const filteredRepositories = filterRepositories(data, filter);

    function filterRepositories(repos, filterInput){
        const trimmedFilter = filterInput.trim().toLowerCase();
        return repos.filter((repo) => repo.name.toLowerCase().includes(trimmedFilter));
    }

    return(
        <div className="repository-section-container">
            <RepositoryControls sort={sort} setSort={setSort} filter={filter} setFilter={setFilter} />
            <RepositoryList repos={filteredRepositories} />
        </div>
    )
}
export default RepositorySection