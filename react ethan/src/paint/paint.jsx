import React, { useState } from 'react';
import './Paint.css'; // Ensure you have CSS for the "active" class.

export function Paint() {
  // State to track active buttons by label
  const [activeButtons, setActiveButtons] = useState({});

  const toggleButton = (buttonLabel) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [buttonLabel]: !prevState[buttonLabel], // Toggle the state of the button by its label
    }));
  };

  // Button groups (first 4 rows and bottom 4 rows)
  const buttonGroups = [
    ['AM', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6'],
    ['AM', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12'],
    ['PM', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6'],
    ['PM', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12'],
  ];

  return (
    <div>
      <header>
        <h1>Ethan<sup>&reg;</sup></h1>
        <hr />
      </header>

      <div className="button-container">
        <h3>Paint in Available Time Slots</h3>
        {buttonGroups.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`} className="button-row">
            {group.map((buttonLabel) => (
              <button
                key={buttonLabel}
                className={activeButtons[buttonLabel] ? 'active' : ''}
                onClick={() => toggleButton(buttonLabel)}
              >
                {buttonLabel}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="button-container">
        <h3>When is Everyone Available?</h3>
        {buttonGroups.map((group, groupIndex) => (
          <div key={`bottom-group-${groupIndex}`} className="button-row">
            {group.map((buttonLabel) => (
              <button
                key={`bottom-${buttonLabel}`}
                className={activeButtons[buttonLabel] ? 'active' : ''}
                onClick={() => toggleButton(buttonLabel)}
              >
                {buttonLabel}
              </button>
            ))}
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


