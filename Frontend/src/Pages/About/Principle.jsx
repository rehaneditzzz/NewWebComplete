const Principle = () => {
  return (
    <div className="container mx-auto p-6 pt-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <blockquote className="border-l-2 border-primary border-purple-600  pl-4 italic text-lg text-muted-foreground">
          "With a blend of expertise in Economics, Business, and Commerce, an MBA is not just a degree, but a pathway to becoming a transformative leader who shapes the future of global business."
            {/* <footer className="mt-2 text-sm text-muted-foreground">
              — Stephen Hawking
            </footer> */}
          </blockquote>
          <p className="mt-4 text-base text-foreground">
            It gives me an immense pleasure to welcome all the students from
            junior, UG, PG courses and Ph.D. Scholars to our prestigious
            institution. Our college has been accredited 'A' by National
            Assessment and Accreditation Council, Bangalore.
          </p>
          <p className="mt-4 text-base text-foreground">
            You will feel proud to be a part of this oldest, prestigious and
            academically rich institute in the Vidarbha region. We try to
            achieve the academic excellence by supervised study in an
            intellectually rich and cultured environment. The welfare of
            students, faculty members and support staff is the top priority of
            the institute and efforts are taken to create a congenial and
            friendly environment among all the stakeholders of the institute.
          </p>
          <p className="mt-4 text-base text-foreground">
            The institute aims to develop the students as the ideal and
            responsible citizens of India who are socially aware, morally
            conscious and intellectually enlightened. They will create a
            socially stable, environmentally sustainable, economically strong
            and progressive India and will contribute in creating a world with
            scientific vision for the great future. Welcome to the new and ICT
            enabled world of learning @ SBCity College
          </p>
        </div>
        <div className="md:w-1/4">
          <img
            src="/principlesir.jpg"
            alt="Shri Sunil Raisoni"
            className="rounded-full shadow-lg "
          />
          <h2 className="mt-4 text-xl font-semibold text-orange-500 text-foreground">
          Principal Dr. Sujit G. Metre
          </h2>
          <p className="text-muted-foreground">
          (BE, MBA, MA (Economics), M.Com, PhD)
          </p>
        </div>
      </div>
    </div>
  );
};
export default Principle;
