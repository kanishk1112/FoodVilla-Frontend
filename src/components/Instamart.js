import { useState } from "react";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className="p-4 mb-4 bg-white border rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <button
          className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={toggleVisibility}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      {isVisible && <p className="mt-2 text-gray-700">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className="max-w-3xl p-6 mx-auto bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-center">Instamart</h1>

      <Section
        title="Instamart About"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness..."
        isVisible={visibleSection === "about"}
        toggleVisibility={() => toggleSection("about")}
      />

      <Section
        title="Instamart Career"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth..."
        isVisible={visibleSection === "career"}
        toggleVisibility={() => toggleSection("career")}
      />

      <Section
        title="Instamart Products"
        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth..."
        isVisible={visibleSection === "products"}
        toggleVisibility={() => toggleSection("products")}
      />
    </div>
  );
};

export default Instamart;
