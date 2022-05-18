import { useEffect, useState } from "react";
// import { MainContext } from "./context/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import {Route,Routes} from 'react-router-dom'
// import {app, db} from "./FirebaseConfig";



function App() {
  const [user, setUser]=useState(null)



  const data = {
    user,
    setUser,

  };

  return (
    <>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
