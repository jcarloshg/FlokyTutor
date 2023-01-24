import { Injectable } from '@angular/core';
import { InMemoryAsyncEventBus } from 'src/contexts/shared/infrastructure/event_bus/in_memory/in-memory-async-event-bus';
// view_publications
import { GetPostsService } from '../nominal_cases/view-publications/service/get-posts-service.service';
import { RecallGetPostsSubscriber } from 'src/contexts/manage_post/application/create_post/domain-event-subscriber.recall-get-post.on-create-post';
import { CustomToastService } from 'src/app/shared/services/custom-toast.service';
import { LaunchToastToSuccessCreatedPost } from '../../../contexts/manage_post/application/create_post/domain-event-subscriber.notify.on-create-post';
import { RecallGetCommentsSubscriber } from '../../../contexts/manage_post/application/view_post/domain-event-subscriber.comment-registered';
import { GetCommentsFromPostByIDService } from '../nominal_cases/view-publications/service/get-comments-from-post-by-ID.service';

@Injectable({
    providedIn: 'root'
})
export class ManagePostsEventBusService {

    private _inMemoryAsyncEventBus = new InMemoryAsyncEventBus();
    public get inMemoryAsyncEventBus() { return this._inMemoryAsyncEventBus; }

    constructor(
        getPostsService: GetPostsService,
        customToastService: CustomToastService,
        getCommentsFromPostByIDService: GetCommentsFromPostByIDService,
    ) {

        this.inMemoryAsyncEventBus.addSubscribers(
            [
                // create publication
                new LaunchToastToSuccessCreatedPost(customToastService),
                new RecallGetPostsSubscriber(getPostsService),
                // view publication
                new RecallGetCommentsSubscriber(getCommentsFromPostByIDService),
            ]
        );

    }

}