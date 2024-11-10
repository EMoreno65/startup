
import React, { useState } from 'react';

function Paint() {
  // Create a state object to track which buttons are active
  const [activeButtons, setActiveButtons] = useState({});

  const toggleButton = (buttonId) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [buttonId]: !prevState[buttonId],
    }));
  };

  // Render buttons dynamically to avoid repetition
  const buttonGroups = [
    ['AM', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6'],
    ['AM', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12'],
    ['PM', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6'],
    ['PM', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12'],
    ['AM', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6'],
    ['AM', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12'],
    ['PM', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6'],
    ['PM', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12'],
  ];
  // I made this based on how my buttons are structured in the original page

  return (
    <div>
      <header>
        <h1>Ethan<sup>&reg;</sup></h1>
        <nav>
          <menu>
            <a href="index.html">Home</a>
            <a href="filters.html">Set Filters</a>
            <a href="paint.html">Coordinate a Time</a>
            <a href="about.html">About</a>
          </menu>
        </nav>
        <hr />
      </header>

      <div className="button-container">
        <h3>Paint in Available Time Slots</h3>
        {buttonGroups.slice(0, 4).map((group, groupIndex) => (
          <div key={`group-${groupIndex}`} className="button-row">
            {group.map((buttonLabel, index) => {
              const buttonId = `toggleButton${groupIndex * 7 + index + 1}`;
              return (
                <button
                  key={buttonId}
                  id={buttonId}
                  className={activeButtons[buttonId] ? 'active' : ''}
                  onClick={() => toggleButton(buttonId)}
                >
                  {buttonLabel}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="button-container">
        <h3>When is Everyone Available?</h3>
        {buttonGroups.slice(4).map((group, groupIndex) => (
          <div key={`group-${groupIndex + 4}`} className="button-row">
            {group.map((buttonLabel, index) => {
              const buttonId = `toggleButton${(groupIndex + 4) * 7 + index + 1}`;
              return (
                <button
                  key={buttonId}
                  id={buttonId}
                  className={activeButtons[buttonId] ? 'active' : ''}
                  onClick={() => toggleButton(buttonId)}
                >
                  {buttonLabel}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="button-container">
        <button type="submit">Submit</button>
        <span>Recommended Time:</span>
        <input type="text" placeholder="Time will be calculated here" />
      </div>

      <footer>
        <hr />
        <span className="text-reset">Ethan Moreno</span>
        <br />
        <a href="https://github.com/EMoreno65/startup.git">GitHub</a>
      </footer>
    </div>
  );
}

export default Paint;
