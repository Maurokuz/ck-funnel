import React from "react";

interface HighlighterProps {
  text: string;
  wordsToHighlight: string[];
}

const Highlighter = ({ text, wordsToHighlight }: HighlighterProps) => {
  const parts = text.split(new RegExp(`(${wordsToHighlight.join('|')})`, 'gi'));

  return (
    <p>
      {parts.map((part, index) =>
        wordsToHighlight.includes(part.toLowerCase()) ? (
          <span key={index} className="shadow-[inset_0_-.7em_#0faab6]">
            {part}
          </span>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </p>
  );
};

export default Highlighter;