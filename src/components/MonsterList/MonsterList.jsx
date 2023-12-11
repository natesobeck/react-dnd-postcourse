// npm modules
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// services
import { getMonsterList } from "../../services/api-calls"

const MonsterList = () => {

  const [monsterList, setMonsterList] = useState([])

  useEffect(() => {
    const fetchMonsterList = async () => {
      const monsterData = await getMonsterList()
      setMonsterList(monsterData)
    }
    fetchMonsterList()
  }, [])

  if (!monsterList.length) return <h2>Loading monsters...</h2>

  return (  
    <main className="monster-list">
      <h1>Monster List</h1>
      {monsterList.map(monster => (
        <div className="link-container" key={monster._id}>
          <Link to={`/monsters/${monster._id}`}>
            {monster.name}
          </Link>
        </div>
      ))}
    </main>
  )
}

export default MonsterList