import PropTypes from "prop-types";
import Header from "../Screens/Header";
const PublicRoutes = ({ Component, ...props }) => {
  return (
    <div>
      <Header authUser={false} />
      <div>
        <Component {...props} />
      </div>
    </div>
  );
};
PublicRoutes.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
export default PublicRoutes;
