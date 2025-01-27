import PropTypes from "prop-types";

const Container = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node,
    name: PropTypes.number
}

Container.displayName = "Container"

export default Container 
