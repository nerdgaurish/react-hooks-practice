import PropTypes from "prop-types";
const Button = ({ color, text }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "Add new",
  color: "Green"
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
