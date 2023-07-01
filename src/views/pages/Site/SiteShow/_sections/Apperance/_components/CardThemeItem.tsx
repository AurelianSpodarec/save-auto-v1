function CardThemeItem({ item, isActive }:any) {
    return (
        <div className={`${isActive ? "" : ""} `}>
            <img className="h-[210px] w-full mx-auto object-cover" src={item.screenshot_url} alt="Alt Image" />
            <div>
                <h5>{item.theme_name}</h5>
            </div>
        </div>
    )
}

export default CardThemeItem;
