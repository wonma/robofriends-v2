import React from 'react';
import './Card.css';

const Card = ({ id, name, username, email }) => {
  return (
    <div className='bg-light-blue fl br3 tc sans-serif ma2 pa3'>
      <img
        className='robot-wrap br-100 bg-dark-blue'
        alt='robots'
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
