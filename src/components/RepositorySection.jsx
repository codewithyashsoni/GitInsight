import {useState} from "react"
import RepositoryControls from "./RepositoryControls.jsx"

function RepositorySection({data}){
    return(
        <div className="repository-section-container">
            <RepositoryControls />
            <RepositoryList />
        </div>
    )
}
export default RepositorySection