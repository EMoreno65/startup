import React, { useState, useEffect } from 'react';
import './Paint.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import PaintNotifier from './PaintNotifier';  
// import { username } from '../App.jsx';
// import { username } from '../index/authenticated.jsx';

const paintNotifier = new PaintNotifier(); 

// In here, make a general message function

export function Paint(props) {
  const username = props.userName
  const [activeButtons, setActiveButtons] = useState({});
  const [recommendedTime, setRecommendedTime] = useState('');
  const [messages, setMessages] = useState([]); // Step 1: State for messages

  // Handling paint events
  useEffect(() => {
    paintNotifier.addHandler(handlePaintEvent);
    return () => {
      paintNotifier.removeHandler(handlePaintEvent);
    };
  }, []);

  function handlePaintEvent(event) {
    setMessages((prevMessages) => [...prevMessages, event]);
  }

  const sendMessage = (selectedButton, user, message) => {
    const formattedMessage = `${user} chose '${selectedButton}'`;
    
    console.log(formattedMessage); // Debug: log the formatted message
    
    setMessages((prevMessages) => [...prevMessages, formattedMessage]);

    paintNotifier.sendMessage(formattedMessage);
};

  // Function to handle button toggle
  const toggleButton = (buttonLabel) => {
    setActiveButtons((prevState) => {
      const updatedState = {
        ...prevState,
        [buttonLabel]: !prevState[buttonLabel],
      };

      const selectedTimes = Object.keys(updatedState).filter(
        (label) => updatedState[label]
      );

      fetchRecommendedTime(selectedTimes);

      sendMessage(buttonLabel, 'User123', ' chose ');

      console.log(selectedTimes);

      return updatedState;
    });
  };

  // Fetch recommended time from server
  const fetchRecommendedTime = async (selectedTimes) => {
    try {
      const response = await fetch('/api/best-time', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedTimes }),
      });

      if (response.ok) {
        const data = await response.json();
        setRecommendedTime(data.bestTime);
      } else {
        console.error('Failed to fetch best time');
      }
    } catch (err) {
      console.error('Error fetching best time:', err);
    }
  };

  const buttonGroups = [
    ['AM', '7-8', '8-9', '9-10', '10-11', '11-12'],
    ['PM', '12-1', '1-2', '2-3', '3-4', '4-5', '5-6'],
    ['PM', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12'],
  ];

  // Step 2: Handle WebSocket messages
  useEffect(() => {
    const handleMessage = (event) => {
      console.log("Received WebSocket message:", event);
      setMessages((prevMessages) => [...prevMessages, event]); // Update messages state
    };

    paintNotifier.addHandler(handleMessage); // Add handler for WebSocket messages

    // Cleanup function to remove handler
    return () => {
      paintNotifier.removeHandler(handleMessage);
    };
  }, []);

  // Initial join/leave requests for PaintNotifier
  useEffect(() => {
    paintNotifier.sendJoinRequest();

    return () => {
      paintNotifier.sendLeaveRequest();
    };
  }, []);

  return (
    <div>
      <header>
        <h1>Find Your Time</h1>
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
        <NavLink className="nav-link" to="/filters">
          Go Back
        </NavLink>
        <span>Recommended Time:</span>
        <input
          type="text"
          placeholder="Time will be calculated here"
          value={recommendedTime}
          readOnly
        />
      </div>

      <div className="messages-container">
        <h3>Messages:</h3>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{JSON.stringify(message)}</li>
          ))}
        </ul>
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





