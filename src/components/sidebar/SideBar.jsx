import "./sidebar.css";
import {
  RssFeed,
  PlayCircle,
  Chat,
  Group,
  TurnedIn,
  Work,
  ContactSupport,
  InsertInvitation,
  AddBusiness,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import Friends from "../myfriends/Friends";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItems">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItems">
            <Chat className="sideBarIcon" />
            <span className="sideBarListItemText">Chat</span>
          </li>
          <li className="sideBarListItems">
            <PlayCircle className="sideBarIcon" />
            <span className="sideBarListItemText">Video</span>
          </li>
          <li className="sideBarListItems">
            <Group className="sideBarIcon" />
            <span className="sideBarListItemText">Group</span>
          </li>
          <li className="sideBarListItems">
            <Work className="sideBarIcon" />
            <span className="sideBarListItemText">Job</span>
          </li>
          <li className="sideBarListItems">
            <TurnedIn className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItems">
            <ContactSupport className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItems">
            <InsertInvitation className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItems">
            <AddBusiness className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
        </ul>
        <button className="sideBarButton">show more</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
