import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const eventSchema = z.object({
  eventTitle: z.string().min(1, "Event title is required"),
  eventDate: z.string().min(1, "Event date is required"),
  eventTime: z.string().min(1, "Event time is required"),
  eventDescription: z.string().min(10, "Description must be at least 10 characters long"),
  eventLocation: z.string().min(1, "Location is required"),
  eventOrganizer: z.string().min(1, "Organizer is required"),
  eventImage: z.any().optional(),
});

const OurEventForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(eventSchema),
  });

  const [eventCreated, setEventCreated] = useState(false);
  const [, setEventDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("eventTitle", data.eventTitle);
    formData.append("eventDate", data.eventDate);
    formData.append("eventTime", data.eventTime);
    formData.append("eventDescription", data.eventDescription);
    formData.append("eventLocation", data.eventLocation);
    formData.append("eventOrganizer", data.eventOrganizer);
    
    if (data.eventImage && data.eventImage.length > 0) {
      formData.append("eventImage", data.eventImage[0]);
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
  
      const result = await response.json();
      console.log("Event created successfully:", result);
  
      setEventDetails(result);
      setEventCreated(true);
      setErrorMessage("");
      reset();
    } catch (error) {
      console.error("Error creating event:", error);
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">Create Event</h2>
      
      {eventCreated && (
        <p className="text-green-600 font-semibold">Event created successfully!</p>
      )}

      {errorMessage && (
        <p className="text-red-500 font-semibold">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" encType="multipart/form-data">
        {[
          { label: "Event Title", name: "eventTitle", type: "text" },
          { label: "Event Date", name: "eventDate", type: "date" },
          { label: "Event Time", name: "eventTime", type: "time" },
          { label: "Location", name: "eventLocation", type: "text" },
          { label: "Organizer", name: "eventOrganizer", type: "text" },
        ].map(({ label, name, type }) => (
          <div className="space-y-1" key={name}>
            <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              id={name}
              {...register(name)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[name] && <p className="text-sm text-red-500">{errors[name].message}</p>}
          </div>
        ))}

        <div className="space-y-1">
          <label htmlFor="eventDescription" className="text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="eventDescription"
            {...register("eventDescription")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          {errors.eventDescription && <p className="text-sm text-red-500">{errors.eventDescription.message}</p>}
        </div>

        <div className="space-y-1">
          <label htmlFor="eventImage" className="text-sm font-medium text-gray-700">Event Image</label>
          <input
            type="file"
            id="eventImage"
            {...register("eventImage")}
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
        </div>
      </form>
    </div>
  );
};

export default OurEventForm;
