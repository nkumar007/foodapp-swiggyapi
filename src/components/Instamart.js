import { useState } from "react";

const Section = ({ title, details, isVisisble, setIsVisible, hideSection }) => {
  return (
    <div className=" m-2 border border-2-violet-900 flex flex-col justify-center items-start p-2 ">
      <h1 className="text-2xl font-bold">{title}</h1>
      {isVisisble === true ? (
        <button
          className="p-2 bg-slate-900 text-white"
          onClick={() => hideSection()}
        >
          Hide
        </button>
      ) : (
        <button
          className="p-2 bg-slate-900 text-white"
          onClick={() => setIsVisible()}
        >
          Show
        </button>
      )}

      {isVisisble && <p className="text-xl font-medium">{details}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("about");

  function hideSection(fn, key) {
    fn(key);
  }
  return (
    <>
      <h3 className="text-3xl font-bold">Instamart Component</h3>
      <Section
        title="About Instamart"
        details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
        aspernatur magni illum doloremque veritatis voluptate aperiam voluptates
        dolorem."
        isVisisble={visibleSection === "about"}
        // setIsVisible={() => modifySection(setIsVisibleSection, "about")}
        hideSection={() => hideSection(setIsVisibleSection, "")}
        setIsVisible={() => setIsVisibleSection("about")}
      />
      <Section
        title="Team Instamart"
        details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
        aspernatur magni illum doloremque veritatis voluptate aperiam voluptates
        dolorem."
        isVisisble={visibleSection === "team"}
        // setIsVisible={() => modifySection(setIsVisibleSection, "team")}
        hideSection={() => hideSection(setIsVisibleSection, "")}
        setIsVisible={() => setIsVisibleSection("team")}
      />
      <Section
        title="Careers Instamart"
        details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
        aspernatur magni illum doloremque veritatis voluptate aperiam voluptates
        dolorem."
        isVisisble={visibleSection === "careers"}
        // setIsVisible={() => modifySection(setIsVisibleSection, "careers")}
        hideSection={() => hideSection(setIsVisibleSection, "")}
        setIsVisible={() => setIsVisibleSection("careers")}
      />
    </>
  );
};

export default Instamart;
