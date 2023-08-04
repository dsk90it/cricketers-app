import Filters from '../components/Filters'
import SearchBar from '../components/SearchBar'
import List from '../components/List'

function Home({ content }) {
  return (
    <>
      <Filters heading="Cricket App" handleChange={(e) => console.log(e.target.value)} />
      <SearchBar handleChange={(e) => console.log('Search Query:', e.target.value)} />
      <List items={content} />
    </>
  )
}
export default Home
