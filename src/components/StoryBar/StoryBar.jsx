import React, { useEffect, useState } from "react";
import ProtoTypes from "prop-types";
import { StoryItem } from "./StoryItem/StoryItem";
export const StoryBar = ({ posts }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop === 0);
      setIsFixed(window.innerWidth < 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const storyBarClass = `flex py-4 overflow-x-auto space-x-4 mb-24 mt-3 ${
    isVisible ? "" : "hidden"
  }`;

  return (
    <div className={storyBarClass}>
      {posts.slice(0, 9).map((post, index) => (
        <StoryItem key={index} owner={post.owner} />
      ))}
    </div>
  );
};

StoryBar.propTypes = {
  posts: ProtoTypes.arrayOf(ProtoTypes.object),
};
