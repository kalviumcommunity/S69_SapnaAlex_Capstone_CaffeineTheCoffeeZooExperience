import { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(""); // Clear error when a new file is selected
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first!");
      return;
    }
    console.log("File to upload:", file); // Log the file object

    const formData = new FormData();
    formData.append("file", file);
    formData.append("uploadedBy", "64d8141e4e10b0efe7953451"); // Replace with a valid user ID

    try {
      const response = await axios.post(
        "http://localhost:5000/api/files",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Upload response:", response.data); // Log the response data
      if (response.data && response.data.fileUrl) {
        setUploadedFile(response.data.fileUrl); // Correctly map the file URL
        setError("");
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "File upload failed! Please try again."
      );
      console.error(error);
    }
  };

  return (
    <div className="upload-container">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {uploadedFile && (
        <div>
          <p>Uploaded File:</p>
          <img src={uploadedFile} alt="Uploaded" width="200" />
        </div>
      )}

      {error && <p className="error" style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
