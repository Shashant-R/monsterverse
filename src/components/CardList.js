import React from 'react';
import Card from './Card';
const CardList = ({Monsters}) =>{
	/*if(true) {
		throw new Error('Monsters hacked into the system');
	}*/
	return (
		<div>
	    {
    		Monsters.map((user, i) =>{
				return (
					<Card 
						key={i} 
						id={Monsters[i].id} 
						name={Monsters[i].name} 
						email={Monsters[i].email}
					/>
				);
			})
		}
	    </div>
	);
}
export default CardList;