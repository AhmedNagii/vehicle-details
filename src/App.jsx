import './App.css';
import VehiclePage from './pages/VehiclePage/VehiclePage.jsx';
import GlobalHeader from './components/GlobalHeader/GlobalHeader.jsx';
import GlobalSideBar from './components/GlobalSideBar/GlobalSideBar.jsx';

function App() {
  return (
    <div className={'app'}>
      <GlobalHeader />
      <div className={'content'}>
        <GlobalSideBar />
        <VehiclePage />
      </div>
    </div>
  );
}

export default App;
