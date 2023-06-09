import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./pages/Home";
import { ProfileCreation } from "./pages/ProfileCreation";
import {Provider} from "react-redux";
import store from "./app/store";

function App() {
  return (
    <div className={'font-sansInterface'}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/create'} element={<ProfileCreation />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
