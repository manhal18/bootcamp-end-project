import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import ActivityDetails from './pages/ActivityDetails'
import Footer from './components/Footer';
import ComingActivities from './pages/ComingActivities';
import PastActivities from './pages/PastActivities';
import moment from 'moment';
import 'moment/locale/tr';

function App() {
  moment.locale("tr")
  return (
    <>
    
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coming-activities" element={<ComingActivities />}/>
        <Route path="/past-activities" element={<PastActivities />}/>
        <Route path="/activity-details/:id" element={<ActivityDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
