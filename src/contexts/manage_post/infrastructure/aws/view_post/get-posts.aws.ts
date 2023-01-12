// import { GetPost } from "../../../domain/view_post/repository/GetPost.repository";
import { DataStore, Predicates } from 'aws-amplify';
import { GetPostsRepository } from '../../../domain/view_post/repository/get-post.repository';
import { EagerPost, Post } from '../../../../shared/domain/models';

export class GetPosts_AWS implements GetPostsRepository {

    constructor() { }

    async run(): Promise<EagerPost[]> {
        const posts = await DataStore.query(
            Post,
            Predicates.ALL,
            {
                sort: post => post.title("ASCENDING")
            }
        );
        return posts;
    }
}
