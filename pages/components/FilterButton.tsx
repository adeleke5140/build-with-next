const FilterButton = () => {
    return(
        <button className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show</span>
            <span>all</span>
            <span className="visually-hidden">tasks</span>
        </button>
        
    )
}

export default FilterButton