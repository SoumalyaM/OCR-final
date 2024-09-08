import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputPage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // In a real application, you would process the file here
      // For now, we'll just navigate to the output page
      navigate("/output", {
        state: { text: "This is sample OCR output text." },
      });
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6">OCR Input</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image or PDF
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            accept="image/*,.pdf"
            className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          disabled={!file}
        >
          Process
        </button>
      </form>
    </div>
  );
};

export default InputPage;
