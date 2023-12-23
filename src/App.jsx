import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './Components/Countries/Countries'

function App() {
 const [manyCountry, setManyCountry]=useState([])

 const [displayCountry,setDisplayCountry]=useState([])
 const [addFlaging,setAddFlaging]=useState([])

useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>setManyCountry(data))
},[])


const handleDisplayCountry=(countryName)=>{
const AddingCountry=[...displayCountry,countryName]
setDisplayCountry(AddingCountry)
console.log("i hve got it")
console.log(countryName)

}


const handleAddFlaging=(flaging)=>{

//  console.log("hello flag")
//   consol e.log(flaging)
const flag=[...addFlaging,flaging]
setAddFlaging(flag)
}

  return (
    <>
     <div>
     <h1>Vite + React</h1>
     <div>
      <ul>
        <h5>All country clicked now: {displayCountry.length}</h5>
        {/* <ol>All items show here:</ol> */}
        {/* <li>All items show here:</li> */}
        {
          displayCountry.map(countryNamee=><li>{countryNamee.name.common}</li>)
        }
      </ul>
      <div className='flag'>
        {
          addFlaging.map(flaging=><img src={flaging.flags.png}></img>)
        }
      </div>
     </div>
<div className='gridItem'>
{
  manyCountry.map(countryName=><Countries handleDisplayCountry={handleDisplayCountry} handleAddFlaging={handleAddFlaging} countryName={countryName}></Countries>)
}

</div>
{/* <Countries></Countries> */}


     </div>
    </>
  )
}

export default App
