import PropTypes from "prop-types";
import birthday from "../../../public/assets/gift.png";
import add from "../../../public/assets/add.png";
import Account from "./RightBarItems/Account";
import { Notification } from "./RightBarItems/Notification";

export const RightBar = ({ data }) => {
  return (
    <div className="w-1/5 h-screen mt-1% p-4 xl-desktop:block hidden ">
      {/* Profile */}
      <div className="mb-6 flex items-center">
        <Account account={data[0]} text={"Switch"} />
        <hr className="border-t border-gray-300 mb-4" />
      </div>

      {/* Accounts List */}
      <div className="mb-8">
        <h2 className="text-gray-600 text-md mb-6 font-semibold flex items-center justify-between">
          Suggested for you
          <button className="text-black font-semibold font-serif">
            See All
          </button>
        </h2>
        <ul>
          {data.slice(1, 6).map((account, index) => (
            <li key={index} className="flex items-center mb-4">
              <Account account={account} text="Follow" />
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-4 border-t border-gray-500 opacity-30" />

      <Notification
        data={data[0]}
        text="have a birthday today"
        path={birthday}
      />
      {/* Add Image */}
      <img src={add} alt="" className="mt-4 w-full h-48 rounded" />
    </div>
  );
};

RightBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      owner: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};
