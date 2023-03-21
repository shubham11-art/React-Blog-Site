import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img className="postImage" src="https://picsum.photos/1250/700" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Sport</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        <hr />
        <span className="postDate">1 Hour Ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        neque animi ad esse voluptatum unde consectetur debitis, ipsam culpa
        quos, ab eaque possimus nihil? Est consectetur suscipit dignissimos
        saepe. Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Perspiciatis neque animi ad esse voluptatum unde consectetur
        debitis, ipsam culpa quos, ab eaque possimus nihil? Est consectetur
        suscipit dignissimos saepe. Quibusdam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Perspiciatis neque animi ad esse
        voluptatum unde consectetur debitis, ipsam culpa quos, ab eaque possimus
        nihil? Est consectetur suscipit dignissimos saepe. Quibusdam.
      </p>
    </div>
  );
};

export default Post;
