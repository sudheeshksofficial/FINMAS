/*
 * @Author: Vineeth Raj B
 * @Email:  vineebala99@gmail.com
 * @Date:   2023-05-19 15:57:29
 * @Last Modified by: Vineeth Raj B
 * @Last Modified time: 2023-05-24 13:59:03
 * @Description: description
 */


//import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import { Route, Routes } from 'react-router-dom';
import OurTeamPage from './components/OurTeamPage';
import CareersPage from './components/CareersPage';
import ClientsPage from './components/ClientsPage';
import ContactUsPage from './components/ContactUsPage';
import BecomeMemberPage from './components/BecomeMemberPage';
import { BECOME_PARTNER_URL, CAREERS_URL, CLIENTS_URL, CONTACT_US_URL, HOME_URL, OUR_TEAM_URL } from './Constants_Personal_URLS';

function App() {
  return (
    <div>
      <Routes>
        <Route path={HOME_URL} element={<FrontPage/>}/>
        <Route path={OUR_TEAM_URL} element={<OurTeamPage/>}/>
        <Route path={CAREERS_URL} element={<CareersPage/>}/>
        <Route path={CLIENTS_URL} element={<ClientsPage/>}/>
        <Route path={CONTACT_US_URL} element={<ContactUsPage/>}/>
        <Route path={BECOME_PARTNER_URL} element={<BecomeMemberPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
