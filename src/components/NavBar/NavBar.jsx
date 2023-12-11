// npm modules
import { Link } from 'react-router-dom'

// assets
import d20 from '../../assets/d20.png'

const NavBar = () => {
  return (  
    <header>
      <img 
        src={d20}
        alt="A d20 dice used in D&D" className="logo" 
      />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/monsters">Scary Monstahs</Link>
        <Link to="/spells">Search a Spell</Link>
      </nav>
    </header>
  )
}

export default NavBar