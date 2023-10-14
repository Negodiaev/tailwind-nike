function Button({
  label,
  iconURL,
  borderColor,
  textColor,
  backgroundColor,
  fullWidth,
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${borderColor} ${textColor} ${backgroundColor}`
          : "border-coral-red text-white bg-coral-red"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          className="ml-2 w-5 h-5 rounded-full"
          alt="Arrow right icon"
        />
      )}
    </button>
  );
}

export default Button;
