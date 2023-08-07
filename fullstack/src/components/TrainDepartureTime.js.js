import React, { useState, useEffect } from 'react';

const TrainDepartureTime = ({ departureTime }) => {
  const [time, setTime] = useState(departureTime);

  useEffect(() => {
    // Function to update the time every second
    const updateDepartureTime = () => {
      const currentTime = new Date();
      const departureDateTime = new Date(currentTime);

      // Set the departure time based on the provided hours, minutes, and seconds
      departureDateTime.setHours(departureTime.Hours);
      departureDateTime.setMinutes(departureTime.Minutes);
      departureDateTime.setSeconds(departureTime.Seconds);

      // Calculate the time difference between the current time and departure time
      const timeDifference = Math.floor((departureDateTime - currentTime) / 1000);

      // Update the state with the new time difference
      setTime(timeDifference);
    };

    // Call the updateDepartureTime function every second
    const intervalId = setInterval(updateDepartureTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [departureTime]);

  // Format the time to display hours, minutes, and seconds
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return <div>Departure Time: {formatTime(time)}</div>;
};

export default TrainDepartureTime;
