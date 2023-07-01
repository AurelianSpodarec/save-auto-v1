export type ITaskID =
    | "persona"
    | "profile_picture"
    | "logo"
    | "find_domain"
    | "register_domain"
    | "setup_wordpress"
    | "writing_list";

export type ITaskStatus = "started" | "update" | "failed" | "completed";
  
export interface ITaskExtra {
    author_name?: string;
    persona?: string;
    title?: string;
    image_url?: string;
}

export interface ITask {
    task: ITaskID;
    status?: ITaskStatus;
    extra: ITaskExtra | null | [];
}
