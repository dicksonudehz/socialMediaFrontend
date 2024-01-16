import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "./topbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      <div className="topBarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Dickson Social</span>
          </Link>
        </div>

        <div className="topbarCenter">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input
              type="text"
              placeholder="Search for Friends, Post or Videos"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topBarRight">
          <div className="topBarLinks">
            <Link to="/" style={{ textDecoration: "none", color: 'white' }}>
              <div className="topBarLink">Home page</div>
            </Link>
            <div className="topBarLink">Timeline</div>
          </div>
          <div className="topBarLinkIcons">
            <div className="topBarIconItem">
              <Person />
              <span className="topBarLinkIconBarge">1</span>
            </div>
            <div className="topBarIconItem">
              <Chat />
              <span className="topBarLinkIconBarge">3</span>
            </div>
            <div className="topBarIconItem">
              <Notifications />
              <span className="topBarLinkIconBarge">2</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topBarImage" />
        </div>
      </div>
    </>
  );
}
