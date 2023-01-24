import { AggregateRoot } from '../../shared/domain/aggregate-root';
import { CreateCommentDomainEvent } from './domain_view_post/domain-event.create-comment';
import { Comment as Comment_AWS } from 'src/contexts/shared/domain/models';
import { CommentNotCreatedDomainEvent } from './domain_view_post/domain-event.comment-not-created';
import { InputCommentPost } from './domain_view_post/comment-post.input';

export class Comment extends AggregateRoot {

    constructor() {
        super();
    }

    static commentRegistered(createdComment: Comment_AWS): Comment {
        const commentRegistered: Comment = new Comment();
        commentRegistered.record(new CreateCommentDomainEvent({ attributes: createdComment }));
        return commentRegistered;
    }

    static commentNotRegistered(inputCommentPost: InputCommentPost): Comment {
        const commentRegistered: Comment = new Comment();
        commentRegistered.record(new CommentNotCreatedDomainEvent({ attributes: inputCommentPost }));
        return commentRegistered;
    }

}