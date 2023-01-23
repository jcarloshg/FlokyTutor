import { Injectable } from '@angular/core';
import { GetPostByIDRepository } from 'src/contexts/manage_post/domain/domain_view_post/get-post-by-id.repository';
import { GetPostByID_AWS } from 'src/contexts/manage_post/infrastructure/aws/get-post-by-id.aws';
import { Post } from 'src/contexts/shared/domain/models';

@Injectable({
    providedIn: 'root'
})
export class GetPostByIDService implements GetPostByIDRepository {

    constructor() { }

    public async run(ID: string): Promise<Post | null> {
        const post: Post | null = await new GetPostByID_AWS().run(ID);
        return post;
    }
}