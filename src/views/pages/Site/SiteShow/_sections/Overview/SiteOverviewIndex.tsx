import { useEffect } from 'react';

import { useQuery } from "@tanstack/react-query";
import { configApp } from "config/configApp";
import { useParams } from "react-router-dom";
import { getBlogSite } from "services/apis/autosite/requests/blog";
import useWebSocketGuide from "services/apis/autosite/websocket/useWebSocketGuide";
import Skeleton from 'atoms/Skeleton';



function RegenerateBlogPart({ blogID, task }: { blogID: number | string, task }) {
    const { startTask, socketResponse } = useWebSocketGuide(blogID);

    // If regenerating started, switch image or text to skeleton
    // once regenerating finished, put new image/text in place instead of skeleton
    // if failed, revert back to old image

    useEffect(() => {
        // console.log("mmmmm" , socketResponse)
    }, [socketResponse])

    // maybe use ref?

    return (
        <div className=" top-0 right-0 cursor-pointer text-gray-600">
            <span title="Regenerate" onClick={() => startTask(task)}>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M17.65 6.35c-1.63-1.63-3.94-2.57-6.48-2.31-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20c3.19 0 5.93-1.87 7.21-4.56.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53-1.13 2.43-3.84 3.97-6.8 3.31-2.22-.49-4.01-2.3-4.48-4.52C5.31 9.44 8.26 6 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"></path></svg>
            </span>
        </div>
    )
}


function SiteOverviewIndex() {

    const { id } = useParams();

    const siteQuery = useQuery({
        queryKey: ["sites", id],
        queryFn: () => getBlogSite(id)
    })
    const data = siteQuery && siteQuery.data
    const author = data && data?.author;

    return (
        <div className="bg-white 2xl:mx-40">

            <div className="p-8 flex flex-col">

                <div className="flex border-b border-b-gray-300 mb-10 pb-4">
                    <div className="h-12 w-12 mr-4 relative">
                        {data?.logo ? (
                            <img className="h-full w-full" src={`${configApp.http}${configApp.url}${data?.logo}`} alt="Brand" />
                        ) : (
                            <Skeleton height="h-full" width="w-full" variant="circle" gutter="mb-0" type="image" />
                        )}
                        <RegenerateBlogPart blogID={id} task="logo" />
                    </div>
                            

                    <div className="flex flex-col">
                        
                        {data?.title ? (
                            <h2 className="text-xl">{data && data?.title}</h2>
                        ) : (
                            <Skeleton variant="rectangular" height="h-3.5" width="w-40" gutter="mb-3" />
                        )}

                        {data?.tagline ? (
                            <p className="text-sm">{data && data?.tagline}</p>
                        ) : (
                            <Skeleton variant="rectangular" height="h-3" width="w-64" />
                        )}

                    </div>

                </div>

                <div className="flex">
                    <div className="no-flex relative border rounded-xl mr-6 h-[200px] w-[200px] flex-[0_0_200px] overflow-hidden">
                    {author?.profile_picture ? ( 
                        <img className="object-cover h-full w-full" src={`${configApp.http}${configApp.url}${author && author.profile_picture}`} />                        
                    ) : (
                        <Skeleton height="h-full" width="w-full" gutter="mb-0" type="avatar" />
                    )}
                    </div>
                    <div className="flex flex-col w-full">

                        <div className="flex items-center justify-between mb-2">

                            <div className="flex items-center space-x-2">
                                {author?.name ? (
                                    <span className="text-2xl">{author && author.name}</span>
                                ) : (
                                    <Skeleton variant="rectangular" height="h-5" width="w-48" />
                                )}
                                <RegenerateBlogPart blogID={id} task="persona" />
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">

                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                                    </svg>    
                                    </span>

                                    {author?.age ? (
                                        <span>{author && author.age} years old</span>
                                    ) : (
                                        <Skeleton variant="rectangular" height="h-4" width="w-20" />
                                    )}
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    </span>

                                    {author?.location ? (
                                        <span>{author && author.location}</span>
                                    ) : (
                                        <Skeleton variant="rectangular" height="h-4" width="w-40" />
                                    )}
                                </div>
                            </div>

                        </div>

                        <div className="w-full">
                            {data?.persona ? (
                                <p>{data && data?.persona}</p>
                            ) : (
                                <div className="flex flex-wrap">
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/6" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/4" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/5" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/5" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/6" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/4" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/5" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/4" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/6" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/5" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/6" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/4" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/4" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/5" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/4" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/6" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/5" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/6" />
                                    <Skeleton gutter="mb-2 px-2" variant="rectangular" height="h-3.5" width="w-1/4" />
                                </div>
                            )}
                        </div>

                    </div>

                </div>

                
               

            </div>


            {/* <div className="p">
                <h2>Analytics</h2>
                <ChartLine aspect={3} />
            </div>

            <section>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6">hi</div>
                <div className="col-span-6">hi</div>
            </div>
            </section>
             */}
        </div>
    )
}

export default SiteOverviewIndex;
