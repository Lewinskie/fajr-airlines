import Image from "next/image";
import CoreValuesImage from "../../../../public/coreValues.jpg";

function CoreValues({ core_values }) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 p-4 gap-8">
      <div className="relative">
        <Image
          src={CoreValuesImage}
          alt="alt text"
          width={1200}
          height={1000}
          className="h-[500px] absolute top-20"
          // fill
          // object-fit="fit"
          // object-position="center"
          // className="h-[500px] "
        />
      </div>
      <div className="p-4">
        <h4 className="text-2xl font-bold font-sans text-center py-10">
          Our Core Values
        </h4>
        {core_values.values.map((value, i) => {
          return (
            <div className="" key={value.id}>
              <h3 className="font-bold font-sans text-lg text-secondary-500 py-5">
                {value.title}
              </h3>
              <p className="leading-relaxed text-base font-serif">
                {value.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoreValues;
