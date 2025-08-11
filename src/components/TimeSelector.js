import React from 'react';

const TimeSelector = ({ onSelect }) => {
  const times = ['Advent', 'Lent', 'Easter'];

  return (
    <div>
      {times.map(time => (
        <button key={time} onClick={() => onSelect(time)}>
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;