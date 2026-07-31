import { FolderGit2 } from "lucide-react"

function ErrorMessage({title, message}){
    return(
        <div className="error-component">
            <FolderGit2 className="error-icon" />
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    )
}
export default ErrorMessage