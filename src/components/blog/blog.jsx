import PropTypes from 'prop-types';

const blog = ({blog}) => {
    const {title} = blog;
    return (
        <div>
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};
blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default blog;