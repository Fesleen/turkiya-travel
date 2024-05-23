
import './App.css';
import MainPages from './pages/mainPage';
import RouterComponent from './rooter';

function App() {
  return (
    <>
    <RouterComponent>
        <MainPages/>
      </RouterComponent>
    </>
  );
}

export default App;
