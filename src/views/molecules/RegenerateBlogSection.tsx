import { useEffect } from "react";
import useWebSocketBlog from "services/apis/autosite/websocket/useWebSocketBlog";

function RegenerateBlogSection({ blogID, task }: { blogID: number | string, task }) {
    const { startTask, socketResponse } = useWebSocketBlog(blogID);

    // console.log("regenrate blog sectoin", socketResponse)
    // If regenerating started, switch image or text to skeleton
    // once regenerating finished, put new image/text in place instead of skeleton
    // if failed, revert back to old image


    // When user clicks regenerate blog section
        // - Store this in notifications {blogID: 442, tasksUpdated: []}
        // - Make the image/text turn into skeleton


    useEffect(() => {
        // console.log("mmmmm" , socketResponse)
    }, [socketResponse])

    // maybe use ref? and trigger that imagge to reload, basically update the data with 'null'
    // Would it be possible to have the data null when regenerating, and if it fails revert it on the back-end

    return (
        <div className=" top-0 right-0 cursor-pointer text-gray-600">
            <span title="Regenerate" onClick={() => startTask(task, true)}>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M17.65 6.35c-1.63-1.63-3.94-2.57-6.48-2.31-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20c3.19 0 5.93-1.87 7.21-4.56.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53-1.13 2.43-3.84 3.97-6.8 3.31-2.22-.49-4.01-2.3-4.48-4.52C5.31 9.44 8.26 6 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"></path></svg>
            </span>
        </div>
    )
}

export default RegenerateBlogSection;
