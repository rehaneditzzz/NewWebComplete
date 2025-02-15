import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  course: z
    .enum(["bca", "bsc", "bcom", "ba"])
    .refine((val) => val, { message: "Select a valid course" }),
  department: z
    .enum(["arts", "science", "commerce"])
    .refine((val) => val, { message: "Select a valid department" }),

  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number is required"),
  year: z
    .enum(["1", "2", "3"])
    .refine((val) => val, { message: "Select a valid year" }),
  message: z.string().optional(),
});

const StudentAdd = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/addnewstudent/add",
        data
      );
      alert(response.data.message);
      reset();
    } catch (error) {
      console.error("Error adding student:", error);
      alert(error.response?.data?.message || "Error adding student");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-background rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-foreground">Add Student</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <label className="block text-muted-foreground">Name</label>
          <input
            className="border p-2 w-full"
            type="text"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-muted-foreground">Course</label>
            <select className="border p-2 w-full" {...register("course")}>
              <option value="">Select course</option>
              <option value="bca">BCA</option>
              <option value="bsc">BSc</option>
              <option value="bcom">BCom</option>
              <option value="ba">BA</option>
            </select>
            {errors.course && (
              <p className="text-red-600 text-sm">{errors.course.message}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="block text-muted-foreground">Department</label>
            <select className="border p-2 w-full" {...register("department")}>
              <option value="">Select department</option>
              <option value="arts">Arts</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
            </select>
            {errors.department && (
              <p className="text-red-600 text-sm">
                {errors.department.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-muted-foreground">Email</label>
          <input
            className="border p-2 w-full"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-muted-foreground">Phone</label>
          <input
            className="border p-2 w-full"
            type="tel"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-muted-foreground">Year of Study</label>
          <select className="border p-2 w-full" {...register("year")}>
            <option value="">Select year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
          </select>
          {errors.year && (
            <p className="text-red-600 text-sm">{errors.year.message}</p>
          )}
        </div>

        <div>
          <label className="block text-muted-foreground">
            Message (Optional)
          </label>
          <textarea className="border p-2 w-full" {...register("message")} />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          {isLoading ? "Submitting..." : "Add Student"}
        </button>
      </form>
    </div>
  );
};

export default StudentAdd;
