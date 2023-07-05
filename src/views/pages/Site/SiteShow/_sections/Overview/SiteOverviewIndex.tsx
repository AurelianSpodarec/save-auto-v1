import { useEffect, useState } from 'react';

import { useQuery } from "@tanstack/react-query";
import { configApp } from "config/configApp";
import { useParams } from "react-router-dom";
import { getBlogSite } from "services/apis/autosite/requests/blog";
import Skeleton from 'atoms/Skeleton';
import RegenerateBlogSection from 'molecules/RegenerateBlogSection';


function NotificationSystem() {

    

}


function SiteOverviewIndex() {

    const { id } = useParams();

    const siteQuery = useQuery({
        queryKey: ["sites", id],
        queryFn: () => getBlogSite(id)
    })

    const [data, setData] = useState(siteQuery && siteQuery.data)
    const author = data && data?.author;

    useEffect(() => {
        console.log("data", data);
        
        // When regeneratig, set the logo/task to null, to trigger loading state
        if (siteQuery.data) {
            setData({ 
                ...siteQuery.data, 
                logo: null 
            });
        }
    }, [siteQuery.data]);

    function updateState() {

    }
    
    
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
                        <RegenerateBlogSection blogID={id} task="logo" />
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
                                <RegenerateBlogSection blogID={id} task="persona" />
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
