import './navbar.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar({loginText, setLoginText}) {

  const [text, setText] = useState("Login");

  const setSetterLogin = () => {
    if (!loginText) {
      setLoginText(!loginText);
  }
}

  const textLogin = () => {
    setSetterLogin();
    if (loginText) {
      setText("Login")
    } else {
      setText("Logout")
    }
  }

  // let textLoginorLogout = "Login";

  // const loginOrLogout = () => {

  //   if (isLoggedIn) {
  //     textLoginorLogout = "Logout";
  //   } else {
  //     textLoginorLogout = "Login"
  //   }
  // }

  // useEffect(() => {
  //   loginOrLogout();
  // },[])
  
  // useEffect(() => {
  //   loginOrLogout();
  // },[isLoggedIn])

  // console.log(textLoginorLogout);


  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <div className="text-danger navbar-brand">Kat-Net-App</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="textDecoration" to={'/'}> <div className="text-danger nav-link active">Home</div> </Link>
            </li>
            <li className="nav-item">
            <Link className="textDecoration" to={'/Offer'}> <div className="text-danger nav-link">New request/offer</div> </Link>
            </li>
          </ul>
          {/* <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="textDecoration" to={'/Login'}> <div className="text-danger nav-link">{text}</div> </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </>
  );
}