import React from 'react';
import Grogu from './Grogu';

const Cell = ({groguPosition}) => {

  return (
    <div className='cell'>{groguPosition && <Grogu/>}</div>
  )
}

export default Cell
