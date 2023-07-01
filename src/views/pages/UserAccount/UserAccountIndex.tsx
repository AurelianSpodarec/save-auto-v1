import { Link, Outlet } from "react-router-dom";

import { getMenuPageByID } from "config/menu/menuUtils";

import Container from "atoms/Container";
import Card from "atoms/Card";
import PageHeader from "molecules/PageHeader";

function UserAccountIndex() {
    const pageAccount = getMenuPageByID("secondary", "account")

    // Inspiration: https://dribbble.com/shots/18484986-Settings-with-Sidebar-and-Tabbed-Detail-Pane
    return (
        <Container>
            <PageHeader title="Account" />

            <Card className="p-0">
            <div className="flex">

                <nav className="flex flex-col space-y-4 border-r border-r-gray-200 p-6">
                    {pageAccount && pageAccount.children!.map((item:any) => {
                        return <Link key={item.id} to={pageAccount.url + item.url}>{item.name}</Link>
                    })}
                    <Link to="" className="text-red-700">Delete Account</Link>
                </nav>

                <div className="p-6">
                    <Outlet />
                </div>

            </div>
            </Card>
        </Container>
    )
}

export default UserAccountIndex;
