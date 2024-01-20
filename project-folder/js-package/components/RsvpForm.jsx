import React, { useState } from 'react';

function RsvpForm({ guestDetails }) {
  const [rsvp, setRsvp] = useState({ guestPrimary: '', guestPlusOne: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Log the RSVP details for debugging
    console.log('RSVP for Primary Guest:', rsvp.guestPrimary, guestDetails);
    console.log('RSVP for Plus One:', rsvp.guestPlusOne, guestDetails);

    // Assuming rsvp and guestDetails are already defined and hold the necessary data
    // You need to format the data according to your API's requirements

    const data = {
      submittedAt: Date.now().toString(), // This will set current timestamp
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
