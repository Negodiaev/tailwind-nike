import { star } from "../assets/icons";

function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} className="w-[280px] h-[280px]" alt={name} />
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} width={24} height={24} alt="Star icon" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl leading-normal font-semibold">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-2xl leading-normal font-semibold text-coral-red">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard;
