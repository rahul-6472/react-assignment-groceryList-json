
const GroceryList = ({groceries,deleteGrocery}) => {
    return (
      <div>
           <h2 style ={{textAlign:"center", color:"orangered"}}>Grocery List</h2>
           {
              
              groceries.map((grocery) => (<div key = {grocery.id} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                 <h2 style ={{marginRight:"2rem"}}>{grocery.title}</h2>
                 <h2 style ={{marginRight:"2rem"}}>{grocery.qty} kg</h2>
                 <button style = {{width:"5%",cursor:"pointer",background:"red",fontSize:"1rem", color:"#fff", padding:"0.5rem", border:"none", borderRadius:"0.5rem"}} onClick = {() => deleteGrocery(grocery.id)}>Delete</button>
              </div>))
           }
      </div>
    )
  }
  
  export default GroceryList
  