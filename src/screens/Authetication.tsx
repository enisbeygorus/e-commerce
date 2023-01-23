import Section from "../components/Section/Section";
import SignIn from "../components/Authentication/SignIn/SignIn";
import SignUp from "../components/Authentication/SıgnUp/SignUp";
import { useState } from "react";
const Authetication = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabData = [
    { name: "Sign In", id: 0 },
    { name: "Sign Up", id: 1 },
  ];

  const tabActiveHandler = (id: number) => {
    setActiveTab(id);
  };

  const tabContent = tabData.map((tabObj, index) => {
    return (
      <div
        key={index}
        onClick={() => tabActiveHandler(tabObj.id)}
        className={`flex-1  flex justify-center text-lg items-center cursor-pointer ${
          index === 0 ? "" : ""
        } ${activeTab === tabObj.id ? "border-b-0" : "bg-gray-200 text-black"}`}
      >
        {tabObj.name}
      </div>
    );
  });

  return (
    <Section maxWidth="max-w-[1250px]">
      <div className="w-full flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white overflow-hidden rounded-lg border dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full sm:max-w-md z-10  h-12 flex bg-white">
            {tabContent}
          </div>
          {activeTab === 0 ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </Section>
  );
};

export default Authetication;
