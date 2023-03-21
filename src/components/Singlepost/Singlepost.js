import "./singlepost.css";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Singlepost = () => {
  return (
    <div className="singlePostWrapper">
      <img
        src="https://picsum.photos/1250/700"
        alt=""
        className="singlePostImage"
      />
      <h1 className="singlePostTitle">
        Lorem ipsum The Elephant Wishperer
        <div className="singlePostIcons">
          <EditOutlinedIcon className="singlePostIcon" />
          <DeleteOutlineIcon className="singlePostIcon" />
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: Saket </span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        suscipit sed, commodi quidem, odit perspiciatis quasi, obcaecati
        explicabo modi hic maiores dolor sequi consequuntur quos? Nostrum ullam
        enim maiores explicabo.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Veritatis suscipit sed, commodi quidem, odit
        perspiciatis quasi, obcaecati explicabo modi hic maiores dolor sequi
        consequuntur quos? Nostrum ullam enim maiores explicabo. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Veritatis suscipit sed,
        commodi quidem, odit perspiciatis quasi, obcaecati explicabo modi hic
        maiores dolor sequi consequuntur quos? Nostrum ullam enim maiores enim
        maiores explicabo.Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Veritatis suscipit sed, commodi quidem, odit perspiciatis quasi,
        obcaecati explicabo modi hic maiores dolor sequi consequuntur quos?
        Nostrum ullam enim maiores explicabo. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Veritatis suscipit sed, commodi quidem,
        odit perspiciatis quasi, obcaecati explicabo modi hic maiores dolor
        sequi consequuntur quos? Nostrum ullam enim maiores explicabo.
      </p>
    </div>
  );
};

export default Singlepost;
