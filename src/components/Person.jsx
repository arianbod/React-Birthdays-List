import React from 'react';
import avatar1 from '../assets/img/avatar.svg';
import avatar2 from '../assets/img/avatar2.svg';
import avatar3 from '../assets/img/avatar3.svg';
const Person = ({ name, age, image }) => {
	return (
		<article className='person'>
			<img
				src={image}
				className='avatar'
				style={{
					width: 80,
					height: 80,
					borderRadius: 100,
				}}
			/>
			<div className='wrapper child-wrapper'>
				<h4 className='name'>{name}</h4>
				<p className='age p'>{age} years</p>
			</div>
		</article>
	);
};

export default Person;
