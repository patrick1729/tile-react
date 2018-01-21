"use strict";

import React from 'react';

const Score = (props) => {
  return (
    <div>
      <p> Score: &nbsp;&nbsp;
		{props.scoreValue}
      </p>
    </div>
  );
}

export default Score;