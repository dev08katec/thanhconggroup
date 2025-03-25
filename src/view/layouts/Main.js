import './css/main.css';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/home/HomeScreen';
import NoData from '../screens/home/NoData';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/no-data" element={<NoData />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </main>
  );
};

export default Main;
