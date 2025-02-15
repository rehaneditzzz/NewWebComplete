const Secretary = () => {
  return (
    <div className="container mx-auto p-6 pt-28">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <blockquote className="border-l-2 border-primary border-purple-600 pl-4 italic text-lg text-muted-foreground">
            "With the vision of creating sensible citizens and empowering them
            to earn their livelihood in an ethical manner, Shri Binzani City
            College continues to thrive under the esteemed guidance of Nagpur
            Shikshan Mandal, setting a benchmark for excellence in education."
            <footer className="mt-2 text-purple-600 text-sm text-muted-foreground">
            — Adv. Rajeev Deo, Secretary, Nagpur Shikshan Mandal, Nagpur
            </footer>
          </blockquote>
          <p className="mt-4 text-base text-foreground">
            Nagpur Shikshan Mandal(NSM) is one of the oldest and the most
            prestigious institutions of the Central India. Shri Binzani City
            College College, Nagpur is one of the colleges flourishing under the
            patronage of NSM. Established in 1930, the college has been
            continuously making efforts towards achieving excellence in
            education sector. The college has established its name as one of the
            leading institutions for Arts and Commerce education due to the
            untiring efforts put in by the eminent teachers.
          </p>
          <p className="mt-4 text-base text-foreground">
            The management and staff of the college always make efforts to
            provide the best of the infrastructure and the education at all
            levels. The management supports all the stake holders of the college
            to achieve its goal of creating sensible citizens who are capable of
            earning their livelihood in ethical manner.Imparting sports
            education, value education and entrepreneurial education to all
            students has been the hallmark of this college. In its fourth cycle,
            the College is awarded 'A' Grade with CGPA 3.01 by the National
            Assessment and Accreditation Council (NAAC) Bengaluru. I welcome all
            the stakeholders to contribute to the betterment of the college and
            help us in achieving our goals. I wish the best of luck to all the
            students of the college!
          </p>
        </div>
        <div className="md:w-1/4">
          <img
            src="/rajeev.jpg"
            alt="Shri Sunil Raisoni"
            className="rounded-full shadow-lg"
          />
          <h2 className="mt-4 text-xl font-semibold text-foreground text-orange-500">
            Adv. Rajeev Deo
          </h2>
          <p className="text-muted-foreground">
            Secretary, Nagpur Shikshan Mandal, Nagpur
          </p>
        </div>
      </div>
    </div>
  );
};
export default Secretary;
