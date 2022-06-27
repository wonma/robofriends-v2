import React from 'react';
import Card from './Card';
import './Card.css';

const Cardlist = ({ robots }) => {
  return (
    <div className='flex flex-wrap'>
      {robots.map((robot, i) => {
        return (
          <Card
            key={robot.id}
            name={robot.name}
            id={robot.id}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
