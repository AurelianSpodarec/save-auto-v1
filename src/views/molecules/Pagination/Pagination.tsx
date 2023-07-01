import PaginationOne from "./_variations/PaginationOne";

const configPaginations = {
    one: PaginationOne,
};

function Pagination({ data, variation = "one" }: PaginationProps) {
    const PaginationComponent = configPaginations[variation];

    return <>{data && <PaginationComponent data={data} />}</>;
}

export default Pagination;

interface PaginationProps {
    data?: any;
    variation?: keyof typeof configPaginations;
}
