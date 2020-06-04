import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <h3>Information Page:</h3>
    <h4>Alert: The accuracy of this application is only as good as the data entered into it. If you find discrepancies consult your source data. Making necessary corrections is easy!</h4>

    <h5>For Employees:</h5>
    <p>You can log in, in View mode using credentials supplied by your employer. Or you can create your own account and enter time for yourself if you don't think your employer is tracking your time accurately.</p>

    <h5>For Supervisors:</h5>
    <p>You can use this application to track your employees Sick and Safe time. The login information that you will provide your employees will allow them to view only their own information. They will not be able to alter their records or see other files.
    </p>

    <h5>For Administrators:</h5>
    <p>Coming soon! You'll be able to view all employee  and supervisor information, move employees between teams and update end of year carryover hours. These features are currently unavailable.</p>

  </div>
);

export default InfoPage;
