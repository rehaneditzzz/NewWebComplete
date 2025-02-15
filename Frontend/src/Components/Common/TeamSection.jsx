const teamMembers = [
  {
    id: 1,
    name: "Dr. Bhushan Vidhale",
    role: "Dean Training & Placements",
    phone: "9970318851",
    email: "tnp_ghrce@raisoni.net",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Mr. Pankaj Ramtekkar",
    role: "Co-In charge",
    phone: "8149929319",
    email: "tnp_ghrce@raisoni.net",
    image: "https://via.placeholder.com/150", 
  },
];

const TeamSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full p-8 bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4">
        <div className="bg-purple-700 text-white text-center font-bold py-2">
          Team
        </div>
        <ul className="mt-4 space-y-2">
          <li className="hover:text-purple-700 cursor-pointer">
            Placement Overview
          </li>
          <li className="hover:text-purple-700 cursor-pointer">
            2024 Batch Placements
          </li>
          <li className="hover:text-purple-700 cursor-pointer">
            2023 Batch Placements
          </li>
          <li className="hover:text-purple-700 cursor-pointer">
            2022 Batch Placements
          </li>
          <li className="hover:text-purple-700 cursor-pointer">
            Departments Training and Placement Coordinator
          </li>
          <li className="hover:text-purple-700 cursor-pointer">Process</li>
          <li className="hover:text-purple-700 cursor-pointer">
            Placement Support
          </li>
          <li className="hover:text-purple-700 cursor-pointer">
            Training and Placement Activities
          </li>
          <li className="hover:text-purple-700 cursor-pointer">
            Our Recruiters
          </li>
          <li className="hover:text-purple-700 cursor-pointer">
            Campus Placed Students for Batch 2022
          </li>
        </ul>
      </div>

      {/* Team Cards */}
      <div className="w-full md:w-3/4 flex flex-wrap justify-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="max-w-sm m-4 bg-white border rounded-lg shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-purple-700">{member.role}</p>
              <div className="mt-2 text-sm">
                <p>📞 {member.phone}</p>
                <p>✉️ {member.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
