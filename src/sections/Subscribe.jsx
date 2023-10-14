import Button from "../components/Button.jsx";

function Subscribe() {
  return (
    <section
      id="contact-us"
      className="flex justify-between items-center gap-10 max-container max-lg:flex-col"
    >
      <h3 className="font-palanquin text-4xl leading-[68px] font-bold lg:max-w-md">
        Sign Up For <span className="text-coral-red"> Updates </span> &amp;
        Newsletter
      </h3>
      <div className="flex w-full items-center gap-5 p-2.5 rounded-full sm:border sm:border-slate-gray max-sm:flex-col lg:max-w-[40%]">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
