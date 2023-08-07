import ServicesSplash from "@/components/templates/Sections/servicesSplash";
import ServiceBrief from "@/components/templates/Sections/serviceBrief";

function Services({}) {
  return (
    <>
      <ServicesSplash />
      <div className="max-w-7xl mx-auto">
        <ServiceBrief />
      </div>
    </>
  );
}

export default Services;
