import { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getBlogList } from 'services/apis/autosite/requests/blog';

import Container from "atoms/Container";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "atoms/Table";
import Button from "atoms/Button/Button";

import PageHeader from "molecules/PageHeader";

import TableSiteRow from "./TableSiteRow";

import Skeleton from 'atoms/Skeleton';
import CreateSiteGuide from './CreateSiteGuide/CreateSiteGuide';

function renderTableRows(isLoading, data) {
    if (isLoading) {
        return [...Array(10)].map((_, index) => (
            <TableSiteRow key={index} isLoading={true} />
        ));
    }

    if (!isLoading && Array.isArray(data) && data.length === 0) {
        return <TableRow>
             <TableCell>
            Create New Site
        </TableCell>
        </TableRow>;
    }

    if (!isLoading && Array.isArray(data)) {
        return data.map((site) => (
            <TableSiteRow key={site.id} item={site} isLoading={isLoading} />
        ));
    }

    return null;
}

function SiteIndex() {
    const [openModal, setOpenModal] = useState(false);

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["sites"],
        queryFn: () => getBlogList()
    })

    useEffect(() => {
        console.log({data, isLoading, isError, error})
    }, [data])

    const columns = ['Domain', 'Scheduled Posts', 'Published Posts'];

    return (
        <Container>

            <CreateSiteGuide isOpen={openModal} onOpen={() => setOpenModal(true)} onClose={() => setOpenModal(false)} />

            <PageHeader title="All Sites" className="flex justify-between items-center align-middle">
                <Button label="New Site" onClick={() => setOpenModal(true)} />
            </PageHeader>

            <div className="flow-root">

                <div className="relative">
                <Table>

                    <TableHead>
                    <TableRow>
                        {columns.map((column, _) => {
                            return (
                                <TableHeadCell key={column} scope="col">
                                    {column}
                                </TableHeadCell>
                            )
                        })}
                    </TableRow>
                    </TableHead>

                    <TableBody>
                        {renderTableRows(isLoading, data)}
                    </TableBody>

                </Table>
                </div>

            </div>
        </Container>
    )
}

export default SiteIndex;
