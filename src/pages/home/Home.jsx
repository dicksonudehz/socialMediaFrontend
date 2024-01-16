import Feed from "../../components/feed/Feed";
import SideBar from "../../components/sidebar/SideBar";
import Topbar from "../../components/topbar/Topbar";
import RightBar from "../../components/rightbar/RightBar";
import "./home.css";
export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}
