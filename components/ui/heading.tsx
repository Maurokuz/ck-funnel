import Highlighter from "../highlighter";

export interface HeadingProps {
  title: string;
  highlightWords: string[];
}

const Heading: React.FC<HeadingProps> = ({ title, highlightWords }) => {
  return (
    <div className="text-center max-w-5xl mx-auto space-y-4 uppercase z-50">
      <h1 className="text-2xl sm:text-4xl font-bold">
        <Highlighter
          wordsToHighlight={highlightWords}
          text={title}
        />
      </h1>
    </div>
  );
};

export default Heading;
