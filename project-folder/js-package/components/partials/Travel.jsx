import { Island } from '@hubspot/cms-components';
import '../../styles/fonts.css';
import '../../styles/tailwind.css';
import Footer from '../Footer';
import Header from '../Header';
import TravelInfo from '../travelInfo?island';

function Travel() {
  return (
    <>
      <Header />
      <h1 className="sr-only">Travel Info</h1>
      <div className="container mx-auto flex flex-col items-center py-10"></div>
      <Island module={TravelInfo} />
      <Footer />
    </>
  );
}

export default Travel;
