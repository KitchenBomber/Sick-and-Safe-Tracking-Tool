import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <h3>Information Page:</h3>
    <p className="blockText">
      Minneapolis has a Sick & Safe policy that has applied to all hours worked in the city since July 1st of 2017.</p>
    
    <p className="blockText"> It is the responsibility of employers to track Sick & Safe time for their employees and to be able to tell an employee how much they have accrued whenever they requests it.</p>
    
    <p className="blockText"> This tool helps employers track Sick & Safe time for their employees. It can also be used by employees to make sure their employer is accurately tracking their time.</p>
    
    <p className="blockText">More information about the policy is available from the cities website Here: <a href="//sicktimeinfo.minneapolismn.gov/">http://sicktimeinfo.minneapolismn.gov/</a>
      </p>

  </div>
);

export default InfoPage;
