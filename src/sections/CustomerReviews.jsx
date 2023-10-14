import ReviewCard from "../components/ReviewCard.jsx";
import { reviews } from "../constants/index.js";

function CustomerReviews() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl text-center font-bold">
        What Our <span className="text-coral-red"> Customers </span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="flex flex-1 justify-evenly items-center gap-14 mt-24 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
