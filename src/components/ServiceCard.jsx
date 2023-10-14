function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className="flex-1 px-10 py-16 w-full rounded-[20px] shadow-3xl sm:w-[350px] sm:min-w-[350px]">
      <div className="flex justify-center items-center w-11 h-11 rounded-full bg-coral-red">
        <img src={imgURL} width={24} height={24} alt={label} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
}

export default ServiceCard;
