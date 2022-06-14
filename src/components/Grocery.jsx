import GroceryInput from "./GroceryInput"
import GroceryList from "./GroceryList"
const Grocery = ({groceries,addGrocery,deleteGrocery}) => {
  return (
    <div>
      <GroceryInput addGrocery = {addGrocery}/>
      <GroceryList groceries = {groceries} deleteGrocery = {deleteGrocery} />
    </div>
  )
}

export default Grocery
