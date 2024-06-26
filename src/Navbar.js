import logo from './Bone_Apple_Teeth-logos_transparent.png';
import ProfilePopup from './Pages/ProfilePage/ProfilePopup';
import mealSearch from './mealSearch';
import redirect from './mealSearch';
import UserProfile from './Pages/ProfilePage/ProfilePage';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Bone Apple Teeth Logo" style={{ width: '50px', height: 'auto' }} />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/meal-search">Meal Search</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Contact</a>
          </div>
        </div>
        <a className="nav-link" href="/profile"><button className="btn btn-dark" type="submit">User Profile</button></a>
      </div>
    </nav>
  );
}

export default Navbar;