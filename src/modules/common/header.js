import React from "react";
import "../../assests/custom.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate  } from "react-router-dom";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
    const location = useLocation();
    const navigate = useNavigate();
    
    const navigateHandle = () =>{
      navigate("/")
    }
    const navigatePolicyHandle = () =>{
      navigate("/privacy")
    }
  return (
    <>
    <div className="bg-white h-90">
      <div className="div-header mb-padding-header">
        <div className="img-div">
          <img src="https://scortik.com/wp-content/uploads/2022/06/Scortik_main.svg" />
        </div>
        <div className="btn-cont">
            <Link style={{textDecoration: 'none'}} to="/">
          <p  className={location.pathname === '/' ? 'active-btn' : "btn-header"}>Dashboard</p></Link>
        <Link style={{textDecoration: 'none'}} to="#">  <p className={location.pathname === '/about' ? "active-btn" : "btn-header"}>About</p></Link>
         <Link style={{textDecoration: 'none'}} to="/privacy"> <p className={location.pathname === '/privacy' ? "active-btn" : "btn-header"}>Review Policy</p></Link>
        </div>
        <div className="img-mb">
          <div className="mb-logo-humburger">
            <MenuIcon aria-describedby={id} onClick={handleClick}/>
          </div>
          <div>
            <img src="https://scortik.com/wp-content/uploads/2022/06/Scortik_main.svg" />
          </div>
        </div>
        <div className="btn-align-contact">
          <button className="btn-contact">Contact Us</button>
        </div>
      </div>
    </div>
    <Popper id={id} open={open} anchorEl={anchorEl} className="popup-display">
    <ul className="mb-popup-ul">
          <li className="li-popup-mb" onClick={navigateHandle}>Dashboard</li>
          <li className="li-popup-mb">About</li>
          <li className="li-popup-mb" onClick={navigatePolicyHandle}>Review Policy</li>
        </ul>
      </Popper>
    </>
  );
}

export default Header;
