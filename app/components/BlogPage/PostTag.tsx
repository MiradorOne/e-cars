import React from "react";

interface PostTagProps {
  categoryName: string;
}

const PostTag = ({ categoryName }: PostTagProps) => {
  const getIntentMargin = (categoryName: string) => {
    switch (categoryName) {
      case "review":
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-[#eeeafe] text-[#603FE2]";
      case "guides":
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-[#E6F4FF] text-[#0394FC]";
      case "news":
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-[#FFF1E8] text-[#DD7437]";
      case "other":
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-green-200 text-lime-800";
      case "ranking":
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-yellow-100 text-amber-900";
      default:
        return "rounded w-fit px-1.5 py-0.5 text-xs bg-[#eeeafe] text-[#603FE2]";
    }
  };

  return (
    <div>
      <p className={getIntentMargin(categoryName)}>
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </p>
    </div>
  );
};

export default PostTag;
