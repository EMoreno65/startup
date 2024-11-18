import React, { useState } from 'react';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>@</span>
          <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          <span className='input-group-text'>🔒</span>
          <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
        <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}

// export function Unauthenticated({ userName, onLogin }) {
//   const [username, setUsername] = useState(userName || '');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username.trim()) {
//       onLogin(username); // Pass username back to parent for login
//     } else {
//       alert('Please enter your username and password!');
//     }
//   };

//   return (
//     <div className="bg-light p-4 rounded shadow mx-auto" style={{ maxWidth: '400px' }}>
//       <h3 className="mb-3">Login</h3>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             className="form-control"
//             placeholder="Insert Username Here"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="form-control"
//             placeholder="Insert Password Here"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary me-2">
//           Login
//         </button>
//         <button
//           type="button"
//           className="btn btn-secondary"
//           onClick={() => alert('Registration feature is not implemented yet.')}
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }
