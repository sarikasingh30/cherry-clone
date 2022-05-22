
import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';
import userInfo from "./data/userinfo.json"
import offers from "./data/offers.json"
import restaurants from"./data/restaurants.json";
import { useState } from 'react';
const filters={
     1: "Cost High to Lost",
     2: "Cost Lost to High",
     3: "Ratings",
     4: "Delivery Time",
     5: "Relevance"
  
}
function App() {
  const[filterby, setFilterby]=useState("");
  const [data,setData]=useState(restaurants);
  const updateFilter=(newfilter)=>{
    // console.log(newfilter)
    
    switch(newfilter){
      case "1":{
          setFilterby(1);
          data.sort((a,b)=>b.costForTwo-a.costForTwo);
          setData(data);
          break;
      }
      case "2":{
        setFilterby(2);
        data.sort((a,b)=>a.costForTwo-b.costForTwo);
        setData(data);
        break;
      }
      case "3":{
        setFilterby(3);
        data.sort((a,b)=>b.rating-a.rating);
        setData(data);
        break;
      }
      case "4":{
        setFilterby(4);
        data.sort((a,b)=>
          Number(a.deliveryTimings.split(" ")[0]-Number(b.deliveryTimings.split(" ")[0])))
        setData(data);
        break;
      }
      case "5":{
        setFilterby(5);
        data.sort((a,b)=>
          Number(a.offer[0].split(" ")[0].slice(0,2))-Number(b.offer[0].split(" ")[0].slice(0,2)))
        setData(data);
        break;
      }
      default:{
        setData(restaurants);
        break;
      }
    }
  }
  return (
    <div className="App">
      <Navbar {...userInfo.location}/>
      <Offers offers={offers}/>
      <section className="near-you">
      <Filters filters={filters} currentFilteredby={filterby} updateFilter={updateFilter}/>
      <Restaurants restaurants={data}/>
      </section>
    </div>
  );
}

export default App;
