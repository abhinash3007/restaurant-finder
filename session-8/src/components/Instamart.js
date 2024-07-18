import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black p-4 mb-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            {isVisible && <p>{description}</p>}
            <button
                className="mr-2 mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setIsVisible(!isVisible)}
            >
                {isVisible ? "Hide" : "Show"}
            </button>
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setVisisbleSection] = useState("about");
    const description = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.";

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Instamart</h1>
            <h1 className="text-xl mb-4">100's of bundles in Instamart</h1>
            <Section
                title="About Instamart"
                description={description}
                isVisible={visibleSection === "about"}
                setIsVisible={() => setVisisbleSection("about")}
            />
            <Section
                title="Our Vision"
                description={description}
                isVisible={visibleSection === "vision"}
                setIsVisible={() => setVisisbleSection("vision")}
            />
            <Section
                title="Our Services"
                description={description}
                isVisible={visibleSection === "services"}
                set={() => setVisisbleSection("services")}
            />
        </div>
    );
};

export default Instamart;
