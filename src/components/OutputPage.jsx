import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Gradient } from "./design/Services";

const OutputPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const { text } = location.state || { text: null };

  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      alert("Text copied to clipboard!");
    }
  };

  const handleDownload = () => {
    if (text) {
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "ocr_output.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">OCR Output</h1>
      <div className="rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 p-4 mb-4 min-h-[200px] whitespace-pre-wrap">
        {text
          ? text
          : "No text available. Please process a file from the input page."}
      </div>
      <div className="space-x-4">
        <button
          className="p-[3px] relative"
          onClick={handleCopy}
          disabled={!text}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div
            className={`px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white ${
              !text ? "opacity-50 cursor-not-allowed" : "hover:bg-transparent"
            }`}
          >
            Copy Text
          </div>
        </button>

        <button
          className="p-[3px] relative"
          onClick={handleDownload}
          disabled={!text}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div
            className={`px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white ${
              !text ? "opacity-50 cursor-not-allowed" : "hover:bg-transparent"
            }`}
          >
            Download as TXT
          </div>
        </button>
      </div>
      <Gradient />
    </div>
  );
};

export default OutputPage;
