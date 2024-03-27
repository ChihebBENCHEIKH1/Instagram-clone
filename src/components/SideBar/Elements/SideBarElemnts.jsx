import {
  home,
  search,
  explore,
  reel,
  notification,
  create,
  message,
} from "../../../../public/assets/Icons";
export const SideBarElements = [
  {
    to: "/",
    text: "Home",
    icon: home,
  },
  {
    to: "/search",
    text: "Search",
    icon: search,
  },
  {
    to: "/explore",
    text: "Explore",
    icon: explore,
  },
  {
    to: "/reels",
    text: "Reels",
    icon: reel,
  },
  {
    to: "/messages",
    text: "Messages",
    icon: message,
  },
  {
    to: "/notifications",
    text: "Notifications",
    icon: notification,
  },
  {
    to: "/create",
    text: "Create",
    icon: create,
  },
  {
    to: "/profile",
    text: "Profile",
    icon: (
      <svg
        className="w-8 h-8 mr-3 fill-current text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
];
