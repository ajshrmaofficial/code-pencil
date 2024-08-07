import useAppContext from "../utility/useAppContext";

function OutputWindow(){

    const {srcDoc} = useAppContext();
    let scrDocFormatted: string;
    if(srcDoc.htmlCode === undefined){
        scrDocFormatted = `
        <html>
            <body><h1>Start coding to get started...</h1></body>
            <style>h1{color: black; font-family: arial; font-weight: bold;}</style>
        </html>
    `
    } else {
        scrDocFormatted = `
        <html>
            <body>${srcDoc.htmlCode}</body>
            <style>${srcDoc.cssCode}</style>
            <script>${srcDoc.jsCode}</script>
        </html>
    `
    }
    
    return (
        <div className="w-full">
            <iframe title="Output Window" height="100%" width="100%" srcDoc={scrDocFormatted}/>
        </div>
    )
}

export default OutputWindow;
