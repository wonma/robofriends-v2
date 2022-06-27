import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='bg-light-blue br3 tc ma2 pa3 w5'>
      <img
        className='robot-wrap br-100 bg-dark-blue'
        alt='robots'
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <div className='description'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
