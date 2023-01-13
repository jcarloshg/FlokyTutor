import { DataStore } from "aws-amplify";
import { GetPostByIDRepository } from "../../domain/get-post-by-id.repository";
import { Post } from "src/contexts/shared/domain/models";

export class GetPostByID_AWS implements GetPostByIDRepository {

    constructor() { }

    async run(ID: string): Promise<Post | null> {
        const post = await DataStore.query<Post>(Post, ID);
        return post as Post || null;
    }

}

