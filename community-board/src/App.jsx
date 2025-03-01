import './App.css';
import Collections from './components/Collections';
import bannerImage from './assets/banner.jpeg';

const App = () => {

  return (
    <div className="app">

      <div className="banner">
        <img src={bannerImage} alt="WiCS Community Board Banner" />
      </div>

      <div className="content">
        <h1>Women In Computer Science Community Board</h1>
        <p>The Women in Computer Science (WiCS) Community Board is a platform that highlights events, resources, and opportunities for women in tech. It provides information on conferences, hackathons, challenges, and learning materials to support and empower women pursuing careers in computer science.</p>
        <Collections />
      </div>

    </div>
  )
}

export default App