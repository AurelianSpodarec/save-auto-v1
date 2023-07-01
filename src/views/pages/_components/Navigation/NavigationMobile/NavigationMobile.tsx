import { configMenu } from "config/menu/menuConfig";

function NavigationMobile() {
    return (
        <div className="relative">

            <div className="flex absolute pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 h-full"></div>

            <div className="
                lg:hidden
                fixed top-[50px] z-30 bg-white h-full w-64
            ">
                <div className="relative flex flex-col flex-1 min-h-0 h-full pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">

                    <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                        <ul>
                        {configMenu.primary.map((item) => {
                            return (
                                <div className="flex items-center">
                                    <div className={`h-5 w-5 text-gray-200 text-center mx-3 relative`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-200">
                                        {item.name}
                                    </span>
                                </div>
                            )
                        })}
                        </ul>

                        <ul>
                        {configMenu.secondary.map((item) => {
                            return (
                                <div className="flex items-center">
                                    <div className={`h-5 w-5 text-gray-200 text-center mx-3 relative`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-200">
                                        {item.name}
                                    </span>
                                </div>
                            )
                        })}
                        </ul>
                        
                    </div>

                </div>
                </div>
            </div>

        </div>
    )
}

export default NavigationMobile;
