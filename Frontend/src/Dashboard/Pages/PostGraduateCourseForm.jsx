import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";


// Validation schema for the form
const schema = z.object({
  title: z.string().min(1, "Title is required"),
  duration: z.string().min(1, "Duration is required"),
  type: z.enum(["Full-Time", "Part-Time"], "Select a valid type"),
  image: z
    .any()
    .refine((file) => file && file[0]?.type.startsWith("image/"), "Image is required"),
});

const PostGraduateCourseForm = () => {
  const [, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Fetch programs on page load
  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/programs2"); // Replace with your backend URL
      setPrograms(response.data);
    } catch (error) {
      console.error("Error fetching programs:", error);
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("duration", data.duration);
    formData.append("type", data.type);
    formData.append("image", data.image[0]);
  
    try {
      await axios.post("http://localhost:3000/api/programs2", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      reset(); // Reset form fields
      fetchPrograms(); // Refresh program list
      alert("Post Graduate Program added successfully!");
    } catch (error) {
      console.error("Error adding program:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add Post Graduate Program</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 max-w-md bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <div>
          <label className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            {...register("title")}
            className="w-full p-2 border rounded"
          />
          {errors.title && (
            <p className="text-red-600 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 font-semibold">Duration</label>
          <input
            type="text"
            {...register("duration")}
            className="w-full p-2 border rounded"
          />
          {errors.duration && (
            <p className="text-red-600 text-sm">{errors.duration.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 font-semibold">Type</label>
          <select
            {...register("type")}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
          </select>
          {errors.type && (
            <p className="text-red-600 text-sm">{errors.type.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 font-semibold">Image</label>
          <input
            type="file"
            {...register("image")}
            className="w-full"
          />
          {errors.image && (
            <p className="text-red-600 text-sm">{errors.image.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* <Carousal programs={programs} />  */}
    </div>
  );
};

export default PostGraduateCourseForm;
