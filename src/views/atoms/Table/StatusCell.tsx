type StatusCells = "1" | "2" | "3";

interface StatusCellProps {
    status?: StatusCells;
}

function StatusCell({ status }: StatusCellProps) {
    const mediaTypes: Record<StatusCells, { className: string; name: string }> = {
        "1": {
            className: "text-yellow-700 bg-yellow-50 ring-yellow-600/20",
            name: "Idea",
        },
        "2": {
            className: "text-blue-700 bg-blue-50 ring-blue-600/20",
            name: "Written",
        },
        "3": {
            className: "text-green-700 bg-green-50 ring-green-600/20",
            name: "Published",
        },
    };

    const mediaStatus = mediaTypes[status];
    if (!status) return <></>;
    return (
        <div className={`inline-flex items-center ring-inset rounded-md px-2 py-1 text-xs font-medium ring-1 ${mediaStatus.className}`}>
            <span className="">{mediaStatus.name}</span>
        </div>
    );
}

export default StatusCell;
