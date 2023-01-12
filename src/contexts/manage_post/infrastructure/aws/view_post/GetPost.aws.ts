// import { GetPost } from "../../../domain/view_post/repository/GetPost.repository";
import { DataStore, Predicates } from 'aws-amplify';
import { GetPostsRepository } from '../../../domain/view_post/repository/GetPost.repository';
import { EagerPost, Post } from '../../../../shared/domain/models/';

export class GetPostAWS implements GetPostsRepository {

    constructor() { }

    async getPosts(): Promise<EagerPost[]> {
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
