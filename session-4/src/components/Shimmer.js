const Shimmer = () => {
    return (
        <>
            <div className="search-shimmer"></div>
            <div className="restaurant-list">
                {Array(20)
                    .fill("")
                    .map((_, index) => (
                        <div className="shimmer-body" key={index}></div>
                    ))}
            </div>
        </>
    );
}

export default Shimmer;
