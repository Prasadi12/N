import { useState, useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";
import axios from "axios";

const RichTextEditor = ({ articleId }) => {
  const [content, setContent] = useState("");
  const quillRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const Quill = require("quill");
      const editor = new Quill(quillRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });
      editor.on("text-change", () => {
        setContent(editor.root.innerHTML);
      });
    }
  }, []);

  const saveContent = async () => {
    try {
      await axios.put(`/api/articles/${articleId}`, { content });
      console.log("Content saved successfully");
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  return (
    <div>
      <div ref={quillRef} />
      <button onClick={saveContent}>Save Content</button>
    </div>
  );
};

export default RichTextEditor;
