import React from "react";
import Comment from "./components/comment";
import commentData from "./data/data.json";

const CommentSection = ({ comments = commentData }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[50rem] mx-auto">
      {comments.map((value) => (
        <Comment
          key={value.id}
          id={value.id}
          content={value.content}
          votes={value.votes}
          replies={value.replies}
        />
      ))}
    </div>
  );
};

export default CommentSection;
