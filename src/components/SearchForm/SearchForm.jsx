// npm modules
import { useState } from "react"

// css
import './SearchForm.css'

const SearchForm = (props) => {

  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleSpellSearch(formData)
  }

  return (  
    <form className="search-form" onSubmit={handleSubmit}>
      <input 
        name="query"
        type="text"
        autoComplete="off" 
        value={formData.query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm