import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/Store/Slice/chatSlice";
import { generateRandomName } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  console.log("chatMessages : ", chatMessages);

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName().name,
          message: "Welcome To Youtube Live Chat! 🚀",
          src: generateRandomName().image,
        })
      );
    }, 500);

    return () => {
      clearInterval(time);
    };
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center mt-6 ml-5 text-2xl font-normal">
        <h1 className="flex-1 ml-3 cursor-pointer">Top Chat </h1>
        <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer mr-4 hover:bg-gray-100 text-3xl">
          <p className="text-center">⋮</p>
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer mr-5 hover:bg-gray-100 text-3xl">
          <p className="text-center">X</p>
        </div>
      </div>
      <hr className="mt-4 border-gray-300" />
      <div className="flex-1 overflow-y-auto h-[800px] p-4">
        {/* Adjusted container */}
        {chatMessages.map((c, idx) => {
          return <ChatMessage key={idx} name={c.name} message={c.message} image={c.src} />;
        })}
      </div>
    </>
  );
};

export default LiveChat;
