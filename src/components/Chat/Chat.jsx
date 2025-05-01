import React, { useState, useEffect, useRef } from "react";

const Chat = ({ isOpen, setIsOpen }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [lastMessageId, setLastMessageId] = useState(null);
  const [count, setCount] = useState(0);
  const [chatId, setChatId] = useState("");
  const modalRef = useRef(null);

  const botToken = "7551474554:AAGk1E-haTU382MQwve7X0sYY1qzhTwI3k0";
  const [unreadMessages, setUnreadMessages] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const fetchChatId = async () => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/getUpdates`,
      );
      const data = await response.json();

      if (data.ok && data.result.length > 0) {
        const firstUpdate = data.result[0];
        const chatIdFromAPI = firstUpdate.message.chat.id;
        setChatId(chatIdFromAPI.toString());
      } else {
        console.error("Chat ID topilmadi.");
      }
    } catch (error) {
      console.error("Chat ID olishda xato:", error);
    }
  };

  useEffect(() => {
    fetchChatId();
  }, []);

  const sendMessage = async () => {
    if (!message.trim() || !chatId) return;

    const newMessage = {
      text: message.trim(),
      from: "Siz",
      messageId: -1,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message.trim(),
          }),
        },
      );

      const data = await response.json();
      if (!data.ok) {
        throw new Error(data.description);
      }

      console.log("Xabar yuborildi:", data);
      setMessage("");
    } catch (error) {
      console.error("Xabar yuborishda xato:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/getUpdates`,
      );
      const data = await response.json();

      if (data.ok) {
        const allMessages = data.result.filter(
          (update) => update.message && update.message.text,
        );

        const newMessages = allMessages
          .filter(
            (update) =>
              lastMessageId === null ||
              update.message.message_id > lastMessageId,
          )
          .map((update) => ({
            text: update.message.text,
            from: update.message.from.first_name || "Bot",
            messageId: update.message.message_id,
          }));

        if (newMessages.length > 0) {
          setMessages((prevMessages) => [...prevMessages, ...newMessages]);
          setLastMessageId(newMessages[newMessages.length - 1].messageId);
        }

        // Barcha xabarlar sonini yangilash
        setUnreadMessages(allMessages.length);
      }
    } catch (error) {
      console.error("Xabarlarni olishda xato:", error);
    } finally {
      setCount((v) => v + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchMessages, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    if (isOpen) {
      setMessages([]);
      setLastMessageId(null);
    }
  }, [isOpen]);

  const handleKeyDownSend = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    sessionStorage.setItem("messages", JSON.stringify([]));
  }, []);

  return (
    isOpen && (
      <div
        onClick={handleClickOutside}
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
      >
        <div
          ref={modalRef}
          className="bg-white w-full max-w-2xl h-[80vh] rounded-3xl shadow-xl flex flex-col p-6 relative"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl transition"
          >
            &times;
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
            Telegram Chat
          </h2>

          {/* Chat messages */}
          <div className="flex-grow overflow-y-auto bg-gray-100 rounded-xl p-4 space-y-3 shadow-inner">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === "Siz" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-xl max-w-xs break-words shadow-md ${
                    msg.from === "Siz"
                      ? "bg-blue  text-gray-100"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  <div className="text-sm font-semibold mb-1">{msg.from}:</div>
                  <div>{msg.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Input section */}
          <div className="mt-4 flex gap-4 items-center">
            <input
              className="flex-grow p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDownSend}
              placeholder="Xabar yozing..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-summer px-6 py-3 rounded-xl font-medium transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Chat;
