import React from "react";
import { useLocation } from "react-router-dom";

const OutputPage = () => {
  const location = useLocation();
  const { text } = location.state || { text: "No text available." };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "ocr_output.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">OCR Output</h1>
      <div className="border p-4 mb-4 min-h-[200px] whitespace-pre-wrap">
        {text}
      </div>
      <div className="space-x-4">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Copy Text
        </button>
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Download as TXT
        </button>
      </div>
    </div>
  );
};

export default OutputPage;
