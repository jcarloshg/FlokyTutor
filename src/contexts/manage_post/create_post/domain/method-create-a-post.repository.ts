import { InputCreatePost } from "./create-post.repository";
import { Post } from "src/contexts/shared/domain/models";

export interface MethodCreateAPostRepository {
    run(inputCreatePost: InputCreatePost): Promise<Post | null>;
}