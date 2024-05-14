import React from 'react';
import Grogu from './Grogu';

const Cell = ({isGroguHere}) => {

  return (
    <div className='cell'>{isGroguHere && <Grogu/>}</div>
  )
}

export default Cell