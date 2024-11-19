import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

export function Filters() {
    const [hours, setHours] = useState('');
    const [people, setPeople] = useState('');
    const [timeOfDay, setTimeOfDay] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Filters:', { hours, people, timeOfDay });
    };

    return (
        <div>
            <header>
                <h1>Filters</h1>

                {/* Navigation */}
                {/* <nav>
                    <menu>
                        <a href="index.html">Home</a>
                        <a href="filters.html">Set Filters</a>
                        <a href="paint.html">Coordinate a Time</a>
                        <a href="about.html">About</a>
                    </menu>
                </nav> */}
                <hr />
            </header>

            <main>
                <div className="filters">
                    <p>Filters:</p>
                    <span className="alloted_time">Please Specify for your alloted time </span>
                </div>

                <form onSubmit={handleSubmit}>
                    <h3>How much Time Needed</h3>
                    <label htmlFor="hours">Choose how many hours: </label>
                    <select
                        id="hours"
                        name="hours"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                    >
                        {[...Array(12).keys()].map((i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <br />
                    <h3>Number of people that need to agree </h3>
                    <label htmlFor="people">Choose how many people: </label>
                    <select
                        id="people"
                        name="people"
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                    >
                        {[...Array(12).keys()].map((i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <br />
                    <h3>What time of day is preferred? </h3>
                    <label htmlFor="time-of-day">Choose when in the day: </label>
                    <select
                        id="time-of-day"
                        name="time-of-day"
                        value={timeOfDay}
                        onChange={(e) => setTimeOfDay(e.target.value)}
                    >
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                    </select>

                    <br />
                    <button type="submit">Submit Filters</button>
                </form>

                <div className='navbar-nav'>
                <NavLink className='nav-link' to='/paint'>
                    Proceed to Time Selection
                </NavLink>
                <NavLink className='nav-link' to='/index'>
                Go Back
                </NavLink>
                </div>
            </main>

            <footer>
                <hr />
                <span className="text-reset">Ethan Moreno</span>
                <br />
                <a href="https://github.com/EMoreno65/startup.git">GitHub</a>
            </footer>
        </div>
    );
};