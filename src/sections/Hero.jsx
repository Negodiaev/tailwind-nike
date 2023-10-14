import { useState } from "react";

import Button from "../components/Button.jsx";
import ShoeCard from "../components/ShoeCard.jsx";

import { arrowRight } from "../assets/icons/index.js";
import { bigShoe1 } from "../assets/images/index.js";
import { statistics, shoes } from "../constants/index.js";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col justify-center gap-10 w-full max-container min-h-screen"
    >
      <div className="relative flex flex-col justify-center items-start max-xl:padding-x pt-28 w-full xl:w-2/5">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="inline-block mt-3 text-coral-red">Nike</span> Shoes
        </h1>
        <p className="mt-6 mb-14 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap gap-16 mt-20 w-full">
          {statistics.map(({ value, label }) => (
            <div key={label}>
              <p className="font-palanquin text-4xl font-bold">{value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          width={610}
          height={500}
          className="object-contain relative z-10"
          alt="Shoe"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                bigShoeImg={bigShoeImg}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
