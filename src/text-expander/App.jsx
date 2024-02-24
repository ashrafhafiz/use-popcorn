import { Children, useState } from "react";
import "./styles.css";

const appStyle = {
  padding: "20px",
  marginTop: "50px",
};

export default function App() {
  return (
    <div style={appStyle}>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

const textStyle = {
  padding: "16px",
  marginBottom: "20px",
  backgroundColor: "#e4e4e7",
  color: "#18181b",
  borderRadius: "10px",
};

function TextExpander({
  collapsedNumWords = 50,
  expandButtonText = "more",
  collapseButtonText = "less",
  buttonColor = "blue",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function countWords(children) {
    let str = children;
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    return str.split(" ");
  }

  const fullText = countWords(children);
  const showText = isExpanded ? fullText : fullText.slice(0, collapsedNumWords);

  return (
    <div style={textStyle} className={className}>
      {isExpanded ? showText.join(" ") : showText.join(" ")}
      {fullText.length > collapsedNumWords && (
        <>
          {isExpanded ? "" : "..."}
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? collapseButtonText : expandButtonText}
          </button>
        </>
      )}
    </div>
  );
}
