import CodeEditor from "./CodeEditor";

function CodeSection() {
  return (
    <div className="flex flex-col w-2/5 h-full bg-black">
      <CodeEditor lang="html" />
      <CodeEditor lang="css" />
      <CodeEditor lang="js" />
    </div>
  );
}

export default CodeSection;
