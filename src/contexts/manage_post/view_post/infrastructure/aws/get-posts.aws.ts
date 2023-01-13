// import { GetPost } from "../../../domain/view_post/repository/GetPost.repository";
import { DataStore, Predicates } from 'aws-amplify';
import { GetPostsRepository } from '../../domain/get-post.repository';
import { Post } from 'src/contexts/shared/domain/models';

export class GetPosts_AWS implements GetPostsRepository {

    constructor() { }

    async run(): Promise<Post[]> {
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
