const Shimmer = () => {
    return (
        <>
            <div className="pt-20 h-60 m-20 my-8 bg-gray-300 animate-pulse mb-6"></div>
            <div className="flex flex-wrap justify-center px-8 mx-auto max-w-screen-xl">
                {Array(20)
                    .fill("")
                    .map((_, index) => (
                        <div className=" my-20 w-80 h-60 border border-gray-300 rounded-lg shadow-md m-4 p-4" key={index}></div>
                    ))}
            </div>
            
        </>
    );
}

export default Shimmer;
