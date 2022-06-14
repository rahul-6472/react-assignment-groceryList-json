
import './App.css';
import Grocery from "./components/Grocery"
import {useState,useEffect} from  "react"



function App() {

const [error, setError] = useState (false)
const [loading,  setLoading] = useState (false)
const [groceries,setGroceries] = useState([])


const getGroceries = () =>{

  setLoading(true)

  fetch(`http://localhost:3001/groceries`)
  .then((res) => (res.json()))
  .then ((res) =>{
    setGroceries(res)
  })
  .catch((err) =>{
    setError(true)
    setGroceries([])
  })
  .finally(()=>{
    setLoading(false)
  })

}
useEffect(()=>{
  getGroceries()
},[])

const addGrocery = (title,qty) => {
  let id 
  if(groceries.length === 0){
    id = 1
  }
  else{
    id = groceries[groceries.length -1].id + 1
  }

  const grocery = {
    title:title,
    qty:qty,
    id:id
  }
  setLoading(true)
  fetch(`http://localhost:3001/groceries`, {
    method:"POST",
    body:JSON.stringify(grocery),
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then((res) => (res.json()))
  .then((res) =>{
    setError(false)
    return getGroceries()
  })
  .catch((error) => {
    setError(true)
  })
  .finally(()=>{
    setLoading(false)
  })
}

const deleteGrocery = (id) =>{
  fetch(`http://localhost:3001/groceries/${id}`, {
    method:"DELETE"
  })
  .then((res) => (res.json()))
  .then ((res) => {
    setError(false)
    return getGroceries()
  })
  .catch((error) => {
    setError(true)
  })
  .finally(()=>{
    setLoading(false)
  })
}
  return loading ? (<h3>Loading...</h3>) : error ? (<h3>Error</h3>) : (
    <div className="App">
     <Grocery groceries = {groceries} deleteGrocery = {deleteGrocery} addGrocery = {addGrocery}/>
    </div>
  )

}

export default App;
