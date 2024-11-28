import React from "react";

const FeaturedProperties = () => {
  return (
    <div className="featuredProperties px-6 py-12 ">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
        Featured Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="propertyCard bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={`/property.jpg`}
              alt={`Property ${index + 1}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Beautiful Apartment
              </h3>
              <p className="text-gray-600">$1200/month</p>
              <button className="mt-4 w-full px-4 py-2 bg-[#FECE51] text-white rounded-lg shadow hover:bg-yellow-600 transition duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
