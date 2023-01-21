import { CreatePostRepository, InputCreatePost } from '../../domain/create_post/create-post.repository';
import { MethodCreateAPostRepository } from "../../domain/create_post/repository.method-create-a-post";
import { GetCurrentTutorLoggedRepository } from "src/contexts/authenticate/domain/repository/get-current-tutor-logged.repository";
import { Post as PostDomain } from "../../domain/Post";
import { Account, EagerAccount, Post } from "src/contexts/shared/domain/models";
import { EventBus } from 'src/contexts/shared/domain/event-bus';

export class CreatePost implements CreatePostRepository {

    private methodCreateAPostRepository: MethodCreateAPostRepository;
    private getCurrentTutorLoggedRepository: GetCurrentTutorLoggedRepository;
    private eventBus: EventBus;

    constructor(params: {
        methodCreateAPostRepository: MethodCreateAPostRepository,
        getCurrentTutorLoggedRepository: GetCurrentTutorLoggedRepository,
        eventBus: EventBus;
    }) {
        this.methodCreateAPostRepository = params.methodCreateAPostRepository;
        this.getCurrentTutorLoggedRepository = params.getCurrentTutorLoggedRepository;
        this.eventBus = params.eventBus;
    }

    public async createPost(inputCreatePost: InputCreatePost): Promise<Post | null> {

        const postCreated: Post | null = await this.methodCreateAPostRepository.run(inputCreatePost);

        const postDomain: PostDomain = postCreated
            ? PostDomain.createPost(postCreated)
            : PostDomain.errorToCreatePost(inputCreatePost);

        await this.eventBus.publish(postDomain.pullDomainEvents());

        return postCreated;
    }

    public async getCurrentTutorLogged(): Promise<EagerAccount | null> {
        const account: Account | null = await this.getCurrentTutorLoggedRepository.run();
        return account;
    }

}