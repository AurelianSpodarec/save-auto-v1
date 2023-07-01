export let configApp = {
    name: "AutoSite",
    url: "autosite.ai",
    http: "https://",
    websocket: "wss://",
    queryURLs: { //TODO: Rethink
        blogs: "/blogs"
    }
}

if (import.meta.env.VITE_ENVIRONMENT === "live") {
    configApp["url"] = "autosite.ai";
	configApp["http"] = "https://";
	configApp["websocket"] = "wss://";
} else if (import.meta.env.VITE_ENVIRONMENT === "staging") {
	configApp["url"] = "staging.autosite.ai";
	configApp["http"] = "https://";
	configApp["websocket"] = "wss://";
} else if (import.meta.env.VITE_ENVIRONMENT === "localhost" || import.meta.env.VITE_ENVIRONMENT === undefined) {
	configApp["url"] = "localhost";
	configApp["http"] = "http://";
	configApp["websocket"] = "ws://";
}
