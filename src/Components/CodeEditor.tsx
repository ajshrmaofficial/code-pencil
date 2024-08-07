import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { useRef, useState } from "react";
import { githubDark } from "@uiw/codemirror-theme-github";
import Collapsible from "./Collapsible";
import useAppContext, { Language } from "../utility/useAppContext";
import Draggable from "react-draggable";

function CodeEditor({lang}: {lang: Language}){
    const nodeRef = useRef(null);
    const screenHeight = window.screen.availHeight;
    const {srcDoc, assignSrcDocString} = useAppContext();
    
    const [isOpen, setIsOpen] = useState(true);

    const collapseEditor = () => {
        setIsOpen(!isOpen);
    }

    const onEdit = (value: string) => {
        assignSrcDocString({type: lang, value: value});
    }

    return(
        <Draggable nodeRef={nodeRef} handle="strong" axis="y">
        <div ref={nodeRef} className="">
        <Collapsible isOpen={isOpen} title={lang} collapseEditor={collapseEditor}>
            <ReactCodeMirror height={`${screenHeight/3}`} maxHeight={`${screenHeight/3}`} theme={githubDark} className="w-full" value={lang==='html' ? srcDoc.htmlCode : lang==='css' ? srcDoc.cssCode : lang==='js' ? srcDoc.jsCode: ''} extensions={[lang==='html' ? html() : lang==='css' ? css() : lang==='js' ? javascript(): html()]} onChange={onEdit}/>
        </Collapsible>
        </div>
        </Draggable>
    )
}

export default CodeEditor;
