import React, { useState } from 'react';

function RsvpForm({ guestDetails }) {
  const [rsvp, setRsvp] = useState({ guestPrimary: '', guestPlusOne: '' });

  const handleChange = (guest, value) => {
    setRsvp((prevRsvp) => ({
      ...prevRsvp,
      [guest]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the RSVP values
    console.log('RSVP for Primary Guest:', rsvp.guestPrimary, guestDetails);
    console.log('RSVP for Plus One:', rsvp.guestPlusOne, guestDetails);
    // Further processing or submission of rsvp data
  };

  return (
    <>
      {guestDetails && (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <span className="font-serif text-3xl pb-3">
              {guestDetails.name}
            </span>
            <div className="flex flew-row gap-3">
              <input
                type="radio"
                id="guestPrimaryWillAttend"
                name="guestPrimaryRsvp"
                value="willAttend"
                checked={rsvp.guestPrimary === 'willAttend'}
                onChange={() => handleChange('guestPrimary', 'willAttend')}
              />
              <label htmlFor="guestPrimaryWillAttend">Will Attend</label>
              <br />

              <input
                type="radio"
                id="guestPrimaryWillNotAttend"
                name="guestPrimaryRsvp"
                value="willNotAttend"
                checked={rsvp.guestPrimary === 'willNotAttend'}
                onChange={() => handleChange('guestPrimary', 'willNotAttend')}
              />
              <label htmlFor="guestPrimaryWillNotAttend">Will Not Attend</label>
              <br />
            </div>
          </div>
          <div className="flex flex-col items-center pb-8">
            <span className="font-serif text-3xl pb-3">
              {guestDetails.plusOneName}
            </span>
            <div className="flex flew-row gap-3">
              <input
                type="radio"
                id="guestPlusOneWillAttend"
                name="guestPlusOneRsvp"
                value="willAttend"
                checked={rsvp.guestPlusOne === 'willAttend'}
                onChange={() => handleChange('guestPlusOne', 'willAttend')}
              />
              <label htmlFor="guestPlusOneWillAttend">Will Attend</label>
              <br />

              <input
                type="radio"
                id="guestPlusOneWillNotAttend"
                name="guestPlusOneRsvp"
                value="willNotAttend"
                checked={rsvp.guestPlusOne === 'willNotAttend'}
                onChange={() => handleChange('guestPlusOne', 'willNotAttend')}
              />
              <label htmlFor="guestPlusOneWillNotAttend">Will Not Attend</label>
              <br />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              className="bg-amber-700 hover:bg-amber-900 text-white py-4 px-8 rounded tracking-widest max-w-72"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default RsvpForm;
