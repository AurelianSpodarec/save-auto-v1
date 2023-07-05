import { Table, TableBody, TableHead, TableHeadCell, TableRow } from "atoms/Table";
import TableSiteRow from "../TableSiteRow";
import IconStarterItem from "assets/IconStarterItem";
import Button from "atoms/Button/Button";

export default function RenderViewContent({ isLoading, data }:any) {
    const columns = ['Domain', 'Scheduled Posts', 'Published Posts'];
  
    if (isLoading) {
        return (
            <div className="relative">
            <Table>
                <TableHead>
                <TableRow>
                    {columns.map((column, _) => {
                    return (
                        <TableHeadCell key={column} scope="col">
                        {column}
                        </TableHeadCell>
                    );
                    })}
                </TableRow>
                </TableHead>

                <TableBody>
                {[...Array(10)].map((_, index) => (
                    <TableSiteRow key={index} isLoading={true} />
                ))}
                </TableBody>
            </Table>
            </div>
        );
    }

    if (!isLoading && Array.isArray(data) && data.length === 0) {
        return (
            <div className="max-w-2xl mx-auto text-center mt-12 lg:mt-20">
            <div className="flex flex-col align-center">
                
                <div className="w-48 mx-auto opacity-90 mb-8">
                    <IconStarterItem />
                </div>
                
                <div className="mb-6 max-w-md mx-auto">
                    <h2 className='text-3xl font-bold mb-2'>No Existing Sites</h2>
                    <p>Oops! It seems like you don't have any sites available to view at the moment.</p>
                </div>

                <div>
                    <Button>
                        Create new site    
                    </Button>
                </div>

            </div>
            </div>
        );
    }

    if (!isLoading && Array.isArray(data)) {
        return (
            <div className="relative">
            <Table>

                <TableHead>
                <TableRow>
                    {columns.map((column, _) => {
                        return (
                            <TableHeadCell key={column} scope="col">
                        {column}
                        </TableHeadCell>
                    );
                    })}
                </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((site) => (
                    <TableSiteRow key={site.id} item={site} isLoading={isLoading} />
                    ))}
                </TableBody>

            </Table>
            </div>
        )
    }

    return <div>RenderView Error</div>;
}
