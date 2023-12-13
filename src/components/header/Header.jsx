import { useState } from "react";
import SearchPopup from "../SearchPopup";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import "./style.css"


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <SearchBar handleShow={handleShow} />
      <SearchPopup show={show} handleClose={handleClose}/>
      <NavBar />
    </header>
  );
};

export default Header;