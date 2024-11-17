import React from 'react';

export function About() {
  return (
    <div>
      <header>
        <h1>
          Ethan Clement<sup>&reg;</sup>
        </h1>

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
        <div id="picture" className="picture-box">
          <img
            width="400px"
            src="https://th.bing.com/th/id/OIP.QtAKKG86a_Unyqy5f_fPMAHaE8?rs=1&pid=ImgDetMain"
            alt="clock"
          />
        </div>

        <p>
          This website is a system where everyone selects their availability to
          plan some event. When everyone puts in their options, it shows a full
          chart that only highlights times when everyone is available.
        </p>
      </main>

      <footer>
        <hr />
        <span className="text-reset">Ethan Moreno</span>
        <br />
        <a href="https://github.com/EMoreno65/startup.git">GitHub</a>
      </footer>
    </div>
  );
}
