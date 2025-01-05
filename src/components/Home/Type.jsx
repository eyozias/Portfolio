import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
	return (
		<Typewriter
			options={{
				strings: [
					'Software Engineer',
					'Java Developer',
					'Proud Father',
					'Problem Solver',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
};

export default Type;
