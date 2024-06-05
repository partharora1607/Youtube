import user_icon from "../images/user_icon.jpg";

const CommentsData = [
  {
    name: "Parth Arora",
    Text: "Why do you use React instead of Next.js?",
    replies: [],
  },
  {
    name: "Parth Arora",
    Text: "Why do you use React instead of Next.js?",
    replies: [
      {
        name: "Parth Arora",
        Text: "Why do you use React instead of Next.js?",
        replies: [
          {
            name: "Parth Arora",
            Text: "Why do you use React instead of Next.js?",
            replies: [
              {
                name: "Parth Arora",
                Text: "Why do you use React instead of Next.js?",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Parth Arora",
        Text: "Why do you use React instead of Next.js?",
        replies: [],
      },
      {
        name: "Parth Arora",
        Text: "Why do you use React instead of Next.js?",
        replies: [
          {
            name: "Parth Arora",
            Text: "Why do you use React instead of Next.js?",
            replies: [],
          },
        ],
      },
      {
        name: "Parth Arora",
        Text: "Why do you use React instead of Next.js?",
        replies: [],
      },
    ],
  },
  {
    name: "Parth Arora",
    Text: "Why do you use React instead of Next.js?",
    replies: [],
  },
  {
    name: "Parth Arora",
    Text: "Why do you use React instead of Next.js?",
    replies: [
      {
        name: "Parth Arora",
        Text: "Why do you use React instead of Next.js?",
        replies: [],
      },
      {
        name: "Parth Arora",
        Text: "Why do you use React instead of Next.js?",
        replies: [
          {
            name: "Parth Arora",
            Text: "Why do you use React instead of Next.js?",
            replies: [],
          },
          {
            name: "Parth Arora",
            Text: "Why do you use React instead of Next.js?",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Parth Arora",
    Text: "Why do you use React instead of Next.js?",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, Text, replies } = data;
  return (
    <div className="flex items-start bg-white shadow-md p-4 rounded-lg my-2">
      <img className="w-12 h-12 rounded-full" src={user_icon} alt="user-icon" />
      <div className="ml-4">
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-gray-600">{Text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, idx) => (
        <div key={idx}>
          <Comment data={comment} />
          {comment.replies.length > 0 && (
            <div className="pl-12 border-l-2 border-gray-300 ml-4">
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-5 w-[71.5%] bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Comments</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
