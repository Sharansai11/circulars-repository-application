import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./CircularUpload.css";

export default function CircularUpload() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const token = localStorage.getItem('token');
  const axiosWithToken = axios.create({
    headers: { Authorization: `Bearer ${token}` }
  });

  const [err, setErr] = useState("");
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);

  async function uploadFileToCloudinary(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'image_preset'); // Replace with your upload preset

    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dobmnzrec/auto/upload`; // Replace with your cloud name

    try {
      const response = await axios.post(cloudinaryUrl, formData);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary", error);
      throw new Error("Failed to upload image to Cloudinary.");
    }
  }

  async function uploadCircular(data) {
    setLoading(true);
    try {
      const fileurl = await uploadFileToCloudinary(data.file[0]);

      const circularData = {
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        fileurl: fileurl
      };
      console.log(circularData);

      const res = await axiosWithToken.post(`http://localhost:4000/admin-api/upload-circular`, circularData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.status === 201) {
        setState(true);
        setErr("");
        reset();
      } else {
        setErr(res.data.message);
      }
    } catch (error) {
      console.error("Error during upload", error);
      setErr("Failed to upload. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="CircularUpload">
      <h3>Upload a Circular</h3>
      <form onSubmit={handleSubmit(uploadCircular)}>
        {state && <h3>Upload successful</h3>}
        {err && <p className="error-message">{err}</p>}
        {loading && <p>Loading...</p>}

        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            {...register("title", { required: true })}
          />
          {errors.title && <p className="errorMsg">Title is required.</p>}
        </div>

        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            name="description"
            {...register("description", { required: true, minLength: 6 })}
          />
          {errors.description && errors.description.type === "required" && (
            <p className="errorMsg">Description is required.</p>
          )}
          {errors.description && errors.description.type === "minLength" && (
            <p className="errorMsg">
              Description should be at least 6 characters.
            </p>
          )}
        </div>

        <div className="form-control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            {...register("date", { required: true })}
          />
          {errors.date && <p className="errorMsg">Date is required.</p>}
        </div>

        <div className="form-control">
          <label>Category</label>
          <input
            type="text"
            name="category"
            {...register("category", { required: true })}
          />
          {errors.category && <p className="errorMsg">Category is required.</p>}
        </div>

        <div className="form-control">
          <label>File</label>
          <input
            type="file"
            name="file"
            {...register("file", { required: true })}
          />
          {errors.file && <p className="errorMsg">File is required.</p>}
        </div>

        <div className="form-control">
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
}
