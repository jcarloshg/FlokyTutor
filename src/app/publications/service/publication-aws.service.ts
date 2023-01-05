import { Injectable } from '@angular/core';
import { DataStore } from 'aws-amplify';
import { InputCreatePost, ManagePost, PostResponse } from 'src/domain/useCases/managePost.useCase.interface';
import { Loading } from '../../shared/services/loading';
import { Post } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class PublicationAWSService extends Loading implements ManagePost {

  constructor() {
    super();
  }

  public async createPost(inputCreatePost: InputCreatePost): Promise<PostResponse> {

    this.isLoading = true;

    const postCreated = await DataStore.save(
      new Post({
        title: inputCreatePost.title,
        body: inputCreatePost.body,
        tutorAccountID: inputCreatePost.tutorAccountID,
      })
    );

    this.isLoading = false;
    return { isOk: true, data: postCreated };

  }

}
