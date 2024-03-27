import PropTypes from "prop-types";

export const SidebarItem = ({ to, text, icon }) => (
  <a
    href={to}
    activeClassName="bg-gray-200"
    className="flex items-center py-3 px-4 text-sm hover:bg-gray-100 mb-2"
  >
    {icon}
    <span className="prose lg:prose-xl text-base">{text}</span>
  </a>
);

SidebarItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
