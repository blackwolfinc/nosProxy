import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import Package from "./Package";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/package" element={<Package />} />
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
