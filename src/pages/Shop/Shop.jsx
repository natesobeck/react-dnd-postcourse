// npm modules
import { useState } from "react"

// components
import InventoryList from "../../components/InventoryList/InventoryList"

// data
import { inventoryData } from "../../data/data"

// css
import "./Shop.css"

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])

  // const handleAddItem = () => {
  //   setInventory([])
  // }

  return ( 
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        <InventoryList title="Shop Inventory" inventory={shopInventory} />
        <InventoryList title="User Inventory" inventory={userInventory} />
      </section>
    </main>
  )
}

export default Shop