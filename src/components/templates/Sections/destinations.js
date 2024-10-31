import Image from "next/image";

function Destinations({ destinations }) {
  return (
    <div className="bg-primary-50 py-20">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore Our Destinations</h2>
        <p className="text-lg text-gray-700 mb-10">
          Discover breathtaking destinations that offer unique experiences and unforgettable memories. 
          Whether you seek adventure, relaxation, or cultural immersion, our carefully curated destinations have something for everyone.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="relative group bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src={destination.imageSrc}
                alt={destination.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-bold font-sans mb-4">
                {destination.name}
              </h2>
            </div>
            <div className="absolute inset-0 bg-white rounded-lg p-4 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="leading-relaxed text-base font-serif">
                {destination.description}
              </p>
              {/* <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
                Learn more
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
