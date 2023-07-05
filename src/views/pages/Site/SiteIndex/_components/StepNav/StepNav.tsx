import StepNavItem from "./StepNavItem";

function StepNav({ data, activeMenu, menuList }:any) {
    // const uniqueItems = [...new Map(data.map((item:any) => [item.menuID, item])).values()];

    // const renderState = (item, activeMenu, data, index:number) => {
    //     switch (true) {
    //         case item === activeMenu:
    //             return "isActive";
    //         case index < data.findIndex((item) => item === activeMenu):
    //             return "isComplete";
    //         default:
    //             break;
    //     }
    // }

    return (
        <div className={`hidden lg:block min-w-[270px] opacity-100 py-20`}>
        <nav className="flex px-10" aria-label="Progress">

            {/* <ol role="list" className="space-y-6">
            {data && data.map((step:any, index:number) => (    
             <li key={item.name}>
            {isComplete ? (
                <button type="button" className="group" >
                <span className="flex items-start">
                    <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                    <svg className="h-full w-full text-blue-600 group-hover:text-blue-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"></path>
                    </svg>
                    </span>
                    <span className="ml-3 text-sm font-medium text-gray-400 group-hover:text-gray-300">
                    {stepName}
                    </span>
                </span>
                </button>
            ) : isActive ? (
                <button type="button" className="flex items-start" aria-current="step">
                <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                    <span className="animate-ping absolute h-4 w-4 rounded-full bg-blue-200" />
                    <span className="relative block h-2 w-2 rounded-full bg-blue-600" />
                </span>
                <span className="ml-3 text-sm font-medium text-blue-500">{stepName}</span>
                </button>
            ) : (
                <button type="button" className="group">
                <div className="flex items-start">
                    <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                    <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                    </div>
                    <p className="ml-3 text-sm font-medium text-gray-400 group-hover:text-gray-300">{stepName}</p>
                </div>
                </button>
            )}
        </li>
        ))}
            </ol> */}

        </nav>
        </div>
    );
}

export default StepNav;
