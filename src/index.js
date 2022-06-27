import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Card from './Card';
import { robots } from './robots';

ReactDOM.render(
  <div>
    <Card name={robots[0].name} id={robots[0].id} email={robots[0].email} />
    <Card name={robots[1].name} id={robots[1].id} email={robots[1].email} />
    <Card name={robots[2].name} id={robots[2].id} email={robots[2].email} />
  </div>,
  document.getElementById('root')
);
