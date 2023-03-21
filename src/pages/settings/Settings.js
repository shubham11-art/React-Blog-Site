import "./settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateAccount">Update Your Account</span>
          <span className="settingsDeleteAccount">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          {/* Profile Picture Label chya under mazi Image ani clickable file wala icon ghetal aahe */}
          <div className="settingsPP">
            <img src="https://picsum.photos/1250/700" alt="" />

            {/* clickable File wala Icon */}
            {/* Label Icon la css file madhe size basat navhati so ti inline style ne apply keli. */}
            <label htmlFor="fileInput">
              <AccountCircleIcon
                className="settingsIcon"
                style={{ width: "40px", height: "40px" }}
              />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username:</label>
          <input type="text" placeholder="Saket" />
          <label>Email:</label>
          <input type="email" placeholder="saket@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
