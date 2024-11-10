import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Ethan Clement<sup>&reg;</sup></h1>
        {/* Navigation */}
        <nav>
          <menu>
            <form>
              <a href="/">Home</a>
              <a href="/filters">Set Filters</a>
              <a href="/paint">Coordinate a Time</a>
              <a href="/about">About</a>
            </form>
          </menu>
        </nav>
        <hr />
      </header>

      {/* Main Content */}
      <main>
        <h1>Welcome to Ethan's Website - Time Slot Machine</h1>
        <form method="get" action="/filters">
          <div>
            <label>Username:</label>
            <input type="text" placeholder="Insert Username Here" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Insert Password Here" />
          </div>
          <button type="submit">Login</button>
          <button type="submit">Register</button>
        </form>
      </main>

      {/* Footer */}
      <footer>
        <hr />
        <span className="text-reset">Ethan Moreno</span>
        <br />
        <a href="https://github.com/EMoreno65/startup.git">GitHub</a>
      </footer>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>Welcome to My React App</h1>
//       <p>This is a test paragraph to ensure rendering works.</p>
//     </div>
//   );
// }


// function App() {
//   const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
//   const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
//   const [authState, setAuthState] = React.useState(currentAuthState);

//   return (
//     <BrowserRouter>
//       <div className='body bg-dark text-light'>
//         <header className='container-fluid'>
//           <nav className='navbar fixed-top navbar-dark'>
//             <div className='navbar-brand'>
//               Simon<sup>&reg;</sup>
//             </div>
//             <menu className='navbar-nav'>
//               <li className='nav-item'>
//                 <NavLink className='nav-link' to=''>
//                   Login
//                 </NavLink>
//               </li>
//               {authState === AuthState.Authenticated && (
//                 <li className='nav-item'>
//                   <NavLink className='nav-link' to='play'>
//                     Play
//                   </NavLink>
//                 </li>
//               )}
//               {authState === AuthState.Authenticated && (
//                 <li className='nav-item'>
//                   <NavLink className='nav-link' to='scores'>
//                     Scores
//                   </NavLink>
//                 </li>
//               )}
//               <li className='nav-item'>
//                 <NavLink className='nav-link' to='about'>
//                   About
//                 </NavLink>
//               </li>
//             </menu>
//           </nav>
//         </header>

//         <Routes>
//           <Route
//             path='/'
//             element={
//               <Login
//                 userName={userName}
//                 authState={authState}
//                 onAuthChange={(userName, authState) => {
//                   setAuthState(authState);
//                   setUserName(userName);
//                 }}
//               />
//             }
//             exact
//           />
//           <Route path='/play' element={<Play userName={userName} />} />
//           <Route path='/scores' element={<Scores />} />
//           <Route path='/about' element={<About />} />
//           <Route path='*' element={<NotFound />} />
//         </Routes>

//         <footer className='bg-dark text-dark text-muted'>
//           <div className='container-fluid'>
//             <span className='text-reset'>Author Name(s)</span>
//             <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
//               Source
//             </a>
//           </div>
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }

// function NotFound() {
//   return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
// }

export default App;