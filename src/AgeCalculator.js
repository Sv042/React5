import React, { useState } from 'react';

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    const ageDiff = today - birthDate;
    const ageDate = new Date(ageDiff);

    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div>
        <label>Enter Your Birthdate:</label>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;
