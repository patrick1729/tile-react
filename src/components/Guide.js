"use strict";

import React from 'react';

// Component to display the score that is assigned to each tile
const Guide = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <div className="guide" style={{ backgroundColor: '#EC407A' }}></div>
          </td>
          <td>-2</td>
          <td>
            <div className="guide" style={{ backgroundColor: '#42A5F5' }}></div>
          </td>
          <td>+1</td>
          <td>
            <div className="guide" style={{ backgroundColor: '#26A69A' }}></div>
          </td>
          <td>+3</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Guide;