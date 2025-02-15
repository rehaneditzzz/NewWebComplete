import CollegeTotal from "../Common/CollegeTotal";

const CollegeCardSection = () => {
  const binzaniData = [
    {
      id: 1,
      number: "10",
      description: "Departments",
    },
    {
      id: 2,
      number: "30",
      description: "Courses Offered",
    },
    {
      id: 3,
      number: "1200+",
      description: "Students Enrolled",
    },
    {
      id: 4,
      number: "80",
      description: "Faculty Members",
    },
  ];

  return (
    <div className="flex items-center justify-center py-12 bg-slate-50">
    
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
     
        {binzaniData.map((item) => (
          <CollegeTotal
            key={item.id}
            number={item.number}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CollegeCardSection;
