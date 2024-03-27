import { Post } from "./Elements/Post";
import PropTypes from "prop-types";
export const Posts = ({ data }) => (
  /* Posts */
  <div className="container w-30 font-serif">
    {data.map((post, index) => (
      <Post key={index} post={post} index={index} />
    ))}
  </div>
);

Posts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      owner: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        iamge: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};
