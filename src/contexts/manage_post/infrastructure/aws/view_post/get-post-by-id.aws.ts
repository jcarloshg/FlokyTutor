import { DataStore } from "aws-amplify";
import { GetPostByIDRepository } from '../../../domain/view_post/repository/get-post-by-id.repository';
import { EagerPost, Post } from '../../../../shared/domain/models';

export class GetPostByID_AWS implements GetPostByIDRepository {

    constructor() { }

    async run(ID: string): Promise<EagerPost | null> {
        const post = await DataStore.query<Post>(Post, ID);
        return post as Post || null;
    }

}

