import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../constants/index.js";

function Services() {
  return (
    <section className="flex justify-center flex-wrap gap-9 max-container">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}

export default Services;
