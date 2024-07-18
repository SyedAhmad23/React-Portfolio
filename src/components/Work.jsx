import Workitem from "./Workitem";
import React from "react";
const data = [
  {
    year: "2023/2024",
    title: "NextJS Developer",
    company: "Deversiti IT Solutions",
    duration: "11/2023-present",
    details: `Develop reusable and efficient Next components that power the user interface of web applications.
Implement state management using React's built-in state or external libraries like Redux Toolkit to manage complex application data and ensure data consistency.
Primarily work with Next.js 14, TypeScript, Redux Toolkit, React Query, RTK Query, Shadcn, and Tailwind CSS.
Utilize UI libraries to build web apps that look modern and work consistently, with ready-made parts and styles.
Participate in code reviews to provide feedback and ensure code quality and adherence to coding standards.`,
  },
  {
    year: "2023",
    title: "ReactJs Deveolper",
    company: "Evolvers Tech",
    duration: "06 Months",
    details: `I create React components that can be used in web apps over
    and over, and they work well.
    I manage the data in web apps, making sure it works smoothly
    and stays consistent, using React's built-in tools or other
    libraries like Redux or the Context API.
    I collaborate with designers to turn their designs into working
    parts of the web app, making it look good and work well.
    I set up navigation in web apps using libraries like React Router
    to make single-page apps with different sections that do
    different things.`,
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 py-16 p-4">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Work
      </h1>
      {data.map((item, id) => (
        <Workitem
          key={id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          company={item.company}
        />
      ))}
    </div>
  );
};

export default Work;
