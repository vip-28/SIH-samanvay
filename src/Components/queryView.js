const QueryView= (props)=>{
console.log(props)
    return(
    <>
    <div className=" top-44 left-80 absolute h-96 w-3/4 bg-blue-600 z-10"><buton>queryview</buton>
    <div className="h-7 w-7 bg-slate-400 absolute top-0 left-full rounded-full flex items-center justify-center" ><button onClick={props.changeQuery}> X </button></div></div>

    </>    
    );
};

export default QueryView;