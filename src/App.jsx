import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </>
);

export default App;
