import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import EventDetailsCard from "./EventDetailsCard"; // Import the EventDetailsCard component
// import UpcomingEvents from "../../components/common/UpcomingEvents";

const eventSchema = z.object({
  eventName: z.string().min(1, "Event name is required"),
  date: z.string().min(1, "Event date is required"),
  time: z.string().min(1, "Event time is required"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
  image: z.any().optional(),
});

const UpcomingEventForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(eventSchema),
  });

  const [, setEventCreated] = useState(false);
  const [, setEventDetails] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("eventName", data.eventName);
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("description", data.description);
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]); // Grab the file from the input
    }

    try {
      const response = await fetch("http://localhost:3000/api/events", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("Event created successfully:", result);
      setEventDetails(result); // Store the event details returned by the API
      setEventCreated(true); // Set eventCreated to true after successful submission
      reset(); // Reset the form
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">Create Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" encType="multipart/form-data">
        {/* Event Name */}
        <div className="space-y-1">
          <label htmlFor="eventName" className="text-sm font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            id="eventName"
            {...register("eventName")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.eventName && <p className="text-sm text-red-500">{errors.eventName.message}</p>}
        </div>

        {/* Event Date */}
        <div className="space-y-1">
          <label htmlFor="date" className="text-sm font-medium text-gray-700">Event Date</label>
          <input
            type="date"
            id="date"
            {...register("date")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
        </div>

        {/* Event Time */}
        <div className="space-y-1">
          <label htmlFor="time" className="text-sm font-medium text-gray-700">Event Time</label>
          <input
            type="time"
            id="time"
            {...register("time")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.time && <p className="text-sm text-red-500">{errors.time.message}</p>}
        </div>

        {/* Event Description */}
        <div className="space-y-1">
          <label htmlFor="description" className="text-sm font-medium text-gray-700">Event Description</label>
          <textarea
            id="description"
            {...register("description")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
        </div>

        {/* Event Image Upload */}
        <div className="space-y-1">
          <label htmlFor="image" className="text-sm font-medium text-gray-700">Event Image</label>
          <input
            type="file"
            id="image"
            {...register("image")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && <p className="text-sm text-red-500">{errors.image.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Event
          </button>
        </div>
      </form>

      {/* Conditionally render EventDetailsCard after the event is created */}
      {/* {eventCreated && eventDetails && <EventDetailsCard event={eventDetails} />} */}
      {/* {eventCreated && eventDetails && <UpcomingEvents event={eventDetails} />} */}
    </div>
  );
};

export default UpcomingEventForm;