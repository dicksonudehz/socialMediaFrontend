import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="this is a birthday gift" className="birthdayImg" />
          <span className="birthdayText">
            <b>johnny white</b> and <b>3 other friends </b>have birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">online friends</h4>
        <ul className="rightBarFriendsList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">user profile information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInforKey">city</span>
            <span className="rightbarInforValue">new York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInforKey">from:</span>
            <span className="rightbarInforValue">france</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInforKey">place of birth:</span>
            <span className="rightbarInforValue">india</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInforKey">relationship:</span>
            <span className="rightbarInforValue">single</span>
          </div>
        </div>
        <h4 className="rightbarUserFriends">user friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarfollowing">
            <img
              src="/assets/person/1.jpeg"
              alt="great doing of a great man is good "
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">ogbudu dickson</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/assets/person/2.jpeg"
              alt="great doing of a great man"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">ogbudu dickson</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/assets/person/3.jpeg"
              alt="great doing of a great man"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">ogbudu dickson</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/assets/person/3.jpeg"
              alt="great doing of a great man"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">ogbudu dickson</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/assets/person/4.jpeg"
              alt="great doing of a great man"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">ogbudu dickson</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/assets/person/5.jpeg"
              alt="great doing of a great man"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">ogbudu dickson</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/assets/person/6.jpeg"
              alt="great doing of a great man"
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">ogbudu dickson</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar/>}
      </div>
    </div>
  );
}
