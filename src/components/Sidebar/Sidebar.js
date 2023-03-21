import "./sidebar.css";
import shubhamSidebar from "../../assets/Images/shubhamSidebar.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitles"> ABOUT ME </span>
        <img className="aboutMeImg" src={shubhamSidebar} alt="profileImage" />
        <p className="aboutMeDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          voluptas natus exercitationem voluptatem repellat magni omnis neque
          assumenda vitae consequatur optio velit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitles"> CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Play</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitles"> FOLLOW ME</span>
        <div className="sidebarSocialIcons">
          <FacebookIcon className="sidebarIconPadding" />
          <TwitterIcon className="sidebarIconPadding" />
          <InstagramIcon className="sidebarIconPadding" />
          <YouTubeIcon className="sidebarIconPadding" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
