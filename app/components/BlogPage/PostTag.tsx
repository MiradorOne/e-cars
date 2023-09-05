import React from "react";

interface PropsPostTag {
  name: string;
  id: string;
}

const PostTag = ({ category: { name } }: { category: PropsPostTag }) => {
  const getIntentMargin = (name: string) => {
    switch (name) {
      case "review":
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-[#eeeafe] text-[#603FE2]";
      case "guides":
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-[#E6F4FF] text-[#0394FC]";
      case "news":
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-[#FFF1E8] text-[#DD7437]";
      default:
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-[#eeeafe] text-[#603FE2]";
      case "other":
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-green-200 text-lime-800";
      case "ranking":
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-yellow-100 text-amber-900";
    }
  };

  return (
    <p className={getIntentMargin(name)}>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </p>
  );
};

export default PostTag;
