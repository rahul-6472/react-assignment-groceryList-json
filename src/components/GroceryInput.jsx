
import {useState} from "react"

const GroceryInput = ({addGrocery}) => {

    const [item, setItem] = useState("")
    const [qty, setQty] = useState("")

    const submit = (e) =>{
        e.preventDefault()

        if (!item || !qty){
            alert("item and qty can't be empty!")
        }
        else{
            addGrocery(item,qty)
            setItem("")
            setQty("")
        }
       
    }
   

  return (
    <form onSubmit = {submit} style= {{ border:"1px solid #cecece",width:"35%",height:"35vh",margin:"auto",marginTop: "6rem",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}}>
        
        <h2 style = {{textAlign:"center",color:"orangered"}}>Add Grocery</h2>
        
        <div style = {{marginBottom: "1rem"}}>
            <label style= {{color:"blue"}} >Item:</label>
            <input type = "text" placeholder = "add item"  value = {item} onChange = {(e) => setItem(e.target.value)}/>
        </div>
        <div style = {{marginBottom: "1rem"}}>
            <label style= {{color:"blue"}}>Qty:</label>
            <input type = "number" placeholder = "add qty" value = {qty} onChange = {(e) => setQty(e.target.value)}/>
        </div>

        <input type = "submit" value = "Add" style ={{ fontSize:"1.2rem",width:"45%", background:"green",color:"#fff",border:"none",padding:"0.5rem",borderRadius:"0.5rem",cursor:"pointer"}}/>
    
    </form>
  )
}

export default GroceryInput
