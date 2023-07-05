import { useQuery } from "@tanstack/react-query";
import Button from "atoms/Button/Button";
import { getUserDetails } from "services/apis/autosite/requests/user";

function UpgradeNotification() {

    const { data } = useQuery({
        queryKey: ["user/subscription"],
        queryFn: () => getUserDetails()
    })

    if(!data?.can_create_blog) return <></>
    return (
        <div className="p-4 ring-1 ring-inset ring-orange-600/20 bg-orange-50 rounded-lg mb-8">
        <div className="flex items-start">
            
            <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
                </svg>
            </div>

            <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">Upgrade Your Plan</p>
                <p className="mt-1 text-sm text-gray-500">You have reached the limit for new sites.</p>
            </div>

            <div className="ml-4 flex flex-shrink-0">
                <Button>Upgrade your plan</Button>
            </div>

        </div>
        </div>
    )
}

export default UpgradeNotification;
