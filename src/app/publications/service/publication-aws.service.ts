import { Injectable } from '@angular/core';
import { DataStore, Predicates } from 'aws-amplify';
import { InputCreatePost, InputSearchPosts, ManagePost, PostResponse } from 'src/domain/useCases/managePost.useCase.interface';
import { Loading } from '../../shared/services/loading';
import { ActivityLevel, EagerPost, Post } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class PublicationAWSService extends Loading implements ManagePost {

  constructor() {
    super();
  }

  async getPostByID(id: string): Promise<EagerPost | null> {
    const post = await DataStore.query<Post>(Post, id);
    return post as Post || null;
  }

  public async createPost(inputCreatePost: InputCreatePost): Promise<PostResponse> {

    this.isLoading = true;

    try {
      const postCreated = await DataStore.save(
        new Post({
          title: inputCreatePost.title,
          body: inputCreatePost.body,
          category: ActivityLevel.A1,
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
      const posts = await DataStore.query(
        Post,
        Predicates.ALL,
        {
          sort: post => post.title("ASCENDING")
        });
      return { isOk: true, data: posts };
    } catch (error) {
      return { isOk: false }
    }
  }

}
