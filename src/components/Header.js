import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add New" color="2" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

export default Header;
