import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
import Landing from "./pages/landing/page";
import { AuthProvider } from './context/AuthContext.jsx';
import PrivateRoute from "./components/privateRoute/page.jsx";
import Dashboard from "./pages/dashboard/page.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute children={<Dashboard/>} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
