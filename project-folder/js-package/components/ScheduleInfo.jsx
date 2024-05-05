import HotelIcon from './HotelIcon';
import HeartIcon from './HeartIcon';
import WalkIcon from './WalkIcon';
import DrinkIcon from './DrinkIcon';
import PodiumIcon from './PodiumIcon';
import EatIcon from './EatIcon';
import CakeIcon from './CakeIcon';
import PartyIcon from './PartyIcon';

function ScheduleItem({ icon, time, text }) {
  return (
    <div className="flex w-full border-l-2 border-gray-800 pb-16">
      <div className="p-2 border border-gray-800 rounded-full inline-flex justify-center items-center relative right-[23px] bg-white">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{time}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ScheduleInfo() {
  return (
    <>
      <div>
        <h2 className=" text-2xl pb-6 text-center font-serif">
          Schedule of events
        </h2>
      </div>
      <div className="flex flex-col">
        <ScheduleItem
          icon={<HotelIcon />}
          time="4:30 PM"
          text="Arrive at Lincoln Hotel"
        />
        <ScheduleItem
          icon={<WalkIcon />}
          time="4:45 PM"
          text="Walk to Laconia Plaza"
        />
        <ScheduleItem
          icon={<HeartIcon />}
          time="5:00 PM"
          text="Wedding ceremony begins at Laconia Plaza"
        />
        <ScheduleItem
          icon={<DrinkIcon />}
          time="5:30 PM"
          text="Cocktail hour at Sacred Profane"
        />
        <ScheduleItem
          icon={<PodiumIcon />}
          time="6:30 PM"
          text="Welcome speech"
        />
        <ScheduleItem
          icon={<EatIcon />}
          time="7:00 PM"
          text="Dinner from Bird & Co."
        />
        <ScheduleItem
          icon={<CakeIcon />}
          time="8:00 PM"
          text="Dessert from Sweet Cream and speeches"
        />
        <ScheduleItem
          icon={<PartyIcon />}
          time="8:30 PM"
          text="Party and dancing"
        />
      </div>
    </>
  );
}

export default ScheduleInfo;
