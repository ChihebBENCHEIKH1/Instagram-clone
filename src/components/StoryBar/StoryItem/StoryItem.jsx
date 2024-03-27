import PropTypes from "prop-types";

export const StoryItem = ({ owner }) => (
  <div className="flex flex-col items-center">
    <div className="relative cursor-pointer w-16 h-16">
      <img
        src={owner.picture}
        alt={`Story not found`}
        className="w-full h-full object-cover rounded-full border-2 border-pink-500"
      />
    </div>
    <p className="text-gray-600 text-sm font-serif">{owner.firstName}</p>
  </div>
);

StoryItem.propTypes = {
  owner: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
  }).isRequired,
};
