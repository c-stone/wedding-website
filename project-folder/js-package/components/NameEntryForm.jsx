import React, { useState } from 'react';

function NameEntryForm({ setGuestDetails, guests }) {
  const [guestName, setGuestName] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // New state variable for error message

  const handleNameChange = (event) => {
    setGuestName(event.target.value);
    setErrorMessage(''); // Reset error message on name change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const guest = guests.find(
      (g) =>
        g.name.toLowerCase() === guestName.toLowerCase().trim() ||
        g.plusOneName.toLowerCase() === guestName.toLowerCase().trim(),
    );

    if (guest) {
      console.log(guest);
      setGuestDetails(guest);
      setErrorMessage(''); // Reset error message on successful find
    } else {
      setGuestDetails(null);
      setErrorMessage(`"${guestName.trim()}" not found. Please try again.`); // Set error message
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
      {errorMessage && (
        <div className="text-red-500">{errorMessage}</div> // Display error message if it exists
      )}
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
