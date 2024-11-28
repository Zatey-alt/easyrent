import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import SearchBar from "../../components/searchBar/SearchBar";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import Testimonials from "../../components/Testimonials/Testimonials";
import HowItWorks from "../../components/howItWorks/HowItWorks";
function HomePage() {
  const { currentUser } = useContext(AuthContext);
  

  return (
    <div className="homePage overflow-auto">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 bg-gray-50">
        {/* Text Container */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            EasyRent: Simplify Your Property Search
          </h1>
          <p className="text-gray-600">
            At EasyRent, we connect you with the perfect rental spaces. Whether
            you're looking for a cozy apartment, a spacious home, or commercial
            properties, our platform makes renting easy, fast, and hassle-free.
          </p>
          <div className="mt-4">
          <SearchBar />
          </div>
          <div className="flex gap-4 mt-6">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-800">10,000+</h1>
              <h2 className="text-gray-600">Happy Tenants</h2>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-800">500+</h1>
              <h2 className="text-gray-600">Trusted Landlords</h2>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-800">1,200+</h1>
              <h2 className="text-gray-600">Listings Available</h2>
            </div>
          </div>
        </div>
        {/* Image Container */}
        <div className="flex-1 flex justify-center">
          <img
            src="/bg.png"
            alt="EasyRent Background"
            className="w-full max-w-md  "
          />
        </div>
      </div>

      {/* About EasyRent */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Why Choose EasyRent?
        </h2>
        <p className="text-gray-600 text-center mt-4">
          EasyRent is your trusted partner for renting properties. Our platform
          offers advanced tools, verified listings, and seamless communication
          between landlords and tenants.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="w-full md:w-1/3 p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Verified Listings</h3>
            <p className="text-gray-600 mt-2">
              Every property on EasyRent is verified to ensure you get the best
              experience without the risks.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Flexible Options</h3>
            <p className="text-gray-600 mt-2">
              From monthly rentals to long-term leases, we provide the
              flexibility you need to find your ideal home.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Our team is always ready to assist you with inquiries or support
              whenever you need it.
            </p>
          </div>
        </div>
      </section>
      <HowItWorks />

      <FeaturedProperties />
     
     
      <Testimonials />
      
    </div>
  );
}

export default HomePage;
