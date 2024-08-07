import { useContext } from "react";
import { AppContext, srcDocType } from "./AppContextWrapper";

export type Language = "html" | "js" | "css";

export interface appContextType {
  srcDoc: srcDocType;
  assignSrcDocString: ({
    type,
    value,
  }: {
    type: Language;
    value: string;
  }) => void;
}

function useAppContext(): appContextType {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppContextWrapper!");
  }

  const { srcDoc, setSrcDoc } = context;

  const assignSrcDocString = ({
    type,
    value,
  }: {
    type: Language;
    value: string;
  }) => {
    if (type && value)
      switch (type) {
        case "html":
          setSrcDoc({ ...srcDoc, htmlCode: value });
          break;
        case "js":
          setSrcDoc({ ...srcDoc, jsCode: value });
          break;
        case "css":
          setSrcDoc({ ...srcDoc, cssCode: value });
          break;
      }
  };

  return { srcDoc, assignSrcDocString };
}

export default useAppContext;
