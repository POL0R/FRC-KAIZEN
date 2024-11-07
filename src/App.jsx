import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import Loading from "./Components/Loading";

// Import FirebaseProvider from the FirebaseContext
import { FirebaseProvider } from "./context/firebase";

function App() {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        {/* Wrap the app in FirebaseProvider to provide Firebase context */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </FirebaseProvider>
  );
}

export default App;9