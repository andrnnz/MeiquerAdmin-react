import { getPosts } from './api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import ListPage from './components/ListPage'
import Sidebar from './components/Sidebar'

function App() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
    })
  }, [])


  return (
    <>
    <div className='App'>
      <Sidebar />
      <div className='header'> 
        <SearchBar posts={posts} setSearchResults={setSearchResults} />
      </div>
      <div className='main'>
        <ListPage searchResults={searchResults} />
      </div>
    </div>
    </>
  )
}

export default App;
