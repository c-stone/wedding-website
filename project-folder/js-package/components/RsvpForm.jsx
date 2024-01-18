import React, { useState } from 'react';
import guests from '../data/guests';

function RsvpForm() {
  const [guestName, setGuestName] = useState('');
  const [guestDetails, setGuestDetails] = useState(null);

  const handleNameChange = (event) => {
    setGuestName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const guest = guests.find(
      (g) => g.name.toLowerCase() === guestName.toLowerCase(),
    );
    console.log(guest);
    if (guest) {
      setGuestDetails(guest);
    } else {
      // Handle no guest found
      setGuestDetails(null);
      console.log('Guest not found. Please try again.');
    }
  };

  return (
    <div>
      <span className="font-serif">
        To RSVP, please provide the first and last name of one member of your
        group.
      </span>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="font-serif">
            Guest Full Name:
            <input type="text" value={guestName} onChange={handleNameChange} />
          </label>
          <button
            className="bg-amber-700 hover:bg-amber-900 text-white py-4 px-8 rounded tracking-widest"
            type="submit"
          >
            Continue
          </button>
        </form>

        {guestDetails && (
          <div>
            <p>
              RSVP for {guestDetails.name} and {guestDetails.plusOneName}
            </p>
            {/* Display RSVP options here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default RsvpForm;
