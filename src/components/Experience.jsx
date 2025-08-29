import React from "react";
import useIntersectionObserver from "../components/useIntersectionObserver";

const Experience = () => {
  const [isVisible1, ref1] = useIntersectionObserver();
  const [isVisible2, ref2] = useIntersectionObserver();
  const [isVisible3, ref3] = useIntersectionObserver();
  const [isVisible4, ref4] = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-[#9B59B6] font-anime">
      {/* Header */}
      <header className="text-center pt-12 pb-6">
        <h1 className="text-4xl font-bold text-center mb-10 hover:text-cyan-300 transition duration-300">
          Experience
        </h1>
        {/* <p className="text-xl mt-4 italic text-yellow-300">
          Oops, I am a fresher passing out in 2024.
        </p>
        <p className="text-white italic">But I have internship experience. </p> */}
      </header>

      {/* Internship Section */}
      <section className="container mx-auto px-4 pt-6 pb-12">
        <div className="bg-[#2ECC71] text-gray-700 p-6 rounded-lg contact-card">

          <div className="space-y-6">
            {/* Techsurya */}
            <div
              ref={ref3}
              className={`bg-gray-200 text-gray-900 m-4 p-4 rounded-lg contact-card transform hover:scale-105 duration-300 ${
                isVisible3 ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-semibold text-blue-600">
                ERP Consulting Services
              </h3>
              <p className="text-lg mt-2 font-semibold">
                Software Engineer 
              </p>
              <p className="mt-2">
                Worked on multiple admin dashboards, handling both frontend and
                backend using React, Node.js, and MongoDB. Implemented Redux
                Toolkit for efficient state management and developed optimized
                REST APIs to ensure smooth data flow. Collaborated closely with
                the team to deliver seamless and well-integrated features
              </p>
              <p className="mt-2">
                <strong>Project:</strong>{" "}
                <i>
                  {" "}
                  Yogarshiyog | Harimangal Hospital | Maus Global Multiservices{" "}
                </i>
              </p>
            </div>

            {/* MHTECHIN */}
            <div
              ref={ref1}
              className={`bg-gray-200 text-gray-900 m-4 p-4 rounded-lg contact-card transform hover:scale-105 duration-300 ${
                isVisible1 ? "animate-fadeInUp" : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-semibold text-blue-600">
                Skillhub It Solutions
              </h3>
              <p className="text-lg mt-2 font-semibold">
               Web Developer (INTERNSHIP)
              </p>
              <p className="mt-2">
                Maintaining and updating websites. coming up with unique front-end and modification of code with HTML, CSS, Javascript and react js. working closely with design team.
              </p>
              <p className="mt-2">
                <strong>Project:</strong>{" "}
                <i>
                  RMCC Website | MHTECHIN Website | ERP | CRM | Employee
                  Tracking
                </i>
              </p>
            </div>

          </div>

          <p className="text-lg text-center text-cyan-300 pt-6">
            Looking forward to new opportunities!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
