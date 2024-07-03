import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`slider-container ${isToggled ? 'active' : ''}`} onClick={handleToggle}>
      <div className="slider"></div>
    </div>
  );
};

export default ToggleButton;
