import Button from "../components/Button.jsx";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center gap-10 max-container max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          alt="Offer"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            backgroundColor="bg-white"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
