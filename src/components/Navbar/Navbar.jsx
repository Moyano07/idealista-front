
import { NavLink } from "react-router-dom";
import styleNavs from './HeaderNav.module.css';


const Navbar = () => {
    return (
      <div className={`col-md-5 ${styleNavs.navs}`}>
              <div className={styleNavs.navLink}>
                  <NavLink to="/advertising-quality" className="btn">
                   Quality Advertising
                  </NavLink>
              </div>
              <div className={styleNavs.navLink}>
                  <NavLink to="/advertising-public" className="btn">
                    Public Advertising
                  </NavLink>
              </div>
            </div>
    );
};

export default Navbar;