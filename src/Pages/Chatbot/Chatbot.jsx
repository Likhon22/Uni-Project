import { useQuery } from "@tanstack/react-query";
import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Container from "../../Components/Container";
import { TiMessageTyping } from "react-icons/ti";
import chatBanner from "../../assets/chatbot.jpg";
import chatBanner2 from "../../assets/chatbot2.png";
const Chatbot = () => {
  const axios = useAxios();
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = () => {
    const question = input.trim().toLowerCase();
    console.log(question);
    setLoading(true);

    if (question) {
      fetchData(question);
    } else {
      setResponse("Please Enter a valid question");
    }
    setInput("");
  };

  const fetchData = async (question) => {
    try {
      const response = await axios.get(`/chatbot?question=${question}`);
      setResponse(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setResponse("I'm sorry, I couldn't retrieve the answer at the moment.");
      setLoading(false);
    }
  };
  return (
    <Container>
      {loading ? (
        <TiMessageTyping></TiMessageTyping>
      ) : (
        <div
          className="min-h-screen flex justify-center items-center w-full   my-24"
          style={{
            backgroundImage: `url(${chatBanner2})`,

            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[600px]">
            <h1 className="text-4xl font-bold text-center my-8">Chatbot</h1>
            <div
              className="text-white w-full font-medium min-h-[600px] p-12 rounded-md shadow-2xl "
              key={response}
              style={{
                backgroundImage: `url(${chatBanner})`,

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {response ? (
                <TypeAnimation
                  sequence={[`${response}`, 1000]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={1}
                />
              ) : (
                ""
              )}
            </div>
            <input
              type="text"
              className="border border-black rounded-full p-4 mt-6 w-10/12 mx-auto"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
            />
            <button
              className="btn btn-info bg-teal-500 border-none ml-4 my-8 text-white  "
              onClick={() => handleInput()}
            >
              Ask
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Chatbot;
