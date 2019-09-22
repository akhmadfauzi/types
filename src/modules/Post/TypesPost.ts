import { ConnectedRouterProps } from "connected-react-router";

export interface Post {
    id: number;
    image: string;
    message: string;
    createdAt: Date;
    tags: Record<string, { title: string }>;
}

export interface PostListResponse {
    data: Post[];
    limit: number;
    page: number;
    total: number;
}

export interface Author {
    firstName: string;
    id: number;
    image: string;
    lastName: string;
    nameTitle: string;
}

export interface PostProps extends Partial<ConnectedRouterProps> {
    data: Post[];
    postListFetch(): void;
}

export interface PostState {

}

