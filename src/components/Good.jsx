import React from 'react'

const Good = ({goods}) => {

  return (
    <section className="goods-container">
        {goods.map((item,index)=>(
            <div className="goods-item" key={index}>{item}</div>
        ))}
    </section>
  )
}

export default Good
