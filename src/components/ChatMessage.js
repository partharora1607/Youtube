const ChatMessage = ({ name, message, image }) => {
  return (
    <div className="mx-2 my-2 flex items-center p-2">
      <img src={image} alt="profile-dp" className="w-12 h-12 rounded-full" />
      <span className="font-semibold px-3 text-lg text-gray-600">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
