import "./profile.css";
import Feed from "../../components/feed/Feed";
import SideBar from "../../components/sidebar/SideBar";
import Topbar from "../../components/topbar/Topbar";
import RightBar from "../../components/rightbar/RightBar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                alt="cover the background"
                className="profileCoverImg"
              />
              <img
                src="/assets/person/7.jpeg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ogbudu Dickson</h4>
              <span className="profileInfoDesc">
                A well known motherfucker from the city of kankum
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
