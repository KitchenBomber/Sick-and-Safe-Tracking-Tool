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
      <h5 style={{ color: "#CB4335" }}>ATTENTION: The accuracy of the data provided by this application is limited by the accuracy of the data put into it. If you find discrepancies examine your source data for accuracy.</h5>
      <h5 style={{ color: "#CB4335" }}>Making corrections is easy!!</h5>

      <h5>For Employees:</h5>
      <p>You can use this application in two ways. You can log in and view your data using credentials supplied by your employer. Or you can create your own account to enter time for yourself.</p>

      <h5>For Supervisors:</h5>
      <p>You can use this application to track your employee's Sick & Safe time. The login information that you will provide will allow them to view only their own information. They will not be able to alter their records or see data about other employees.
    </p>

      <h5>For Administrators:</h5>
      <p>Coming soon! You'll be able to view all employee and supervisor information created for your org. You'll have the full access of a supervisor user for all supervisors reporting to you. Additionally, you will be able to move employees between teams and update end of year carryover hours. These features are currently unavailable.</p>


    </div>
  </div>
);

export default AboutPage;
