import StepNavItem from "./StepNavItem";
import useGuide from "../../_logic/useGuide";

function StepNav() {
    const { isMenuFirstItem, menuGoTo, menuList } = useGuide()

    return (
        <div className={`hidden lg:block ${isMenuFirstItem ? "w-0 opacity-0" : "min-w-[270px] opacity-100"} py-20`}>
        <nav className="flex px-10" aria-label="Progress">
            <ol role="list" className="space-y-6">
            {menuList && menuList.map((step:any) => (
                <StepNavItem key={step.id} menuGoTo={() => menuGoTo(step.id)} item={step} />
            ))}
            </ol>
        </nav>
        </div>
    );
}

export default StepNav;
