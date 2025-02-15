import { useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

// Validation schema using Zod
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  subject: z.enum(["math", "science", "english", "history"], {
    message: "Select a valid subject",
  }),
  department: z.enum(["arts", "science", "commerce"], {
    message: "Select a valid department",
  }),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  qualification: z.string().min(1, "Qualification is required"),
  experience: z.number().min(0, "Experience must be a non-negative number"),
});

const TeacherAdd = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("http://localhost:3000/api/teachers/add", data);
      alert("Teacher added successfully!");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error adding teacher:", error);
      alert("Failed to add teacher. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">Add Teacher</h2>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div>
          <label className="block text-gray-600">Name</label>
          <input
            {...register("name")}
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Enter name"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>

        {/* Subject & Department */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-600">Subject</label>
            <select {...register("subject")} className="border p-2 w-full rounded">
              <option value="">Select subject</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="history">History</option>
            </select>
            {errors.subject && <p className="text-red-600 text-sm">{errors.subject.message}</p>}
          </div>

          <div className="w-1/2">
            <label className="block text-gray-600">Department</label>
            <select {...register("department")} className="border p-2 w-full rounded">
              <option value="">Select department</option>
              <option value="arts">Arts</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
            </select>
            {errors.department && (
              <p className="text-red-600 text-sm">{errors.department.message}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-600">Email</label>
          <input
            {...register("email")}
            className="border p-2 w-full rounded"
            type="email"
            placeholder="Enter email"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-600">Phone Number</label>
          <input
            {...register("phone")}
            className="border p-2 w-full rounded"
            type="tel"
            placeholder="Enter phone number"
          />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Qualification */}
        <div>
          <label className="block text-gray-600">Qualification</label>
          <input
            {...register("qualification")}
            className="border p-2 w-full rounded"
            type="text"
            placeholder="Enter qualification"
          />
          {errors.qualification && (
            <p className="text-red-600 text-sm">{errors.qualification.message}</p>
          )}
        </div>

        {/* Experience */}
        <div>
          <label className="block text-gray-600">Teaching Experience (Years)</label>
          <input
            {...register("experience", { valueAsNumber: true })}
            className="border p-2 w-full rounded"
            type="number"
            placeholder="Enter years of experience"
            min="0"
          />
          {errors.experience && (
            <p className="text-red-600 text-sm">{errors.experience.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          {isLoading ? "Submitting..." : "Add Teacher"}
        </button>
      </form>
    </div>
  );
};

export default TeacherAdd;
