function RepositoryControls({sort, setSort, filter, setFilter}){
    return(
        <div className="repository-controls-container">
            <h2>Repositories: </h2>

            <div class="sort-filter-container">

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="sort-selection"
                >
                    
                    <option value="Recently Updated">Recently Updated</option>
                    <option value="Most Stars">Most stars</option>
                </select>

                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Filter repositories..."
                    className="filter-input"
                />

            </div>

        </div>
    )   
}
export default RepositoryControls