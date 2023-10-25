import Person from './components/Person';
import data from './data';
import { useState } from 'react';
const App = () => {
	const [people, setPeople] = useState(data);
	return (
		<>
			<div className='container'>
				<h3 className='title'>5 Birthdays Today</h3>
				{people.map((person) => {
					return (
						<Person
							key={person.id}
							{...person}
						/>
					);
				})}
				<button
					onClick={() => setPeople([])}
					className='btn'
					style={{ margin: '10px', padding: '20px', width: '100%' }}>
					Clear list
				</button>
			</div>
		</>
	);
};
export default App;
