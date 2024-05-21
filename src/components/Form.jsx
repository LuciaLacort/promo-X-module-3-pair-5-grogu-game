import React from 'react'

const Form = ({setName}) => {
    const handleChange = (event)  => {
        const value = event.target.value;
        setName(value);
    }

  return (
    <form className="form">
        <input type="text" name= "name" onChange={handleChange}/>
    </form>
  )
}

export default Form