
function Home({setShowPlayground}: {setShowPlayground: React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <div className="h-svh w-full bg-gray-900 flex flex-col justify-center">
            <h1 className="self-center text-slate-100 font-bold text-8xl">Code Pencil ✏️</h1>
            <h3 className="self-center text-slate-50 font-semibold text-2xl">An online <code>HTLM</code> <code>CSS</code> <code>JS</code> playground</h3>
            <button onClick={()=>setShowPlayground(true)} type="button" className="self-center font-bold text-3xl text-red-400 p-2 border border-white w-60 mt-20">Get Started ➜</button>
        </div>
    )
}

export default Home;
