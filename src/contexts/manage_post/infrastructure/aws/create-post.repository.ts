import { DataStore } from 'aws-amplify';
import { ActivityType, Post } from 'src/contexts/shared/domain/models';
import { MethodCreateAPostRepository } from '../../domain/create_post/repository.method-create-a-post';
import { InputCreatePost } from '../../domain/create_post/create-post.repository';

export class CreatePost_AWS implements MethodCreateAPostRepository {


    public async run(inputCreatePost: InputCreatePost): Promise<Post | null> {
        const getCategory = (category: "WRITING" | "READING" | "TALKING" | "LISTENING"): ActivityType => {
            if (category == ActivityType.LISTENING) return ActivityType.LISTENING;
            if (category == ActivityType.READING) return ActivityType.READING;
            if (category == ActivityType.TALKING) return ActivityType.TALKING;
            if (category == ActivityType.WRITING) return ActivityType.WRITING;
            return ActivityType.LISTENING;
        }
        try {
            const newPost = new Post(
                {
                    title: inputCreatePost.title,
                    body: inputCreatePost.body,
                    category: getCategory(inputCreatePost.category),
                    tutorAccountID: inputCreatePost.tutorAccountID,
                }
            );
            const postCreated: Post = await DataStore.save(newPost);
            return postCreated ?? null;
        } catch (error) {
            return null;
        }
    }


}