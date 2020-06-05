import React from 'react';
// import {Link} from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <h3>About Page:</h3>
      <p className="blockText">
        Minneapolis has a Sick & Safe policy that has applied to all hours worked in the city since July 1st of 2017.</p>

      <p className="blockText"> It is the responsibility of employers to track Sick & Safe time for their employees and to tell them how much Sick & Safe they have accrued whenever an employee requests it.</p>

      <p className="blockText"> <b>The Sick & Safe Solution</b> helps employers track Sick & Safe time for their employees and easily provide employees with an explanation of their accrued time.</p>

      <p className="blockText">More information about the policy is available from the city of Minneapolis website. <br></br>Found here: <a href="//sicktimeinfo.minneapolismn.gov/">http://sicktimeinfo.minneapolismn.gov/</a>
      </p>

      


    </div>
  </div>
);

export default AboutPage;
