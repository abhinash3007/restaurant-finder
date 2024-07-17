const Shimmer = () => {
    return (
        <>
            <div className="h-72 bg-gray-300 animate-pulse mb-6"></div>
            <div className="flex flex-wrap justify-center">
                {Array(20)
                    .fill("")
                    .map((_, index) => (
                        <div className="w-52 h-52 bg-gray-300 animate-pulse m-3 rounded-lg" key={index}></div>
                    ))}
            </div>
        </>
    );
}

export default Shimmer;
