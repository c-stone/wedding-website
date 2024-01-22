import React, { useState } from 'react';

function NameEntryForm({ setGuestDetails, guests }) {
  const [guestName, setGuestName] = useState('');
  const handleNameChange = (event) => {
    setGuestName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const guest = guests.find(
      (g) =>
        g.name.toLowerCase() === guestName.toLowerCase() ||
        g.plusOneName.toLowerCase() === guestName.toLowerCase(),
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 items-center">
      <label className="font-serif flex flex-col gap-1 w-full">
        Guest Full Name:
        <input
          className="form-input rounded w-full"
          type="text"
          value={guestName}
          onChange={handleNameChange}
        />
      </label>
      <button
        className="bg-amber-700 hover:bg-amber-900 text-white py-4 px-8 rounded tracking-widest max-w-72"
        type="submit"
      >
        Continue
      </button>
    </form>
  );
}

export default NameEntryForm;
