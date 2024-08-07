import { createContext, useState } from "react";

export interface srcDocType {
    htmlCode: string;
    cssCode: string;
    jsCode: string;
}

interface AppContextType{
    srcDoc: srcDocType;
    setSrcDoc: React.Dispatch<React.SetStateAction<srcDocType>>;
}

export const AppContext = createContext({} as AppContextType);

function AppContextWrapper({children}: {children: React.JSX.Element}){
    const [srcDoc, setSrcDoc] = useState<srcDocType>({} as srcDocType)

    return <AppContext.Provider value={{srcDoc, setSrcDoc}}>
        {children}
    </AppContext.Provider>
}

export default AppContextWrapper;
