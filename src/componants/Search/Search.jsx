import { useEffect, useState } from 'react'
import './Search.css'

const Search =  (props) => {
  const [q,setQ] = useState('');
  useEffect(()=> {
    props.filter(q)
  },[q])
  return (
    <div className='container my-5 text-center' >
        <input type="text" name='search'  className='search-input' value={q} onChange={e => setQ(e.target.value)} />
      
        <input type="button" value={"Search"} className='search-btn' />
    </div>
  )
}

export default Search