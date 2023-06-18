import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./pages/Home";
import { ProfileCreation } from "./pages/ProfileCreation";
import {Provider} from "react-redux";
import store from "./app/store";
import { Advantages } from "./pages/Advantages";
import { About } from "./pages/About";

function App() {
  return (
    <div className={'font-sansInterface'}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/create'} element={<ProfileCreation />}/>
            <Route path={'/advantages'} element={<Advantages />}/>
            <Route path={'/about'} element={<About />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
