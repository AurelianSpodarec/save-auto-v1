import { useState } from 'react';
import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';
import useAuth from 'context/AuthContext/useAuth';

import { configApp } from "config/configApp"
import { ITask, ITaskID } from 'interfaces/Task';

function useWebSocketGuide(blogID:number | null) {
    const { getTokenFromLocalStorage } = useAuth();
    const token = getTokenFromLocalStorage()?.access;
    const url = `${configApp.websocket}${configApp.url}/ws/blog/task`;
    const openConnection = Boolean(blogID);

    const [socketResponse, setSocketResponse] = useState<ITask[]>([]);
    const { sendJsonMessage, readyState } = useWebSocket(`
        ${url}?token=${token}`, 
        {
            share: true,
            onOpen: () => {
                console.log("WebSocket connection opened");
            },
            onMessage: (e) => {
                const response = JSON.parse(e.data);
                console.log("WebSocket Message", response);

                setSocketResponse((prevSocketResponse) => {
                    const existingTask = prevSocketResponse.find((task) => task.task === response.task);
                    if (existingTask) {
                        return prevSocketResponse.map((task) => (task.task === response.task ? response : task));
                    } else {
                        return [...prevSocketResponse, response];
                    }
                });

                console.log("WebSocket message:", socketResponse);
            },
            onError: (e) => {
                console.error("WebSocket error:", e);
            },
            onClose: (e) => {
                console.log("WebSocket connection closed:", e);
            }
        },
        openConnection
    );

    function startTask(task: ITaskID) {
        sendJsonMessage({ 
            blog_id: blogID, 
            task 
        });
    };

    return {
        startTask,
        socketResponse,
        sendJsonMessage,
        websocketReadyState: readyState
    };
}

export default useWebSocketGuide;