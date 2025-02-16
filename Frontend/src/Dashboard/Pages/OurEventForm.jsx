import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const eventSchema = z.object({
  title: z.string().min(1, "Event title is required"),
  date: z.string().min(1, "Event date is required"),
  time: z.string().min(1, "Event time is required"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
  location: z.string().min(1, "Location is required"),
  organizer: z.string().min(1, "Organizer is required"),
  image: z.any().optional(),
});

const OurEventForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(eventSchema),
  });

  const [eventCreated, setEventCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("organizer", data.organizer);
    
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]); // Only first image file
    }
  
    try {
      const response = await fetch("http://localhost:3000/api/ourevents", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create event");
      }

      console.log("Event created successfully");
      setEventCreated(true);
      setErrorMessage("");
      reset();
    } catch (error) {
      console.error("Error creating event:", error);
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md ">
      <h2 className="text-2xl font-semibold text-gray-800">Create Our Event</h2>


      {errorMessage && (
        <p className="text-red-500 font-semibold">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-3 space-y-4" encType="multipart/form-data">
        {["title", "date", "time", "location", "organizer"].map((field) => (
          <div className="space-y-1" key={field}>
            <label htmlFor={field} className="text-sm font-medium text-gray-700">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "date" ? "date" : field === "time" ? "time" : "text"}
              id={field}
              {...register(field)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[field] && <p className="text-sm text-red-500">{errors[field].message}</p>}
          </div>
        ))}

        <div className="space-y-1">
          <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register("description")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="image" className="text-sm font-medium text-gray-700">Event Image</label>
          <input
            type="file"
            id="image"
            {...register("image")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Event
          </button>

          
      {eventCreated && (
        <p className="text-green-600 font-semibold text-center mt-3">Event created successfully!</p>
      )}
        </div>
      </form>
    </div>
  );
};

export default OurEventForm;
