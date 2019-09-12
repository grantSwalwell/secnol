import React from 'react';
import Collapsible from 'react-collapsible';
// import the styles
import './App.css';
import logo from './logo.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Secret Knowledge Mentoring
        </h1> 
      </header>

      <body className="App-body">

        <img src={logo} className="App-logo" alt="logo" />

        

        <section display="inline-block">

        <div class="heading" align="center">Learn to code, the right way.</div>

        <Collapsible trigger="Services" 
          triggerClassName="CustomTriggerCSS" 
          triggerOpenedClassName="CustomTriggerCSS--open"
          contentOuterClassName="CustomOuterContentCSS"
          contentInnerClassName="CustomInnerContentCSS">
          <div class="info" align="center">
            <p>hello world</p>
          </div>

          <div align="left">
            <Collapsible trigger="sub1"
          triggerClassName="CustomTriggerSubCSS" 
          triggerOpenedClassName="CustomTriggerSubCSS--open"
          contentOuterClassName="CustomOuterContentCSS"
          contentInnerClassName="CustomInnerContentCSS">
          <div class="info" align="center">
            <p>hello world</p>
          </div>
        </Collapsible>
        </div>
          
        </Collapsible>

        
            
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
