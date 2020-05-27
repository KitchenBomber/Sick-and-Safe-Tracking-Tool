import React from 'react';
// import {Link} from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Minneapolis has a Sick and Safe policy that has applied to all hours worked in the city since July 1st of 2017. It is the responsibility of employers to track sick and safe time for their employees and be able to tell them how much they have accrued within a reasonable amount of time. This tool helps employers track time for their employees and allows employees to check to make sure their time is being accurately tracked.

        More information about the policy is available from the cities website Here: <a href="//sicktimeinfo.minneapolismn.gov/">http://sicktimeinfo.minneapolismn.gov/</a>
      </p>
    </div>
  </div>
);

export default AboutPage;
