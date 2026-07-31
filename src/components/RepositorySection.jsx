import {useState} from "react"
import RepositoryControls from "./RepositoryControls.jsx"
import RepositoryList from "./RepositoryList.jsx"

function RepositorySection({data}){
    const [sort, setSort] = useState("Recently Updated");
    const [filter, setFilter] = useState("");

    return(
        <div className="repository-section-container">
            <RepositoryControls sort={sort} setSort={setSort} filter={filter} setFilter={setFilter} />
            <RepositoryList />
        </div>
    )
}
export default RepositorySection