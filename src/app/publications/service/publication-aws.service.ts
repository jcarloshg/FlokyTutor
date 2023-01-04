import { Injectable } from '@angular/core';
import { ManagePost, PostResponse } from 'src/domain/useCases/managePost.useCase.interface';
import { Loading } from '../../shared/services/loading';

@Injectable({
  providedIn: 'root'
})
export class PublicationAWSService extends Loading implements ManagePost {

  constructor() {
    super();
  }

  createPost(): Promise<PostResponse> {
    throw new Error('Method not implemented.');
  }
}
