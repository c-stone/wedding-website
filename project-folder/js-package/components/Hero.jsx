function Hero({ bgImage }) {
  return (
    <div className="w-full pb-[150px]">
      <img
        className="w-full h-[300px] sm:h-[700px] object-cover object-top"
        src={bgImage}
      />
    </div>
  );
}

export default Hero;
