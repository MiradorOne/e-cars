import React from "react";
interface Props {
  body: any;
}
const ArticleBody = ({ body }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: body }}></div>;
};
export default ArticleBody;
