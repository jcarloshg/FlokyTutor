import { Injectable } from '@angular/core';
import { DataStore, Predicates } from 'aws-amplify';
import { InputCreatePost, InputSearchPosts, ManagePost, PostResponse } from 'src/domain/useCases/managePost.useCase.interface';
import { Loading } from '../../shared/services/loading';
import { ActivityType, EagerPost, Post } from 'src/models';

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

    const getCategory = (category: "WRITING" | "READING" | "TALKING" | "LISTENING"): ActivityType => {
      if (category == ActivityType.LISTENING) return ActivityType.LISTENING;
      if (category == ActivityType.READING) return ActivityType.READING;
      if (category == ActivityType.TALKING) return ActivityType.TALKING;
      if (category == ActivityType.WRITING) return ActivityType.WRITING;
      return ActivityType.LISTENING;
    }

    try {
      const newPost = new Post({
        title: inputCreatePost.title,
        body: inputCreatePost.body,
        category: getCategory(inputCreatePost.category),
        tutorAccountID: inputCreatePost.tutorAccountID,
      });
      const postCreated = await DataStore.save(newPost);
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
