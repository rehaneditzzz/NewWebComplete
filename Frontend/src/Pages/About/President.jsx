const President = () => {
  return (
    <div className="container mx-auto p-6 pt-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <blockquote className="border-l-2 border-primary border-purple-600 pl-4 italic text-lg text-muted-foreground">
          "Science is the spark that ignites the fire of curiosity, fueled by reason, romance, and boundless passion to change the world."
          
            <footer className="mt-2 text-sm text-purple-600 text-muted-foreground">
            — Stephen Hawking
            </footer>
          </blockquote>
          <p className="mt-4 text-base text-foreground">
            Nagpur Shikshan Mandal (NSM) has been in the process of imparting
            education since decades. Among the institutions under the aegis of
            Nagpur Shikshan Mandal, Shri Binzani City College is an institution
            educating the students exclusively in Arts & Commerce, up to Post
            Graduation and Research level. It is a co-educational college
            affiliated to Rashtrasant Tukadoji Maharaj Nagpur University,
            Nagpur. The college was established on 17th July 1930. Through
            determined efforts of the management and staff of the college an
            environment of holistic development of its students is being
            continuously created and improved. Best of the education for all at
            affordable price is the aim of the college. The college has also
            made use of its{" "}
          </p>
          <p className="mt-4 text-base text-foreground">
            Sports infrastructure to the best of its ability and has created
            many players who have represented College at the University, State
            and National level in various tournaments. The College is awarded
            'A' Grade with CGPA 3.01 by the National Assessment and
            Accreditation Council (NAAC) Bengaluru. My best wishes to the
            college in all future endeavors in providing best of the education
            ability and has created many players who have represented College at
            the University, State and National level in various tournaments. The
            College is awarded 'A' Grade with CGPA 3.01 by the National
            Assessment and Accreditation Council (NAAC) Bengaluru. My best
            wishes to the college in all future endeavors in providing best of
            the education.{" "}
          </p>
         
        </div>
        <div className="md:w-1/4">
          <img
            src="/percident.jpg"
            alt="Shri Sunil Raisoni"
            className="rounded-full shadow-lg"
          />
          <h2 className="mt-4 text-xl text-orange-500 font-semibold text-foreground">
          Shri Mohit Shah
          </h2>
          <p className="text-muted-foreground">President, Nagpur Shikshan Mandal, Nagpur</p>
        </div>
      </div>
    </div>
  );
};
export default President;
