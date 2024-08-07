import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";

function AppRoute() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<HomeScreen />} />
        <Route path='/test' element={<HomeScreen />} />

      </Routes>
    </Router>
  );
}

export default AppRoute;
