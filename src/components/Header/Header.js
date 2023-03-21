import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSm">React & Node</span>
        <span className="headerTitlesLg">Blog</span>
        <img
          className="headerImg"
          src="https://picsum.photos/1400/700"
          alt="Random"
        />
      </div>
    </div>
  );
};

export default Header;
