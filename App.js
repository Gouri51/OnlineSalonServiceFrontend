import Destructuring from "./demo-components/Destructuring";
import Header from "./demo-components/Header";
import Footer from "./demo-components/Footer";
import Fruits from "./demo-components/Fruits";
import Products from "./demo-components/Products";
import Resume from "./demo-components/Resume";

import Customer from "./demo-components/Customer";


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import NoPage from "./pages/NoPage";

import DisplayAllCards from "./Components/DisplayAllCards";
import AddCard from "./Components/AddCard";


const demoElements = (

  <>
    <Header></Header>

    <Customer></Customer>

    <Resume></Resume>
    <Products></Products>
    <Fruits></Fruits>
    <Destructuring></Destructuring>
    <Footer></Footer>
  </>



);

const empList = [
  {
    "id": "1",
    "name": "Anusha",
    "email": "anusha@gmail.com"
  },
  {
    "id": "2",
    "name": "Bindu",
    "email": "bindu@gmail.com"
  },
  {
    "id": "3",
    "name": "Chandana",
    "email": "chandu@gmail.com"
  }
];
const noEmpList = [];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />




            <Route path="cards" element={<DisplayAllCards />} />

            <Route path="addcard" element={<AddCard />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
