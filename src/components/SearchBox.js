import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='bg-lightest-blue b- ba pa3'
                type='search' 
                placeholder='search robots here...'
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;