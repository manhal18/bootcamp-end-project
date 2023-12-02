import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ActivityDetails from './pages/ActivityDetails'
import NavBar from './components/NavBar';

function App() {
  function search(word){}
  // let images = [
  //   "https://svd.vgc.no/v2/images/64c01443-5533-4646-ae76-f83343e19ed7?h=630&q=80&upscale=true&w=1200&s=7b87ac960ed6cb3e9f3d03dfed3d7aac893f2729",
  //   "https://ofo.imgix.net/Jubileum-ofk/OFO-og-OFK-Slottsplassen.jpg?auto=compress%2Cformat&crop=focalpoint&cs=srgb&fit=crop&fm=jpg&fp-x=0.5595&fp-y=0.7542&h=630&q=90&w=1200&s=a230d6f83171c8013b42b05422bc73de",
  // ]
  return (
    <>
      <Header search={search} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/activity-details/:id" element={<ActivityDetails />} />
      </Routes>
      <div style={{height: "400px"}}></div>
    </>
  );
}

export default App;
