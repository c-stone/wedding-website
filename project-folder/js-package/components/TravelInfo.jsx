import NewTabIcon from './NewTabIcon';
import CopyOnClickButton from './copyOnClickButton';

function TravelInfo() {
  return (
    <div className="pb-[150px] container mx-auto flex flex-col gap-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-display font-bold tracking-widest uppercase pb-10 text-nowrap">
            Where to stay
          </h2>
        </div>
        <div className="px-10 md:w-1/2 flex flex-col items-center md:border-l-2 md:border-l-black">
          <h3 className=" text-xl">The Lincoln Hotel</h3>
          <span className="text-sm font-light font-serif leading-8 text-left items-center tracking-wider py-5 md:max-w-[350px]">
            This boutique hotel in the heart of Biddeford is within walking
            distance to all wedding festivities. For your convenience, we have
            reserved a block of rooms for our guests. Go to{' '}
            <a
              href="https://lincolnhotelmaine.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-amber-700"
            >
              lincolnhotelmaine.com
              <NewTabIcon />
            </a>{' '}
            or call{' '}
            <a
              href={`tel:+12078153977`}
              className="hover:underline text-amber-700"
            >
              (207) 815-3977
            </a>{' '}
            and use the code <CopyOnClickButton text={'OatStoneWedding'} />.
          </span>
          <h3 className=" text-xl">Other Accommodations</h3>
          <span className="w-full text-sm font-light font-serif leading-8 text-left items-center tracking-wider py-5 md:max-w-[350px]">
            Other accommodations we recommend in the area include:
            <ul className="list-outside list-disc ml-8 py-1">
              <li>
                <a
                  href="https://www.ihg.com/holidayinnexpress/hotels/us/en/biddeford/pwmbi/hoteldetail"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-amber-700"
                >
                  Holiday Inn Express Biddeford
                  <NewTabIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.marriott.com/en-us/hotels/pwmac-ac-hotel-portland-downtown-waterfront-me/rooms/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-amber-700"
                >
                  AC Hotel by Marriott Portland
                  <NewTabIcon />
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <span className="text-3xl font-display font-bold tracking-widest uppercase pb-10 text-nowrap">
            Getting Here
          </span>
        </div>
        <div className="px-10 md:w-1/2 flex flex-col items-center md:border-l-2 md:border-l-black">
          <h3 className=" text-xl">Flying</h3>
          <span className="text-sm font-light font-serif leading-8 text-left items-center tracking-wider py-5 sm:max-w-[350px]">
            Airports serving Biddeford:
            <ul className="list-outside list-disc ml-8 py-1">
              <li>
                <a
                  href="https://maps.app.goo.gl/qReuzRmrFqw5Tqvz5"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-amber-700"
                >
                  Portland Jetport
                  <NewTabIcon />
                </a>{' '}
                is the closest airport to Biddeford, located approximately 20
                minutes away by car.
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/4q19v5gH8uRReXcZA"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-amber-700"
                >
                  Logan Airport
                  <NewTabIcon />
                </a>{' '}
                (Boston) is a larger airport option, about a 1.5-hour drive from
                Biddeford.
              </li>
            </ul>
            For those flying in, we recommend renting a car. This way, you can
            fully enjoy the scenic beauty of Maine!
          </span>
          <h3 className=" text-xl">Driving</h3>
          <span className="text-sm font-light font-serif leading-8 text-left items-center tracking-wider py-5 md:max-w-[350px]">
            From Boston and Southern New Hampshire, Biddeford is easily
            accessible in just over an hour&apos;s drive. Once in town,
            you&apos;ll find public parking available for your convenience.
          </span>
        </div>
      </div>
    </div>
  );
}

export default TravelInfo;
