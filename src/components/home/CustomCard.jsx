const CustomCard = () => {
    return (
      <div className="relative bg-red-500 p-6 w-64 h-96 rounded-2xl shadow-lg">
        {/* Top Cutout */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-20 h-10 rounded-b-full"></div>
        
        {/* Card Content */}
        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold">Card Title</h2>
          <p className="text-gray-600">This is a custom card with a top cutout.</p>
        </div>
      </div>
    );
  };
  
  export default CustomCard;
  