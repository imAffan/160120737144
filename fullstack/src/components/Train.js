import React from 'react';
import TrainDepartureTime from './TrainDepartureTime.js';
 
export default App = () => {
  // Replace this with the actual departure time data
  const departureTime = {
    Hours: 21,
    Minutes: 35,
    Seconds: 0
  };

  return (
    <div>
      <h1>Train Details</h1>
      <TrainDepartureTime departureTime={departureTime} />
    </div>
  );
};


 