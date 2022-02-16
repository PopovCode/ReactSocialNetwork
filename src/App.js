import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Musik from "./components/Musik/Musik";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className={"app-wrapper-content"}>
        <Routes>
          <Route
            path={"/profile"}
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path={"/dialogs/*"}
            element={
              <Dialogs
                state={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path={"/news"} element={<News />} />
          <Route path={"/musik"} element={<Musik />} />
          <Route path={"/settings"} element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
