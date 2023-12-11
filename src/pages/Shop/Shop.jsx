// data
import { inventoryData } from "../../data/data"

const Shop = () => {
  return ( 
    <main>
      <h1>Shop</h1>
      <ul>
        {inventoryData.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Cost: {item.cost}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Shop