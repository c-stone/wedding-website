import { Island } from '@hubspot/cms-components';
import '../../styles/fonts.css';
import '../../styles/tailwind.css';
import Footer from '../Footer';
import Header from '../Header';
import ScheduleInfo from '../ScheduleInfo?island';

function Schedule() {
  return (
    <>
      <Header />
      <h1 className="sr-only">Schedule</h1>
      <div className="container mx-auto flex flex-col items-center py-10">
        <Island module={ScheduleInfo} />
      </div>
      <Footer />
    </>
  );
}

export default Schedule;
