import NavItem from "./NavItem";

function NavList({ data, menuOpen, menuExpanded }:Props) {
    return (
        <ul className="pb-2 px-3 space-y-2">
            {data && data.map(((item:any) => {
                return <NavItem menuExpanded={menuExpanded} menuOpen={menuOpen} key={item.url} item={item} menu={data}/>
            }))}
        </ul>
    )
}

export default NavList;

interface Props {
    data: any;
    menuExpanded?: boolean;
    menuOpen?: boolean;
}
