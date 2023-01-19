// import { CreatePostRepository, InputCreatePost } from "../domain/create-post.repository";
// import { MethodCreateAPostRepository } from '../domain/method-create-a-post.repository';
// import { GetCurrentTutorLoggedRepository } from "src/contexts/authenticate/domain/repository/get-current-tutor-logged.repository";
// import { Account, EagerAccount, EagerPost, Post } from "src/contexts/shared/domain/models";

import { CreatePostRepository, InputCreatePost } from '../domain/domain_create_post/create-post.repository';
import { MethodCreateAPostRepository } from "../domain/domain_create_post/method-create-a-post.repository";
import { GetCurrentTutorLoggedRepository } from "src/contexts/authenticate/domain/repository/get-current-tutor-logged.repository";
import { Post as PostDomain } from "../domain/Post";
import { Account, EagerAccount, EagerPost, Post } from "src/contexts/shared/domain/models";

export class CreatePost implements CreatePostRepository {

    constructor(
        private methodCreateAPostRepository: MethodCreateAPostRepository,
        private getCurrentTutorLoggedRepository: GetCurrentTutorLoggedRepository,
    ) { }

    public async createPost(inputCreatePost: InputCreatePost): Promise<Post | null> {
        const postCreated: Post | null = await this.methodCreateAPostRepository.run(inputCreatePost);
        const pepe = PostDomain.createPost(postCreated);
        return postCreated;
    }

    public async getCurrentTutorLogged(): Promise<EagerAccount | null> {
        const account: Account | null = await this.getCurrentTutorLoggedRepository.run();
        return account;
    }

}