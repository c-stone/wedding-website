import React, { useState } from 'react';
import guests from '../data/guests';

function RsvpForm() {
  const [guestName, setGuestName] = useState('');
  const [guestDetails, setGuestDetails] = useState(null);
  console.log(guests);

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
      <span>
        To RSVP, please provide the first and last name of one member of your
        group.
      </span>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Guest Full Name:
            <input type="text" value={guestName} onChange={handleNameChange} />
          </label>
          <button type="submit">Search</button>
        </form>

        {guestDetails && (
          <div>
            <p>RSVP for {guestDetails.name}</p>
            {/* Display RSVP options here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default RsvpForm;
