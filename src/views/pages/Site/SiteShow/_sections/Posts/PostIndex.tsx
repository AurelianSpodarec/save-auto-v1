import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, StatusCell } from "atoms/Table";
import Pagination from "molecules/Pagination/Pagination";
import PageHeader from "molecules/PageHeader";

import { getBlogPosts } from "services/apis/autosite/requests/blog";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function PostTableRow({ item }:any) {

    return (
        <TableRow>

            <TableCell scope="row">
                <div className="truncate text-sm font-medium leading-6">
                    {item.title}
                </div>
            </TableCell>

            <TableCell>
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                    <time className="text-gray-400 sm:hidden" dateTime="2023-01-23T11:00">{item.createdAt}</time>
                    {/* <div className="hidden sm:block">{item.status}</div> */}
                    {/* <StatusCell status={item.status} /> */}
                    <StatusCell status={item.status} />
                </div>
            </TableCell>

            <TableCell>
                <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                <time className="text-gray-400 sm:hidden" dateTime="2023-01-23T11:00">{item.published_at}</time>
                <div className="flex-none rounded-full p-1 text-green-400 bg-green-400/10">
                    <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
                </div>
                <div className="hidden sm:block">{item.published_at}</div>
                </div>
            </TableCell>

            <TableCell>{item.tool}</TableCell>


        </TableRow>
    )
}

function SitePostIndex() {
    const { id } = useParams();

    const postQuery = useQuery({
        queryKey: ["posts", id],
        queryFn: () => getBlogPosts(id)
    })

    const columns = ["Title", "Status", "Publish At", "Tools"]

    return (
        <div>
            <section className="p-8 border-t border-white/10">
                
            <PageHeader title="Articles" className="flex items-center justify-between w-full" />

            <Table className="w-full whitespace-nowrap text-left">

                <TableHead>
                <TableRow>
                    {columns && columns.map((column) => {
                        return <TableHeadCell key={column} scope="col">{column}</TableHeadCell>
                    })}
                </TableRow>
                </TableHead>

                <TableBody>
                    {postQuery.data && postQuery.data.map((post:any) => {
                        return <PostTableRow key={post.id} item={post} />
                    })}
                </TableBody>

            </Table>
            </section>

            {/* <section>                                        
                    <Pagination data={
                        {
                            "data": {
                              "total_pages": 10,
                              "page": 3,
                              "total_results": 200
                            },
                            "firstPage": false,
                            "lastPage": false,
                            "totalResults": 200,
                            "resultsFrom": 41,
                            "resultsTo": 60
                        }
                    }/>
            </section> */}

        </div>
    )
}

export default SitePostIndex;
