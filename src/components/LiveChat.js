import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/Store/Slice/chatSlice";
import { generateRandomName } from "../Utils/helper";
import user_icon from "../images/user_icon.";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [myChatMessage, setMyChatMessage] = useState("");

  const addMyMessage = () => {
    dispatch(
      addMessage({
        name: "Parth Arora",
        message: myChatMessage,
        src: user_icon,
      })
    );
    setMyChatMessage("");
  };

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName().name,
          message: "Welcome To Youtube Live Chat! 🚀",
          src: generateRandomName().image,
        })
      );
    }, 1000);

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
      <div className="flex-1 overflow-y-auto h-[760px] p-4">
        {/* Adjusted container */}
        {chatMessages.map((c, idx) => {
          return <ChatMessage key={idx} name={c.name} message={c.message} image={c.src} />;
        })}
      </div>
      <div>
        <hr className="mt-4 border-gray-300" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Chat..."
            className="bg-gray-100 py-2 rounded-full w-[430px] my-2 ml-4 pl-8 text-lg"
            value={myChatMessage}
            onChange={(e) => {
              setMyChatMessage(e.target.value);
            }}
          />
          <button className="bg-gray-100 px-4 py-2 ml-4 rounded-full text-xl text-gray-700" onClick={addMyMessage}>
            send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
