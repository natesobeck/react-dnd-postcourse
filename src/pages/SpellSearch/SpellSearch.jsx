// npm modules
import { useState } from "react"

// components
import SearchForm from "../../components/SearchForm/SearchForm"

const SpellSearch = () => {

  const [allSpells, setAllSpells] = useState([])

  return (  
    <main className="spell-list">
      <h1>Such spells...</h1>
      <SearchForm />
    </main>
  )
}

export default SpellSearch;