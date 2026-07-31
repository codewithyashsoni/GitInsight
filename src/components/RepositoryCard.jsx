import {Star} from "lucide-react"

const languageColors = {
  JavaScript: "var(--javascript)",
  TypeScript: "var(--typescript)",
  React: "var(--react)",
  HTML: "var(--html)",
  CSS: "var(--css)",
  Python: "var(--python)",
  Java: "var(--java)",
  "C++": "var(--cpp)",
  C: "var(--c)",
  PHP: "var(--php)",
  Go: "var(--go)",
  Rust: "var(--rust)",
};

function RepositoryCard({repo}){
    const {name, description, language, stargazers_count, html_url} = repo;

    return(
        <div className="repository-card">
            <h3>{name}</h3>
            {description && <p className="repo-description">{description}</p>}

            <div className="repository-info">
                <div className="repo-stars">
                    <Star className="star-icon" />
                    <p className="repo-star-count">{stargazers_count}</p>
                </div>

                {language && 
                <p className="repo-language" style={{color: languageColors[language]}}>
                    {language}
                </p>}

                <a 
                rel="noopener noreferrer"
                className="repo-link"
                href={html_url}
                target="_blank"
                >View Repository</a>
            </div>
        </div>
    )
}
export default RepositoryCard