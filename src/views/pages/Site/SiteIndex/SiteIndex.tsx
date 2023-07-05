import { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getBlogList } from 'services/apis/autosite/requests/blog';

import Container from "atoms/Container";
import Button from "atoms/Button/Button";

import PageHeader from "molecules/PageHeader";
import UpgradeNotification from 'molecules/UpgradeNotification';

import RenderViewContent from './_components/RenderViewContent';
import CreateSiteGuide from './CreateSiteGuide/CreateSiteGuide';

function SiteIndex() {
    const [openModal, setOpenModal] = useState(false);

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["sites"],
        queryFn: () => getBlogList()
    })

    return (
        <Container>

            <UpgradeNotification />

            <CreateSiteGuide isOpen={openModal} onOpen={() => setOpenModal(true)} onClose={() => setOpenModal(false)} />

            <PageHeader title="All Sites" className="flex justify-between items-center align-middle">
                <Button label="New Site" onClick={() => setOpenModal(true)} />
            </PageHeader>

            <div className="flow-root">
                <RenderViewContent isLoading={isLoading} data={data} />
            </div>
        </Container>
    )
}

export default SiteIndex;
