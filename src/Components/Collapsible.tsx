
interface CollapsibleProperties{
    isOpen: boolean;
    children: React.ReactNode;
    collapseEditor: ()=>void
    title: string;
    // nodeRef: React.RefObject<HTMLDivElement>;
}

function Collapsible({isOpen, children, collapseEditor, title}: CollapsibleProperties){
    return(
        <div className="w-full border-t-2">
            <strong className="cursor-pointer">
            <div className="h-9 w-full p-2 bg-black flex justify-between">
                <p className="text-md text-white font-bold">{title.toUpperCase()}</p>
                <p onClick={collapseEditor} className="text-gray-500">{isOpen ? 'Close' : 'Open'}</p>
            </div>
            </strong>
            {isOpen && children}
        </div>
    )
}

export default Collapsible;
