import { useState } from 'react';
import HotelIcon from './HotelIcon';
import HeartIcon from './HeartIcon';
import WalkIcon from './WalkIcon';
import DrinkIcon from './DrinkIcon';
import PodiumIcon from './PodiumIcon';
import EatIcon from './EatIcon';
import CakeIcon from './CakeIcon';
import PartyIcon from './PartyIcon';
import SunIcon from './SunIcon';
import RainIcon from './RainIcon';

function ScheduleItem({ icon, time, text, isFinal }) {
  return (
    <div
      className={`flex w-full pb-16 ${isFinal ? '' : 'border-l-2 border-gray-800'}`}
    >
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
  const [isSunny, setIsSunny] = useState(true);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className=" text-2xl pb-6 text-center font-serif">
          Schedule of Events
        </h2>
        <div className="flex gap-6 pb-6">
          <button
            className={`flex flex-col justify-center items-center p-4 border rounded min-w-[82px] 
                    ${isSunny ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-200'}`}
            onClick={() => setIsSunny(true)}
          >
            <SunIcon />
            Sunny
          </button>
          <button
            className={`flex flex-col justify-center items-center p-4 border rounded min-w-[82px]
                    ${!isSunny ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-200'}`}
            onClick={() => setIsSunny(false)}
          >
            <RainIcon />
            Rainy
          </button>
        </div>
      </div>
      {/* Sunny */}
      {isSunny && (
        <div className="flex flex-col px-8" id="sunny">
          <ScheduleItem
            icon={<HotelIcon />}
            time="4:30 PM"
            text="Arrive at Lincoln Hotel"
            isFinal={false}
          />
          <ScheduleItem
            icon={<WalkIcon />}
            time="4:45 PM"
            text="Walk to Laconia Plaza"
            isFinal={false}
          />
          <ScheduleItem
            icon={<HeartIcon />}
            time="5:00 PM"
            text="Wedding ceremony begins at Laconia Plaza"
            isFinal={false}
          />
          <ScheduleItem
            icon={<DrinkIcon />}
            time="5:30 PM"
            text="Cocktail hour at Sacred Profane"
            isFinal={false}
          />
          <ScheduleItem
            icon={<PodiumIcon />}
            time="6:30 PM"
            text="Welcome speech"
            isFinal={false}
          />
          <ScheduleItem
            icon={<EatIcon />}
            time="7:00 PM"
            text="Dinner from Bird & Co."
            isFinal={false}
          />
          <ScheduleItem
            icon={<CakeIcon />}
            time="8:00 PM"
            text="Dessert from Sweet Cream and speeches"
            isFinal={false}
          />
          <ScheduleItem
            icon={<PartyIcon />}
            time="8:30 PM"
            text="Party and dancing"
            isFinal={true}
          />
        </div>
      )}
      {/* Rainy */}
      {!isSunny && (
        <div className="flex flex-col px-8" id="rainy">
          <ScheduleItem
            icon={<HotelIcon />}
            time="4:45 PM"
            text="Arrive at Sacred Profane"
            isFinal={false}
          />
          <ScheduleItem
            icon={<HeartIcon />}
            time="5:00 PM"
            text="Wedding ceremony begins at Sacred Profane"
            isFinal={false}
          />
          <ScheduleItem
            icon={<DrinkIcon />}
            time="5:30 PM"
            text="Cocktail hour"
            isFinal={false}
          />
          <ScheduleItem
            icon={<PodiumIcon />}
            time="6:30 PM"
            text="Welcome speech"
            isFinal={false}
          />
          <ScheduleItem
            icon={<EatIcon />}
            time="7:00 PM"
            text="Dinner from Bird & Co."
            isFinal={false}
          />
          <ScheduleItem
            icon={<CakeIcon />}
            time="8:00 PM"
            text="Dessert from Sweet Cream and speeches"
            isFinal={false}
          />
          <ScheduleItem
            icon={<PartyIcon />}
            time="8:30 PM"
            text="Party and dancing"
            isFinal={true}
          />
        </div>
      )}
    </>
  );
}

export default ScheduleInfo;
