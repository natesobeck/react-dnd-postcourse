const BASE_URL = 'https://sei-dnd-api.herokuapp.com'

export async function getMonsterList() {
  const res = await fetch(`${BASE_URL}/api/monsters`)
  return res.json()
}