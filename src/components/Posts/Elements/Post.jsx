import PropTypes from "prop-types";
import { heart, more, comment, send } from "../../../../public/assets/Icons";

export const Post = ({ post, index }) => (
  <>
    <div className="rounded-md mb-8  xl:w-3/5 ">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center flex-grow">
            <img
              src={post.owner.picture}
              alt={post.owner.firstName}
              className={`w-10 h-10 mr-4 rounded-full border-2 border-${
                index % 2 === 0 ? "pink-500" : ""
              }`}
            />
            <div>
              <p className="text-gray-800 font-semibold">
                {post.owner.firstName} {post.owner.lastName}
              </p>
              <p className="text-gray-600 text-sm">
                {new Date(post.publishDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex-shrink ">
            <div className="flex items-center cursor-pointer md-tablet:-ml-24 sm-phone:-ml-24 sm-small:-ml-20 sm-smaller:-ml-12">
              {more}
            </div>
          </div>
        </div>

        <div className="relative max-w-sm lg:max-w-md xl:max-w-4xl">
          <img
            src={post.image}
            alt={post.text}
            className="w-full sm-tablet:h-600 sm:h-600 object-cover rounded-xs sm:rounded-md "
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center mr-2 cursor-pointer text-red-500">
              {heart}
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              {comment}
            </div>
            <div className="flex items-center cursor-pointer">{send}</div>
          </div>
          <span className="text-gray-600 block mt-2">{post.likes} likes</span>
          <p className="text-gray-700 mt-2 ">
            <span className="font-semibold text-gray-800">
              {post.owner.firstName} {post.owner.lastName}
            </span>{" "}
            {post.text}
          </p>
        </div>

        <div className="mt-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 py-1 px-2 rounded-full text-xs mr-2"
            >
              # {tag}
            </span>
          ))}
        </div>
      </div>

      <p className="text-gray-600 text-sm p-4 cursor-pointer">
        View all {Math.floor(Math.random() * 100)} comments
      </p>

      <div className="p-4 flex justify-between items-center">
        <button className="text-gray-600">Add a comment ...</button>
      </div>
      <div className=" border-t border-black border-opacity-10"></div>
    </div>
  </>
);

Post.propTypes = {
  post: PropTypes.shape({
    owner: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
    publishDate: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
