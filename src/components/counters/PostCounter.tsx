type PostCouterProps = {
  count: number;
};

const PostCounter = ({ count }: PostCouterProps) => {
  const label = count > 1 ? "posteos" : "posteo";
  return (
    <div>
      {count}
      {label}
    </div>
  );
};

export default PostCounter;
