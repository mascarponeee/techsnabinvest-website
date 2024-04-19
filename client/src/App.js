import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState } from "react";

import Header from "./components/Header"
import Footer from "./components/Footer"
import ModalRequest from "./components/ModalRequest";

import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Parts from "./pages/Parts"
import Repair from "./pages/Repair"
import Delivery from "./pages/Delivery"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Truck from "./pages/Truck"

import ScrollToTop from "./utils/scrollToTop"
import { ModalContext } from "./utils/OpenModal"


function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={[modalOpen, setModalOpen]}>
    <div className="App">
      <Router>
        <ScrollToTop />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Truck />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
				</Routes>
        {modalOpen && <ModalRequest setOpenModal={setModalOpen} />}
				<Footer />
			</Router>
    </div>
    </ModalContext.Provider>
  );
}

export default App;