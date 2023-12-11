// npm modules
import { useEffect, useState } from "react"

// components
import SearchForm from "../../components/SearchForm/SearchForm"

// services
import { getSpellList } from "../../services/api-calls"
import SpellCard from "../../components/SpellCard/SpellCard"

const SpellSearch = () => {

  const [allSpells, setAllSpells] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchSpells = async () => {
      const spellData = await getSpellList()
      setAllSpells(spellData)
      setSearchResults(spellData)
    }
    fetchSpells()
  }, [])
  
  const handleSpellSearch = formData => {
    const filteredSpellResults = allSpells.filter(spell => (
      spell.name.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setSearchResults(filteredSpellResults)
  }

  return (  
    <main className="spell-list">
      <h1>Such spells...</h1>
      <SearchForm handleSpellSearch={handleSpellSearch} />
      {searchResults.length
        ?
          <h2>{searchResults.length} results found</h2>
        :
          <h2>No matching spell results found</h2>
      }
      {searchResults.map(spell => (
        <SpellCard key={spell._id} spell={spell} />
      ))}
    </main>
  )
}

export default SpellSearch;