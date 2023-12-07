import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ActivityDetails from './pages/ActivityDetails'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ComingActivities from './pages/ComingActivities';
import PastActivities from './pages/PastActivities';

function App() {
  function search(word){}
  
  return (
    <>
      <Header search={search} />
      <NavBar />
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
