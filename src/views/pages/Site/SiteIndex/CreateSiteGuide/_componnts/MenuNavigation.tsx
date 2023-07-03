import useGuide from "../useGuide";

function MenuNavigation() {
    const { menuList } = useGuide()

    return (
        <div className={`hidden lg:block min-w-[270px] opacity-100 py-20`}>
        <nav className="flex px-10" aria-label="Progress">

            <ol role="list" className="space-y-6">
            {menuList && menuList.map((step:any) => (
                // <MenuNavigationItem key={step.id} menuGoTo={() => menuGoTo(step.id)} item={step} />
                <div>
                    {step.id}
                </div>
            ))}
            </ol>
            
        </nav>
        </div>
    );
}

export default MenuNavigation;
