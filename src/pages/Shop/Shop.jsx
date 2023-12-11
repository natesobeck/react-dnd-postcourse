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

  const handleAddItem = item => {
    setUserInventory([item, ...userInventory])
    setShopInventory(shopInventory.filter(e => e._id !== item._id))
  }

  const handleRemoveItem = (item) => {
    setShopInventory([item, ...shopInventory])
    setUserInventory(userInventory.filter(e => e._id !== item._id))
  }

  return ( 
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        <InventoryList 
          title="Shop Inventory" 
          inventory={shopInventory} 
          handleAddItem={handleAddItem}
        />
        <InventoryList 
          title="User Inventory" 
          inventory={userInventory} 
          handleRemoveItem={handleRemoveItem}
        />
      </section>
    </main>
  )
}

export default Shop