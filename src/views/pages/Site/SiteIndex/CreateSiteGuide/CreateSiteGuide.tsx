import Lottie from 'lottie-react';

import StepsIndex from './_steps/StepsIndex';
import GuideMenuIndex from './_steps/StepsIndex';
import useGuide from './useGuide';
import StepNav from '../DEPRICATED_CreateSiteGuide/_components/StepNav/StepNav';
// import useGuide from './_logic/useGuide';

interface props {
    isOpen: boolean;
    onOpen?: () => void;
    onClose: () => void;
}

function CreateSiteGuide({ isOpen, onOpen, onClose }:any) {
    const { nextStep } = useGuide();
    // const isOpen = true;
    return (
        <div className={`relative z-30 ${isOpen ? "block" : "hidden"} `} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center lg:p-0">
                <div className={`
                        relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all lg:my-8 sm:w-full 
                        h-[670px] 
                        max-w-5xl
                    `}>
                    {/* ${isMenuFirstItem ? "lg:max-w-2xl w-full" : "lg:max-w-5xl w-full"} */}

                    <div className="flex flex-row h-full">
                        <aside className="bg-[#061d40]">
                            <StepNav />
                        </aside>
                        <div className="w-full h-full flex flex-col">
                            <header className="p-6 h-[150px] text-center">
                                <div className="h-16 w-16 mx-auto">
                                    {/* {activeMenuItem?.icon} */}
                                </div>
                               {/* <h3 className="text-2xl font-bold">{activeMenuItem?.description}</h3> */}
                            </header>

                            <section className="h-full w-full px-6 overflow-y-auto overflow-x-hidden custom-scrollbar">
                                <GuideMenuIndex />
                            </section>


                            <footer className="mt-auto bg-white border h-[70px]">
                            <div className="flex justify-between items-center h-full px-6">

                                <button type="button" className="text-sm text-blue-400" onClick={() => onClose()}>
                                    Cancel
                                </button>

                                <div>
                                    <button type='button' onClick={() => nextStep()} 
                                    // className={` ${stepCanShow ? "" : "cursor-not-allowed"} step-button ${stepCanShow ? "is-active" : ""}`}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <div className="flex items-center text-sm">
                                            Next step
                                            <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                
                            </div>
                            </footer>


                        </div>
                    </div>


                </div>
                </div>
                
            </div>
        </div>
    );
}

export default CreateSiteGuide;
