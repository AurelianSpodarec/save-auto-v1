import usePagination from "../usePagination";
import PageItem from "../_components/PageItem";

import Button from "atoms/Button/Button";


function PaginationOne({ data }:any) {
    // TODO: FIX - with real data adjust the pagination data reading in usePagination
    if(!data) return <></>
    const pager = usePagination(data);

    return (
        <div className="flex justify-center items-center">
            
            {/* TODO: Abstract first and last button, and just customise: label, icon */}
            {pager.firstPage &&
                <Button 
                    aria-label="Pagination: Previous page" 
                    onClick={pager.goToPreviousPage} 
                    className={`${pager.firstPage ? "cursor-not-allowed bg-yellow-900" : "bg-yellow-700"} `}
                >
                    Prev
                </Button>
            }

            <div className="flex">
                <PageItem 
                    label="1" 
                    aria-current="1"
                    onClick={() => pager.goToPage("1")} 
                />

                <PageItem 
                    label={pager.currentPage} 
                    aria-current={pager.currentPage}
                    activePage={pager.currentPage} 
                />

                <PageItem 
                    label={pager.totalPages} 
                    aria-current={pager.totalPages}
                    onClick={() => pager.goToPage(pager.totalPages)} 
                />
            </div>
            
            {!pager.lastPage &&
                <Button 
                    aria-label="Pagination: Next Page" 
                    onClick={pager.goToNextPage} 
                    className={`${pager.lastPage ? "cursor-not-allowed bg-yellow-900" : "bg-yellow-700"} `}
                >
                    Next
                </Button>
            }

        </div>
    )
}

export default PaginationOne;
