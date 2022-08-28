import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import Dashboard from "./modules/dashboard/dashboard";
import Privacypolicy from "./modules/privacyPolicy/privacypolicy";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/privacy" element={<Privacypolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
