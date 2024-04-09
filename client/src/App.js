import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Parts from "./pages/Parts"
import Repair from "./pages/Repair"
import Delivery from "./pages/Delivery"
import About from "./pages/About"
import Contacts from "./pages/Contacts"

import ScrollToTop from "./utils/scrollToTop"

function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTop />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
    </div>
  );
}

export default App;