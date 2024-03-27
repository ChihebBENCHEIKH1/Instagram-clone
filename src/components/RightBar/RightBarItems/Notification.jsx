import PropTypes from "prop-types";

export const Notification = ({ data, text, path }) => (
  <div className="flex items-center gap-4 mb-2">
    <img src={path} alt="" className="h-12 w-12 cursor-pointer" />
    <span className="font-serif cursor-pointer">
      <b>
        {data.owner.firstName} {data.owner.lastName}
      </b>{" "}
      and <b>other friends</b> {text}.
    </span>
  </div>
);

Notification.propTypes = {
  data: PropTypes.shape({
    owner: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
