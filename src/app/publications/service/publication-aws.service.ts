import { Injectable } from '@angular/core';
import { InputCreatePost, ManagePost, PostResponse } from 'src/domain/useCases/managePost.useCase.interface';
import { Loading } from '../../shared/services/loading';

@Injectable({
  providedIn: 'root'
})
export class PublicationAWSService extends Loading implements ManagePost {

  constructor() {
    super();
  }

  public async createPost(inputCreatePost: InputCreatePost): Promise<PostResponse> {
    this.isLoading = true;
    await console.log(inputCreatePost);
    this.isLoading = false;
    return { isOk: true }
  }

}
