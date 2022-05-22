import React from 'react'

const Offers = (props) => {
    
  return (
    <div>
      <section className="offers">
        <div className="container">
                {props.offers.map((offer,index)=>(<img key={index} className="offer" src={offer} alt="offerpic"/>))}
        </div>
    </section>
    </div>
  )
}

export default Offers
