import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import "./navbar.css";

const NavBar = () => {
    let widthWindow = window.innerWidth;
  const { setEnabledSB, setEnabled, enabled, setMaximunWidth } = useContext(GlobalContext);
 /*  const [checkWindow, setCheckWindow] = useState(widthWindow); */

    const handlerSideBar = () => {
        setEnabledSB(false);
        setEnabled(true);
        setMaximunWidth(false)
    };

   
    const handlerWindow = () => {
        widthWindow
    };
    
    window.addEventListener('DOMContentLoaded', handlerWindow);

    
    

  return (
    <div className={`containerAll ${enabled ? "disabledContainerNavbar" : null}`}>
      <div className="containerNavBar">
        <div className="notification disableNavBar">
          <img src="./img/notification.svg" alt="notification" />
        </div>
        <div className="hamburguer">
            <img onClick={handlerSideBar} src="./img/hamburger_icon.png" alt="hamburger icon" />
            <h3>ESCUELA</h3>
        </div>
        <div className="selectUser containerSelect">
          <img src="./img/user.svg" alt="user" />
          <select className="selectUser selectWidth" name="selectUser" id="selectUser">
            {
                widthWindow < 576 && <option value=""></option>               
            }
            
            <option className="optionValue" value="admin">
              Admin
            </option>
            <option className="optionValue" value="dad/mother">
              Dad/ Mother
            </option>
            <option className="optionValue" value="student">
              Student
            </option>
          </select>
        </div>
      </div>
      <div className="routesNavBar disableNavBar">
        <p>
            <span className="menuRoutes">Menú</span> {`>`} Dashboard
        </p>
      </div>
    </div>
  );
};

export default NavBar;
