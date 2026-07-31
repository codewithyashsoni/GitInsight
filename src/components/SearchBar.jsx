import React, {useState} from "react"
import {LoaderCircle} from "lucide-react"

function SearchBar({setQuery, loading}){
    const [input, setInput] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const username = input.trim();
        if(!username) return;

        setQuery(username);
        setInput("");
    }

    return(
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="search-input"
                    placeholder="Enter Github Username..."
                />

                <button 
                className="search-button"
                disabled={loading}
                type="submit"
                >
                    {loading ? (
                        <span>
                            <LoaderCircle className="spinner"/>
                            <span>Searching...</span>
                        </span>
                    ) : (
                        <span>Search</span>
                    )}
                </button>
            </form>
        </div>
    )
}
export default SearchBar