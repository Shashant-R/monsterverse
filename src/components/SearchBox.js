import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba br3 b--red bg-washed-red'
				type='search' 
				placeholder='Find your Monster'
				onChange={searchChange}
			/>
		</div>	
	);
}
export default SearchBox;