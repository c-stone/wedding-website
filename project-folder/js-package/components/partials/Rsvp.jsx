import { Island } from '@hubspot/cms-components';
import '../../styles/fonts.css';
import '../../styles/tailwind.css';
import Footer from '../Footer';
import Header from '../Header';
// import RsvpExperience from '../RsvpExperience?island';
import RsvpClosed from '../RsvpClosed';

function Rsvp() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col items-center gap-10">
        <div className="p-4 my-4"></div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-1/2 flex flex-col items-center gap-10 pb-10 px-3">
            <div className="flex flex-col items-center">
              <span className="font-display text-3xl text-center text-nowrap capitalize pb-4">
                Wedding Ceremony
              </span>
              <span className="font-serif text-sm">May 11th, 2024</span>
              <span className="font-serif text-sm pb-3">5:00PM - 5:30PM</span>
              <span className="font-serif text-sm">Laconia Plaza</span>
              <span className="font-serif text-sm">Biddeford, ME 04005</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-3xl text-center text-nowrap capitalize pb-4">
                Reception
              </span>
              <span className="font-serif text-sm">May 11th, 2024</span>
              <span className="font-serif text-sm pb-3">5:30PM - 11:00PM</span>
              <span className="font-serif text-sm">Sacred Profane</span>
              <span className="font-serif text-sm">Biddeford, ME 04005</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-6">
            <RsvpClosed />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rsvp;
