// import React from 'react';
import { useState } from "react";
import"./Countries.css"
const Countries = ({countryName,handleDisplayCountry,handleAddFlaging}) => {
    console.log(countryName)
   console.log(handleDisplayCountry)
    const {name,area,flags}=countryName
//    const{name}=countryName
    // console.log(country)
//  const {name}=(country)
const [visited,setVisited]=useState(false)
console.log(visited)
const daynamicVisited=()=>{
 setVisited(!visited)
// console.log("all country are visited Rahims and Karim")

}
    return (
        <div className={`indivitual ${visited?'lii':"not khaki"}`}>
            {/* <h1>This Country is show here</h1> */}
            <h3 style={{color:visited? 'red':'black'}}>my country name:{name.common}</h3>
            <h4>my country population:{area} </h4>
            <img src={flags.png} alt="" />
            <button onClick={daynamicVisited} className="buttonItem">{visited?"i have visited":"i will visit"}</button>
            <button onClick={()=>handleDisplayCountry(countryName)}>DaynamicCountry</button>
            <br />
            <button onClick={()=>handleAddFlaging(countryName)}>AddFlaging</button>
        </div>
    );
};

export default Countries;