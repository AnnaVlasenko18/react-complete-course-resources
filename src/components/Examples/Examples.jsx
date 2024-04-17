import { useState } from "react";

import "./Examples.css";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section";
import Tabs from "../Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              label="Components"
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            />
            <TabButton
              label="JSX"
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            />
            <TabButton
              label="Props"
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            />
            <TabButton
              label="State"
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            />
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
