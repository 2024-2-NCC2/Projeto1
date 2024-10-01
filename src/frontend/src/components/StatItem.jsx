import React from 'react';

const StatItem = ({ number, description }) => {
  return (
    <div className="stat-item">
      <span className="stat-number">{number}</span>
      <p className="stat-description">{description}</p>
    </div>
  );
};

export default StatItem;