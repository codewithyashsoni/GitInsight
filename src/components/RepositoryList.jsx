import RepositoryCard from "./RepositoryCard.jsx"

function RepositoryList({repos}){
    return(
        <div className="repository-list-container">
            {repos.map((repo) => (
                <RepositoryCard key={repo.id} repo={repo} />
            ))}
        </div>
    )
}
export default RepositoryList