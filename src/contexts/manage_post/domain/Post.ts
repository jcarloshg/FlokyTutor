// events
import { AggregateRoot } from 'src/contexts/shared/domain/aggregate-root';
// events
import { CreatePostDomainEvent } from './create_post/domain-event.create-post';
import { NotCreatedPostDomainEvent } from './create_post/domain-event.not-created-post';
// models
import { Post as PostAWS } from 'src/contexts/shared/domain/models';
import { InputCreatePost } from './create_post/create-post.repository';

export class Post extends AggregateRoot {

    constructor() {
        super();
    }

    static createPost(postCreatedAWS: PostAWS): Post {
        const postCreated = new Post();
        postCreated.record(new CreatePostDomainEvent({ attributes: postCreatedAWS }));
        // postCreated.record(new CreatePostDomainEvent({ attributes: postCreatedAWS }));
        return postCreated;
    };

    static errorToCreatePost(inputCreatePost: InputCreatePost): Post {
        const errorToCreatePost = new Post();
        errorToCreatePost.record(new NotCreatedPostDomainEvent({ attributes: inputCreatePost }))
        return errorToCreatePost;
    };


}