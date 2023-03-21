import "./write.css";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://picsum.photos/1250/700"
        alt="publish"
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            {/* Label Icon la css file madhe size basat navhati so ti inline style ne apply keli. */}
            <AddCircleOutlineOutlinedIcon
              className="writeIcon"
              style={{ width: "30px", height: "30px" }}
            />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
