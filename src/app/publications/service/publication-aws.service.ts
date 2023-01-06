import { Injectable } from '@angular/core';
import { DataStore, Predicates } from 'aws-amplify';
import { InputCreatePost, InputSearchPosts, ManagePost, PostResponse } from 'src/domain/useCases/managePost.useCase.interface';
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

    try {
      const postCreated = await DataStore.save(
        new Post({
          title: inputCreatePost.title,
          body: inputCreatePost.body,
          tutorAccountID: inputCreatePost.tutorAccountID,
        })
      );
      this.isLoading = false;
      return {
        isOk: true,
        data: postCreated,
        message: `La publicación "${inputCreatePost.title}" se a creado con éxito!`
      };
    } catch (error) {
      this.isLoading = true;
      return { isOk: true, message: "Ocurrió un error. Inténtalo mas tarde." };
    }
  }


  public async searchPosts(inputSearchPosts: InputSearchPosts): Promise<PostResponse> {
    try {
      const posts = DataStore.query(
        Post,
        Predicates.ALL,
        {
          sort: post => post.title("ASCENDING")
        });
      const response: PostResponse = { isOk: true, data: posts };
      return response;
    } catch (error) {
      return { isOk: false }
    }
  }

}
