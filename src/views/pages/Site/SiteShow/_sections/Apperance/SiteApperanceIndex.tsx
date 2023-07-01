import PageHeader from "molecules/PageHeader";
import CardThemeItem from "./_components/CardThemeItem";
import { fakeThemes } from "database/fakeThemes";
import { getBlogTemplateList } from "services/apis/autosite/requests/blog";
import { useQuery } from "@tanstack/react-query";

function SiteApperanceIndex() {

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["blog-templates"],
        queryFn: () => getBlogTemplateList()
    })

    return (
        <div className="p-8">

            <PageHeader title="Website Templates" />

            <section>
                <div className="grid grid-cols-4 gap-8">

                     {data ? (
                        data.map((item) => {
                            // return <CardThemeItem item={item} isActive={item.isActive} />
                            return <div key={item.id}>{item.id}</div>
                        })
                    ) : (
                        [...Array(10)].map((_, index) => (
                            // <TableSiteRow key={index} isLoading={true} />
                            <div>Loading Theme</div>
                        ))
                    )} 
                </div>
            </section>
        </div>
    )
}

export default SiteApperanceIndex;
