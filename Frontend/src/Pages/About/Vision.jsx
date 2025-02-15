const Vision = () => {
    return (
      <div className="container mx-auto p-6 pt-28">
        <div className="text-center mb-10">
         <div className="relative flex justify-center items-center">
         <h2 className="text-5xl font-extrabold bg-clip-text   text-transparent bg-gradient-to-r from-orange-700 via-yellow-400 to-orange-700 ">Vision & Mission</h2>
         {/* <h2 className="text-4xl font-extrabold absolute -z-20  bg-gradient-to-r from-black via-slate-700 to-black px-20 py-2">Vision & Mission</h2> */}
         </div>
          <p className="text-xl text-gray-600 mt-2">Our commitment to excellence in education and holistic development</p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-red-500">Vision</h3>
            <p className="text-lg text-gray-700">
              Our vision is to develop this college into an Excellent Centre of Education for Humanities, Commerce, and Management. To serve the Literary, Entrepreneurial, Moral, Physical, Managerial, Social, Cultural, Sports, and Employment-oriented education as per the needs of Nagpur city and beyond. We also aim to promote research and ICT in education to inculcate global competence among students. Through learning, students can contribute significantly to national development, leading to a balance between body, spirit, intellect, and emotion.
            </p>
          </div>
  
          {/* Mission Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-red-500">Mission</h3>
            <p className="text-lg text-gray-700">
              The mission of the college is to focus on the welfare of students. The mission statement reads: <span className="italic text-gray-600">तत्सुखसुखित्वम्</span> (Our welfare lies in the welfare of the students). We believe that students are the core focus, and teachers and management are mere facilitators. The institution aims at providing affordable, quality education to all sections of society, addressing diverse needs, and nurturing global competencies in the process.
            </p>
          </div>
        </div>
  
        <div className="mt-12">
 
          <div className="grid md:grid-cols-2 gap-12 mt-6">
            {/* Marathi Vision Section */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-red-500">दृष्टी</h4>
              <p className="text-lg text-gray-700">
                या महाविद्यालयाला मानविकी, वाणिज्य आणि व्यवस्थापनासाठी उत्कृष्ट शिक्षण केंद्र म्हणून विकसीत करण्याचा आमचा दृष्टीकोन आहे. साहित्यिकी, उद्योजकीय, नैतिक, शारीरिक, व्यवस्थापकीय, सामाजिक, सांस्कृतिक, क्रीडा आणि रोजगाराभिमुख शिक्षण नागपूर शहराच्या गरजेनुसार आणि बाहेरील सेवा देणे. विद्यार्थ्यांमध्ये जागतिक क्षमता विकसित करण्यासाठी शिक्षणामध्ये संशोधन आणि आयसीटीला प्रोत्साहन देण्याची आमची इच्छा आहे. विद्यार्थी शिक्षणाव्दारे राष्ट्रीय विकासासाठी खूप योगदान देऊ शकतात, जे शेवटी आपल्याला केवळ शरीर आणि आत्माच नाही तर बुद्धी आणि भावना यांच्यातील संतुलनाकडे नेतील.
              </p>
            </div>
  
            {/* Marathi Mission Section */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-red-500">ध्येय</h4>
              <p className="text-lg text-gray-700">
                विद्यार्थ्यांच्या कल्याणासाठी पाहणे आणि कार्य करणे हे महाविद्यालयाचे ध्येय आहे. ध्येय म्हणजेच <span className="italic text-gray-600">तत्सुखसुखित्वम्</span> (विद्यार्थ्यांच्या कल्याणामध्ये आमचे कल्याण आहे.) आमचा विश्वास आहे की विद्यार्थी मुख्य स्थानावर आहेत आणि शिक्षक आणि व्यवस्थापन हे केवळ साधन आहेत. समाजातील सर्व घटकांना परवडणारे दर्जेदार शिक्षण देते, विविध गरजा पूर्ण करणे आणि जागतिक क्षमता विकसित करणे हे संस्थेचे उद्दिष्ट आहे.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Vision;
  