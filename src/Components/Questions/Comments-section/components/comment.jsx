import React, { useState } from "react";
import "./comments.css";
import Textarea from "./textArea";

const Comment = ({ content, id, votes, replies = [], onReplySubmit }) => {
  const [isReply, setIsReply] = useState(false);
  const [localReplies, setLocalReplies] = useState(replies);
  const [voteUp , setVoteUp]=useState(votes)

  const handleReplyClick = () => {
    setIsReply(!isReply);
  };

  const handleSubmit = (text) => {
    const newReply = {
      id: Date.now(),
      content: text,
      votes: 0,
      replies: []
    };
    setLocalReplies([...localReplies, newReply]);
    if (onReplySubmit) {
      onReplySubmit(id, newReply);
    }
  };

  return (
    <div className="comments">
      <span className="text">{content}</span>

      <div className="actions">
        <span onClick={()=>setVoteUp((prev)=>prev+1)}>👍 {voteUp}</span>
        <span onClick={() => handleReplyClick()}>💬 Reply</span>
      </div>

      {isReply && <Textarea onSubmit={handleSubmit} />}

      {/* Render nested replies only when isReply is true */}
      {isReply && localReplies && localReplies.length > 0 && (
        <div
          style={{
            marginLeft: "20px",
            marginTop: "10px",
            borderLeft: "2px solid #e0e0e0",
            paddingLeft: "10px",
          }}
        >
          {localReplies.map((reply) => (
            <Comment
              key={reply.id}
              id={reply.id}
              content={reply.content}
              votes={reply.votes}
              replies={reply.replies}
              onReplySubmit={onReplySubmit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
