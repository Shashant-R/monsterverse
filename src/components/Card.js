import React from 'react';
//import './Card.css';
const Card =({id, name, email}) =>{
	return (
		<div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5' id='flip-vertical-left'>
			<img alt='monster' src={`https://robohash.org/${99*id+1}}?set=set2&size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;
