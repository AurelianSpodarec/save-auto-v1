// ============================================================
// API Blog
// ============================================================
import { BlogSite, BlogSiteCreate } from "interfaces/Blog"
import FetchAutosite from "../fetch/FetchAutosite"
  
  
export async function getBlogList(): Promise<BlogSite[]> {
    return FetchAutosite(`blog/blog/`, "GET")
}

export async function getBlogSite(id:number): Promise<BlogSite> {
    return FetchAutosite(`blog/blog/${id}/`, "GET")
}

export async function createBlogSite(data:BlogSiteCreate): Promise<BlogSite> {
    return FetchAutosite(`blog/blog/`, "POST", data)
}

export async function updateBlogSite({ id, data }:{ id: number, data: {} }): Promise<BlogSite> {
    return FetchAutosite(`blog/blog/${id}/`, "PUT", data)
}

export async function getBlogPosts(id:number): Promise<BlogSite> {
    return FetchAutosite(`blog/page/?blog=${id}`, "GET")
}

// Sub Items
// ============================================================

export async function getBlogTemplateList(): Promise<[]> {
    return FetchAutosite(`blog/template/`, "GET")
}
