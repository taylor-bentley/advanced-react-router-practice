import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard </Link>
        </li>
        <li>
            <Link to="/charts" className="fa fa-fw fa-bar-chart-o" > Charts </Link>
        </li>
        <li>
            <Link to="/tables" className="fa fa-fw fa-table" > Tables </Link>
        </li>
        <li>
            <Link to="/settings" className="fa fa-fw fa-bar-chart-o" > Settings </Link>
        </li>
        <li>
            <Link to="/wall" className="fa fa-fw fa-bar-chart-o" > Wall </Link>
        </li>
        <li>
            <Link to="/profiles" className="fa fa-fw fa-bar-chart-o" > Profiles </Link>
        </li>
        <li>
            <Link to="/marquee" className="fa fa-fw fa-bar-chart-o" > Marquee </Link>
        </li>
      </ul>
    </div>
  );  
}

export default SideNav;
