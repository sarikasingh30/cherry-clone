import React from 'react'
import "../App.css"
const Filters = ({filters,currentFilteredby, updateFilter}) => {
    
  return (
        <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
            {Object.entries(filters).map(([key,value])=>
            <div key={key} className={`restaurant-option ${currentFilteredby==key?"boldtype":""}`}onClick={()=>updateFilter(key)}>{value}</div>
            )}
            </div>
        </div>
  )
}

export default Filters
