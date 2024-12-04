import React from 'react'

const Shimmer2 = () => {
  return (
    <div className="bg-gray-100 p-6 mt-20 rounded-lg shadow-lg max-w-6xl mx-auto">
    <div className="mb-8 p-6 h-96 bg-white rounded-lg shadow-md">
        {/* <div className="w-full h-12 bg-gray-200 animate-pulse mb-4"></div>
        <div className="w-full h-8 bg-gray-200 animate-pulse mb-2"></div>
        <div className="w-full h-8 bg-gray-200 animate-pulse mb-2"></div>
        <div className="w-full h-8 bg-gray-200 animate-pulse mb-2"></div>
        <div className="w-full h-8 bg-gray-200 animate-pulse mb-2"></div>
        <div className="w-full h-12 bg-gray-200 animate-pulse mb-4"></div> */}
    </div>

    <h2 className="text-3xl font-extrabold text-blue-600 mb-6">Menu</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(20)
                .fill("")
                .map((_, index) => (
            <div className="bg-white p-6 rounded-lg shadow-lg" key={index}>
                <div className="w-full h-12 bg-white animate-pulse mb-2"></div>
                <div className="w-full h-8 bg-white animate-pulse mb-2"></div>
                <div className="w-full h-8 bg-white animate-pulse mb-2"></div>
                <div className="w-full h-12 bg-gray-200 animate-pulse mb-4"></div>
                <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg mt-4"></div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Shimmer2
