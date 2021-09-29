import React from 'react';

export default function Button({
  buttonType,
  buttonOnClick,
  buttonText,
}) {
  return (
    <button
      type={buttonType}
      onClick={buttonOnClick}
    >
      {buttonText}
    </button>
  );
}
