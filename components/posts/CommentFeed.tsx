interface CommentFeedProps{
    comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({  comments = [] }) => {
  return (
    <div>
        {comments.map((comment) => (
            <div key={comment.id} ></div>
        ))}
    </div>
  );
}

export default CommentFeed;
