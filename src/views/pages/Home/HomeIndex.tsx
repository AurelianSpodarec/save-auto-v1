import { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

import Container from "atoms/Container";
import Card from "atoms/Card";
import PageHeader from "molecules/PageHeader";

function HomeIndex() {

    return (
        <Container>

            <PageHeader title="Dashboard" />

            <Card>
                Card
            </Card>

        </Container>
    )
}

export default HomeIndex;
