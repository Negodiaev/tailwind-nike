import { star } from "../assets/icons";

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        className="w-[120px] h-[120px] rounded-full object-cover"
        alt={`${customerName} photo`}
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          className="mt-0 object-contain"
          alt="Star icon"
        />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
}

export default ReviewCard;
