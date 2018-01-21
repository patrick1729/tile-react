"use strict";

import React from 'react';

const Guide = () => {
	return(
		<table>
		<tr>
			<td>
				<div className="guide" style={{backgroundColor: '#EC407A'}}></div>
			</td>
			<td>-2</td>
			<td>
				<div className="guide" style={{backgroundColor: '#42A5F5'}}></div>
			</td>
			<td>+1</td>
			<td>
				<div className="guide" style={{backgroundColor: '#26A69A'}}></div>
			</td>
			<td>+3</td>
		</tr>
		
		</table>
	);
}

export default Guide;