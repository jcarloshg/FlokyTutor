import { InputCreatePost } from '../domain/domain_create_post/create-post.repository';
// events
import { AggregateRoot } from 'src/contexts/shared/domain/aggregate-root';
import { CreatePostDomainEvent } from './domain_create_post/create-post.domain-event';
// models
import { Post as PostAWS } from 'src/contexts/shared/domain/models';

export class Post extends AggregateRoot {

    constructor() {
        super();
    }

    static createPost(postCreatedAWS: PostAWS | null): Post {

        const postCreated = new Post();

        const wasCreatePost = postCreatedAWS !== null;

        wasCreatePost
            ? postCreated.record(new CreatePostDomainEvent({}))
            : null;

        return postCreated;
    };


}