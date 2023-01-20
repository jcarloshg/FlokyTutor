import { DataStore, Predicates } from 'aws-amplify';
import { Post } from 'src/contexts/shared/domain/models';
import { GetPostsRepository } from '../../domain/domain_view_post/get-post.repository';

export class GetPosts_AWS implements GetPostsRepository {

    constructor() { }

    async run(): Promise<Post[]> {
        const posts = await DataStore.query(
            Post,
            Predicates.ALL,
            {
                sort: post => post.createdAt("DESCENDING")
            }
        );
        return posts;
    }
}
