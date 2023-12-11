// components
import InventoryList from "../../components/InventoryList/InventoryList"

// data
import { inventoryData } from "../../data/data"

const Shop = () => {
  return ( 
    <main>
      <h1>Shop</h1>
      <InventoryList inventory={inventoryData}/>
    </main>
  )
}

export default Shop