import React, { useState } from 'react';
import Spinner from './Spinner';

function RsvpForm({ guestDetails }) {
  const [rsvp, setRsvp] = useState({ guestPrimary: '', guestPlusOne: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [number, setNumber] = useState(0);

  if (!guestDetails) return;

  const { name, plusOneName } = guestDetails;
  const primaryFirstName = name.split(' ')[0];
  const primaryLastName = name.split(' ')[1];
  const plusOneFirstName = plusOneName.split(' ')[0];
  const plusOneLastName = plusOneName.split(' ')[1];

  const handleChange = (guest, value) => {
    setRsvp((prevRsvp) => ({
      ...prevRsvp,
      [guest]: value,
    }));
  };

  const handleNumberChange = (event) => {
    const inputNumber = event.target.value;
    // Ensure the input is within the desired range
    if (inputNumber >= 0 && inputNumber <= 10) {
      setNumber(inputNumber);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const data = {
      submittedAt: Date.now().toString(),
      fields: [
        {
          objectTypeId: '0-1',
          name: 'firstname',
          value: primaryFirstName,
        },
        {
          objectTypeId: '0-1',
          name: 'lastname',
          value: primaryLastName,
        },
        {
          objectTypeId: '0-1',
          name: 'rsvp',
          value: rsvp.guestPrimary,
        },
        {
          objectTypeId: '0-1',
          name: 'guest_first_name',
          value: plusOneFirstName,
        },
        {
          objectTypeId: '0-1',
          name: 'guest_last_name',
          value: plusOneLastName,
        },
        {
          objectTypeId: '0-1',
          name: 'guest_rsvp',
          value: rsvp.guestPlusOne,
        },
        {
          objectTypeId: '0-1',
          name: 'number_of_kids',
          value: number,
        },
      ],
    };

    try {
      const response = await fetch(
        'https://wedding.chrisandchar.com/_hcms/api/submitFormData',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        const jsonResponse = await response.json();
        setIsSubmitSuccess(true);

        console.log('RSVP Submission Success:', jsonResponse);
      } else {
        // handle HTTP responses that are not successful but don't throw an exception.
        setIsSubmitSuccess(false);
        console.error('RSVP Submission Failed:', response.status);
      }
    } catch (error) {
      setIsSubmitSuccess(false);
      console.error('Error during RSVP Submission:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitSuccess) {
    return (
      <div className="flex flex-col items-center align-middle">
        <span className="font-serif">Thank you!</span>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        <span className="font-serif text-3xl pb-3">{guestDetails.name}</span>
        <div className="flex flew-row gap-3">
          <input
            type="radio"
            id="guestPrimaryWillAttend"
            name="guestPrimaryRsvp"
            value="willAttend"
            checked={rsvp.guestPrimary === 'willAttend'}
            onChange={() => handleChange('guestPrimary', 'willAttend')}
            required
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
            required
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
      {guestDetails.hasChildren && (
        <div className="flex flex-col items-center pb-8">
          <label htmlFor="numberInput">Enter number of kiddos:</label>
          <input
            type="number"
            id="numberInput"
            name="number"
            value={number}
            onChange={handleNumberChange}
            min="0"
            max="10"
          />
        </div>
      )}
      <div className="flex flex-col items-center">
        <button
          className="bg-amber-700 hover:bg-amber-900 text-white py-4 px-8 rounded tracking-widest max-w-72"
          type="submit"
        >
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default RsvpForm;
