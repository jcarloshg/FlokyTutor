import { Injectable } from '@angular/core';
import { InMemoryAsyncEventBus } from 'src/contexts/shared/infrastructure/event_bus/in_memory/in-memory-async-event-bus';
// view_publications
import { GetPostsService } from '../nominal_cases/view-publications/service/get-posts-service.service';
import { RecallGetPostsSubscriber } from 'src/contexts/manage_post/application/create_post/domain-event-subscriber.recall-get-post.on-create-post';
import { CustomToastService } from 'src/app/shared/services/custom-toast.service';
import { LaunchToastToSuccessCreatedPost } from '../../../contexts/manage_post/application/create_post/domain-event-subscriber.notify.on-create-post';

@Injectable({
    providedIn: 'root'
})
export class ManagePostsEventBusService {

    public inMemoryAsyncEventBus = new InMemoryAsyncEventBus();

    constructor(
        getPostsService: GetPostsService,
        customToastService: CustomToastService,
    ) {

        this.inMemoryAsyncEventBus.addSubscribers(
            [
                // new NotifyOnCreatePost(new PrintConsole()),
                new LaunchToastToSuccessCreatedPost(customToastService),
                new RecallGetPostsSubscriber(getPostsService),
            ]
        );

    }

}