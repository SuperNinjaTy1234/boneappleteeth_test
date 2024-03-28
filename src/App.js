import './App.css';
import './Pages/ProfilePage/ProfilePopup';
import './Pages/ProfilePage/ProfilePage'
import { BrowserRouter, Routes, Route, useHref} from "react-router-dom";
import Home from './Home';
import MealSearch from './mealSearch';
import LoginPage from './LoginPage';
import ProfilePopup from './Pages/ProfilePage/ProfilePopup';
import UserProfile from './Pages/ProfilePage/ProfilePage';
import { Login } from './templogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/meal-search" element={<MealSearch></MealSearch>}></Route>
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/meal-search" element={<MealSearch></MealSearch>}></Route>
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default withAuthenticator(App);*/

