import React from 'react';

const StatusButton = ({ available, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`status-btn ${available ? 'available' : 'checked-out'}`}
    >
      {available ? 'Available' : 'Checked Out'}
    </button>
  );
};

export default StatusButton;