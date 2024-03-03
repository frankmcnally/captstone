import React, { useState} from 'react';


const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                        </div>

                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                                <select id='book-time' key={times} value={times} onChange={(e) => setTimes(e.target.value)} required>
                                    <option>1pm</option>
                                    <option>2pm</option>
                                    <option>3pm</option>
                                    .<option>4pm</option>
                                    <option>5pm</option>
                                    <option>6pm</option>
                                    <option>7pm</option>
                                    <option>8pm</option>
                                    <option>9pm</option>
                                    <option>10pm</option>
                               </select>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number of Guests</label>
                            <input id='book-guests' value={guests} onChange={(e) => setGuests(e.target.value)} type='number' min='1' max='10' required />
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Occasion</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value
                            )} required>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Wedding</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit' value={'Make Your Reservation'}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;