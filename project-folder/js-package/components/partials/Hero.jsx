import lagoonBg from '../../assets/lagoon-bg.jpg';
import '../../styles/tailwind.css';

function Hero({ bgImage }) {
  return (
    <div className="w-full">
      <img
        className="w-full h-[300px] sm:h-[700px] object-cover object-top"
        src={bgImage}
      />
    </div>
  );
}

export default Hero;
