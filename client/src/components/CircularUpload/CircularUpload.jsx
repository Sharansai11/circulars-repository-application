import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./CircularUpload.css";

export default function CircularUpload() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const token = localStorage.getItem('token')
  const axiosWithToken = axios.create({
    headers: { Authorization: `Bearer ${token}` }
  })
  const [err, setErr] = useState("");
  const [state, setState] = useState(false);

  async function uploadCircular(circulardata) {
    console.log(circulardata)
    try {
      let res = await axios.post(`http://localhost:4000/admin-api/upload-circular`, circulardata);

      if (res.data.message === "Circular added successfully") {
        setState(true);
        setErr("");
      } else {
        setErr(res.data.message);
      }
    } catch (error) {
      console.error("Error during upload", error);
      setErr("Failed to upload. Please try again.");
    }
  };

  return (
    <div className="CircularUpload">
      <h3>Upload a Circular</h3>
      <form onSubmit={handleSubmit(uploadCircular)}>
        {state && <h3>Upload successful</h3>}
        {err && <p className="error-message">{err}</p>}

        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && errors.title.type === "required" && (
            <p className="errorMsg">Title is required.</p>
          )}
        </div>

        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            name="description"
            {...register("description", {
              required: true,
              minLength: 6
            })}
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
            {...register("date", {
              required: true,
            })}
          />
          {errors.date && errors.date.type === "required" && (
            <p className="errorMsg">Date is required.</p>
          )}
        </div>

        <div className="form-control">
          <label>Category</label>
          <input
            type="text"
            name="category"
            {...register("category", {
              required: true,
            })}
          />
          {errors.category && errors.category.type === "required" && (
            <p className="errorMsg">Category is required.</p>
          )}
        </div>

        <div className="form-control">
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
}
