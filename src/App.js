import React from 'react';
// import the styles
import './App.css';
import './animation_vertical_down.css'
import './animation_vertical_up.css'
import './animation_horizontal_right.css'
import './animation_horizontal_left.css'
import logo from './logo.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
       
        
        <h1>
          Secret Knowledge Mentoring
        </h1>
       
       

        <div class="pvd pvd-1"></div>
        <div class="pvd pvd-2"></div>
        <div class="pvd pvd-3"></div>
        <div class="pvd pvd-4"></div>
        <div class="pvd pvd-5"></div>
        <div class="pvd pvd-6"></div>
        <div class="pvd pvd-7"></div>
        <div class="pvd pvd-8"></div>
        <div class="pvd pvd-9"></div>

        <div class="pvu pvu-1"></div>
        <div class="pvu pvu-2"></div>
        <div class="pvu pvu-3"></div>
        <div class="pvu pvu-4"></div>
        <div class="pvu pvu-5"></div>
        <div class="pvu pvu-6"></div>
        <div class="pvu pvu-7"></div>
        <div class="pvu pvu-8"></div>
        <div class="pvu pvu-9"></div>

        <div class="pvr pvr-1"></div>
        <div class="pvr pvr-2"></div>
        <div class="pvr pvr-3"></div>
        <div class="pvr pvr-4"></div>
        <div class="pvr pvr-5"></div>
        <div class="pvr pvr-6"></div>
        <div class="pvr pvr-7"></div>
        <div class="pvr pvr-8"></div>
        <div class="pvr pvr-9"></div>

        <div class="pvl pvl-1"></div>
        <div class="pvl pvl-2"></div>
        <div class="pvl pvl-3"></div>
        <div class="pvl pvl-4"></div>
        <div class="pvl pvl-5"></div>
        <div class="pvl pvl-6"></div>
        <div class="pvl pvl-7"></div>
        <div class="pvl pvl-8"></div>
        <div class="pvl pvl-9"></div>
        
      </header>

      <body className="App-body">

        <img src={logo} className="App-logo" alt="logo" />

        <section>
          <div class="heading">What we do</div>
          <div class="info" align="center">
            <p>Basically we mentor people in programming for reasonable 
            amounts of money.</p>
          </div>
          <div class="heading">Who we are for</div>
          <div class="info">
            <p>Our services are targeted specifically towards people 
            who find the material interesting and/or want to become
            good programmers. If you are looking just to pass a class
            or for job security you would do best with a tutor for the
            former and a different major for the latter.</p>
            
          </div>
          <div class="heading">How it works</div>
          <div class="info" align="center">
            <p>The process differs slightly depending on if the 
            student is in a class or learning independently.
            For the former we follow course content with 
            supplemental material and examples. For the latter
            we follow a custom lesson plan tailored to the 
            student. In either case we start out with an 
            in person interview to establish goals and expectations.
            From then on we can work remotely or if the student prefers
            in person given they a reasonable distance away. 
            Also while we are available on as needed basis it is
            strongly reccomended to stick to a weekly schedule. </p>
          </div>
          <div class="heading">Pricing</div>
          <div class="info">
            <p>Pricing starts at 30$ an hour for scheduled sessions with a discount
            of 50$ for a two hour session. While some tutors/mentors
            charge 50$ an hour this pricing is selected one to make it 
            accessible to college students paying for it themselves and two
            because at this time we are teaching programming and not software engineering
            (there is a difference), and 50$/hour is roughly the rate of a software
            engineer. Payment accepted through cashapp or venmo. </p>
          </div>

      </section>
      </body>
    </div>
  );
}

export default App;
