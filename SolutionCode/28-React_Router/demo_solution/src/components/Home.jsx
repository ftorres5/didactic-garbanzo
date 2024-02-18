// 👉 STEP 5 - React Router imports (Link)
import { Link } from "react-router-dom";

function Home () {
    return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt="store front"
      />
      {/* 👉 STEP 5b - Make a Link to navigate us to /items */}
      <Link to="/items">
        <button className="md-button shop-button">Shop now!</button>
      </Link>
    </div>
    )
}

export default Home;