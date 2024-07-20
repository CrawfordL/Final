import React from 'react';

const Button = ({ name, action, counter, setCounter }) => {
  const handleClick = () => {
    if (action === 'add') {
      setCounter(counter + 1);
    } else if (action === 'subtract') {
      setCounter(counter - 1);
    } else if (action === 'reset') {
      setCounter(0);
    }
  };

  return (
    <button onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;