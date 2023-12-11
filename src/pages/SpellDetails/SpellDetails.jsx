// npm modules
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// services
import { getSpell } from "../../services/api-calls"

const SpellDetails = () => {

  const [spellDetails, setSpellDetails] = useState({})

  const { spellId } = useParams()

  useEffect(() => {
    const fetchSpell = async () => {
      const spellData = await getSpell(spellId)
      setSpellDetails(spellData)
    }
    fetchSpell()
  }, [spellId])

  if (!spellDetails.name) return <h2>Loading spell...</h2>

  return (  
    <main className="spell-details">
      <h1>Spell Details</h1>
      <h2>{ spellDetails.name }</h2>
      <h3>A level {spellDetails.level} {spellDetails.school} spell</h3>
      <img src="http://theoldreader.com/kittens/320/240/" alt="A cat" />
      <h3>Range: {spellDetails.range}</h3>
      <h3>Description:</h3>
      <div className="subsection">
        <p>{spellDetails.description}</p>
      </div>
      {!!spellDetails.classes?.length &&
        <h3>These classes use this spell:</h3>
      }
      {spellDetails.classes?.map(playerClass => (
        <div key={playerClass} className="subsection">
          <p>{playerClass}</p>
        </div>
      ))}
    </main>
  )
}

export default SpellDetails