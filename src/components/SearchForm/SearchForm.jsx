// npm modules
import { useState } from "react"

// css
import './SearchForm.css'

const SearchForm = () => {

  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  return (  
    <form className="search-form">
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