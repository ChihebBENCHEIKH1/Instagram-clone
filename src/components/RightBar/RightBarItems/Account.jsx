import PropTypes from "prop-types";

const Account = ({ account, text }) => (
  <>
    <img
      src={account.owner.picture}
      alt={account.owner.firstName}
      className="w-14 h-14 rounded-full mb-2 border-gray-300 border-2 mr-4"
    />
    <div>
      <p className="text-gray-800 mb-1 font-semibold">
        {account.owner.firstName}
      </p>
      <p className="text-gray-500 mb-1 font-serif">
        {account.owner.firstName} {account.owner.lastName}
      </p>
    </div>
    <button className="ml-auto font-semibold text-blue-500 font-serif">
      {text}
    </button>
  </>
);

Account.propTypes = {
  account: PropTypes.shape({
    owner: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

export default Account;
