import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Index({ userName, authState, onAuthChange }) {
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-secondary text-center">
      {/* Header Section */}
      <header className="bg-dark text-white py-3">
        <h1>Ethan Clement<sup>&reg;</sup></h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/filters">
                Set Filters
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/paint">
                Coordinate a Time
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                About
              </a>
            </li>
          </ul>
        </nav>
        <hr />
      </header>

      {/* Main Content */}
      <main className="my-4">
        {authState !== AuthState.Unknown && (
          <h1>Welcome to Ethan's Website - Time Slot Machine</h1>
        )}

        {/* Show Authenticated or Unauthenticated views */}
        {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
          />
        )}

        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
              navigate('/filters'); // Redirect after successful login
            }}
          />
        )}

        {authState === AuthState.Unknown && <p>Loading...</p>}
      </main>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-3">
        <hr />
        <p className="mb-1">Ethan Moreno</p>
        <a
          href="https://github.com/EMoreno65/startup.git"
          className="text-reset"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}