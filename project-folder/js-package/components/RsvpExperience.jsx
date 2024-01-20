import React, { useState } from 'react';
import guests from '../data/guests';
import NameEntryForm from './NameEntryForm';
import RsvpForm from './RsvpForm';

function RsvpExperience() {
  const [guestDetails, setGuestDetails] = useState(null);

  return (
    <div>
      <span className="block font-serif pb-8 text-center px-10">
        To RSVP, please provide the first and last name of one member of your
        group.
      </span>
      <div>
        {!guestDetails && (
          <NameEntryForm setGuestDetails={setGuestDetails} guests={guests} />
        )}
        {guestDetails && <RsvpForm guestDetails={guestDetails} />}
      </div>
    </div>
  );
}

export default RsvpExperience;
