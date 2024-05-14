import React from 'react';
import Grogu from './Grogu';

const Cell = ({isGroguHere}) => {

  return (
    <div>{isGroguHere&& <Grogu/>}</div>
  )
}

export default Cell