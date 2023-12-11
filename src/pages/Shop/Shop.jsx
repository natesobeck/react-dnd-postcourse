// npm modules
import { useState } from "react"

// components
import InventoryList from "../../components/InventoryList/InventoryList"

// data
import { inventoryData } from "../../data/data"

const Shop = () => {
  const [inventory, setInventory] = useState(inventoryData)

  const handleAddItem = () => {
    setInventory([...inventory, { _id: 62555, name: 'Magic Wand', cost: 1, weight: 2 }])
  }

  return ( 
    <main>
      <h1>Shop</h1>
      <button onClick={handleAddItem}>Click It</button>
      <InventoryList inventory={inventory}/>
    </main>
  )
}

export default Shop