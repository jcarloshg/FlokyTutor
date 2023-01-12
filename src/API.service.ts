/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateAccount: OnCreateAccountSubscription;
  onUpdateAccount: OnUpdateAccountSubscription;
  onDeleteAccount: OnDeleteAccountSubscription;
  onCreatePost: OnCreatePostSubscription;
  onUpdatePost: OnUpdatePostSubscription;
  onDeletePost: OnDeletePostSubscription;
  onCreateActivity: OnCreateActivitySubscription;
  onUpdateActivity: OnUpdateActivitySubscription;
  onDeleteActivity: OnDeleteActivitySubscription;
  onCreateActivitiesProgress: OnCreateActivitiesProgressSubscription;
  onUpdateActivitiesProgress: OnUpdateActivitiesProgressSubscription;
  onDeleteActivitiesProgress: OnDeleteActivitiesProgressSubscription;
  onCreateTopic: OnCreateTopicSubscription;
  onUpdateTopic: OnUpdateTopicSubscription;
  onDeleteTopic: OnDeleteTopicSubscription;
};

export type CreateAccountInput = {
  id?: string | null;
  fullName: string;
  email: string;
  collegeEnrollment: string;
  collegeName: string;
  role: Role;
  _version?: number | null;
};

export enum Role {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  ADMIN = "ADMIN"
}

export type ModelAccountConditionInput = {
  fullName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  collegeEnrollment?: ModelStringInput | null;
  collegeName?: ModelStringInput | null;
  role?: ModelRoleInput | null;
  and?: Array<ModelAccountConditionInput | null> | null;
  or?: Array<ModelAccountConditionInput | null> | null;
  not?: ModelAccountConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelRoleInput = {
  eq?: Role | null;
  ne?: Role | null;
};

export type Account = {
  __typename: "Account";
  id: string;
  fullName: string;
  email: string;
  collegeEnrollment: string;
  collegeName: string;
  role: Role;
  posts?: ModelPostConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items: Array<Post | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Post = {
  __typename: "Post";
  id: string;
  title: string;
  body: string;
  tutorAccountID: string;
  category: ActivityType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export enum ActivityType {
  WRITING = "WRITING",
  READING = "READING",
  TALKING = "TALKING",
  LISTENING = "LISTENING"
}

export type UpdateAccountInput = {
  id: string;
  fullName?: string | null;
  email?: string | null;
  collegeEnrollment?: string | null;
  collegeName?: string | null;
  role?: Role | null;
  _version?: number | null;
};

export type DeleteAccountInput = {
  id: string;
  _version?: number | null;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  body: string;
  tutorAccountID: string;
  category: ActivityType;
  _version?: number | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  body?: ModelStringInput | null;
  tutorAccountID?: ModelIDInput | null;
  category?: ModelActivityTypeInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelActivityTypeInput = {
  eq?: ActivityType | null;
  ne?: ActivityType | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  body?: string | null;
  tutorAccountID?: string | null;
  category?: ActivityType | null;
  _version?: number | null;
};

export type DeletePostInput = {
  id: string;
  _version?: number | null;
};

export type CreateActivityInput = {
  id?: string | null;
  name: string;
  activityLevel: ActivityLevel;
  activityType?: ActivityType | null;
  question: string;
  questionBody: string;
  answers?: AnswerInput | null;
  _version?: number | null;
  activityTopicId?: string | null;
};

export enum ActivityLevel {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2",
  PRUEBA_DROP_THIS = "PRUEBA_DROP_THIS"
}

export type AnswerInput = {
  correct: string;
  incorrect_1?: string | null;
  incorrect_2?: string | null;
  incorrect_3?: string | null;
};

export type ModelActivityConditionInput = {
  name?: ModelStringInput | null;
  activityLevel?: ModelActivityLevelInput | null;
  activityType?: ModelActivityTypeInput | null;
  question?: ModelStringInput | null;
  questionBody?: ModelStringInput | null;
  and?: Array<ModelActivityConditionInput | null> | null;
  or?: Array<ModelActivityConditionInput | null> | null;
  not?: ModelActivityConditionInput | null;
  activityTopicId?: ModelIDInput | null;
};

export type ModelActivityLevelInput = {
  eq?: ActivityLevel | null;
  ne?: ActivityLevel | null;
};

export type Activity = {
  __typename: "Activity";
  id: string;
  name: string;
  activityLevel: ActivityLevel;
  activityType?: ActivityType | null;
  question: string;
  questionBody: string;
  answers?: Answer | null;
  Topic?: Topic | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  activityTopicId?: string | null;
};

export type Answer = {
  __typename: "Answer";
  correct: string;
  incorrect_1?: string | null;
  incorrect_2?: string | null;
  incorrect_3?: string | null;
};

export type Topic = {
  __typename: "Topic";
  id: string;
  name: string;
  conceptInformation?: Array<string | null> | null;
  examples?: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateActivityInput = {
  id: string;
  name?: string | null;
  activityLevel?: ActivityLevel | null;
  activityType?: ActivityType | null;
  question?: string | null;
  questionBody?: string | null;
  answers?: AnswerInput | null;
  _version?: number | null;
  activityTopicId?: string | null;
};

export type DeleteActivityInput = {
  id: string;
  _version?: number | null;
};

export type CreateActivitiesProgressInput = {
  id?: string | null;
  correctReading?: number | null;
  wrongReading?: number | null;
  correctWriting?: number | null;
  wrongWriting?: number | null;
  correctSpeaking?: number | null;
  wrongSpeaking?: number | null;
  correctListening?: number | null;
  wrongListening?: number | null;
  _version?: number | null;
};

export type ModelActivitiesProgressConditionInput = {
  correctReading?: ModelIntInput | null;
  wrongReading?: ModelIntInput | null;
  correctWriting?: ModelIntInput | null;
  wrongWriting?: ModelIntInput | null;
  correctSpeaking?: ModelIntInput | null;
  wrongSpeaking?: ModelIntInput | null;
  correctListening?: ModelIntInput | null;
  wrongListening?: ModelIntInput | null;
  and?: Array<ModelActivitiesProgressConditionInput | null> | null;
  or?: Array<ModelActivitiesProgressConditionInput | null> | null;
  not?: ModelActivitiesProgressConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ActivitiesProgress = {
  __typename: "ActivitiesProgress";
  id: string;
  correctReading?: number | null;
  wrongReading?: number | null;
  correctWriting?: number | null;
  wrongWriting?: number | null;
  correctSpeaking?: number | null;
  wrongSpeaking?: number | null;
  correctListening?: number | null;
  wrongListening?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateActivitiesProgressInput = {
  id: string;
  correctReading?: number | null;
  wrongReading?: number | null;
  correctWriting?: number | null;
  wrongWriting?: number | null;
  correctSpeaking?: number | null;
  wrongSpeaking?: number | null;
  correctListening?: number | null;
  wrongListening?: number | null;
  _version?: number | null;
};

export type DeleteActivitiesProgressInput = {
  id: string;
  _version?: number | null;
};

export type CreateTopicInput = {
  id?: string | null;
  name: string;
  conceptInformation?: Array<string | null> | null;
  examples?: Array<string> | null;
  _version?: number | null;
};

export type ModelTopicConditionInput = {
  name?: ModelStringInput | null;
  conceptInformation?: ModelStringInput | null;
  examples?: ModelStringInput | null;
  and?: Array<ModelTopicConditionInput | null> | null;
  or?: Array<ModelTopicConditionInput | null> | null;
  not?: ModelTopicConditionInput | null;
};

export type UpdateTopicInput = {
  id: string;
  name?: string | null;
  conceptInformation?: Array<string | null> | null;
  examples?: Array<string> | null;
  _version?: number | null;
};

export type DeleteTopicInput = {
  id: string;
  _version?: number | null;
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null;
  fullName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  collegeEnrollment?: ModelStringInput | null;
  collegeName?: ModelStringInput | null;
  role?: ModelRoleInput | null;
  and?: Array<ModelAccountFilterInput | null> | null;
  or?: Array<ModelAccountFilterInput | null> | null;
  not?: ModelAccountFilterInput | null;
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection";
  items: Array<Account | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  body?: ModelStringInput | null;
  tutorAccountID?: ModelIDInput | null;
  category?: ModelActivityTypeInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  activityLevel?: ModelActivityLevelInput | null;
  activityType?: ModelActivityTypeInput | null;
  question?: ModelStringInput | null;
  questionBody?: ModelStringInput | null;
  and?: Array<ModelActivityFilterInput | null> | null;
  or?: Array<ModelActivityFilterInput | null> | null;
  not?: ModelActivityFilterInput | null;
  activityTopicId?: ModelIDInput | null;
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection";
  items: Array<Activity | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelActivitiesProgressFilterInput = {
  id?: ModelIDInput | null;
  correctReading?: ModelIntInput | null;
  wrongReading?: ModelIntInput | null;
  correctWriting?: ModelIntInput | null;
  wrongWriting?: ModelIntInput | null;
  correctSpeaking?: ModelIntInput | null;
  wrongSpeaking?: ModelIntInput | null;
  correctListening?: ModelIntInput | null;
  wrongListening?: ModelIntInput | null;
  and?: Array<ModelActivitiesProgressFilterInput | null> | null;
  or?: Array<ModelActivitiesProgressFilterInput | null> | null;
  not?: ModelActivitiesProgressFilterInput | null;
};

export type ModelActivitiesProgressConnection = {
  __typename: "ModelActivitiesProgressConnection";
  items: Array<ActivitiesProgress | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  conceptInformation?: ModelStringInput | null;
  examples?: ModelStringInput | null;
  and?: Array<ModelTopicFilterInput | null> | null;
  or?: Array<ModelTopicFilterInput | null> | null;
  not?: ModelTopicFilterInput | null;
};

export type ModelTopicConnection = {
  __typename: "ModelTopicConnection";
  items: Array<Topic | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  fullName?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  collegeEnrollment?: ModelSubscriptionStringInput | null;
  collegeName?: ModelSubscriptionStringInput | null;
  role?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAccountFilterInput | null> | null;
  or?: Array<ModelSubscriptionAccountFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  body?: ModelSubscriptionStringInput | null;
  tutorAccountID?: ModelSubscriptionIDInput | null;
  category?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPostFilterInput | null> | null;
  or?: Array<ModelSubscriptionPostFilterInput | null> | null;
};

export type ModelSubscriptionActivityFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  activityLevel?: ModelSubscriptionStringInput | null;
  activityType?: ModelSubscriptionStringInput | null;
  question?: ModelSubscriptionStringInput | null;
  questionBody?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionActivityFilterInput | null> | null;
  or?: Array<ModelSubscriptionActivityFilterInput | null> | null;
};

export type ModelSubscriptionActivitiesProgressFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  correctReading?: ModelSubscriptionIntInput | null;
  wrongReading?: ModelSubscriptionIntInput | null;
  correctWriting?: ModelSubscriptionIntInput | null;
  wrongWriting?: ModelSubscriptionIntInput | null;
  correctSpeaking?: ModelSubscriptionIntInput | null;
  wrongSpeaking?: ModelSubscriptionIntInput | null;
  correctListening?: ModelSubscriptionIntInput | null;
  wrongListening?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionActivitiesProgressFilterInput | null> | null;
  or?: Array<ModelSubscriptionActivitiesProgressFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  conceptInformation?: ModelSubscriptionStringInput | null;
  examples?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTopicFilterInput | null> | null;
  or?: Array<ModelSubscriptionTopicFilterInput | null> | null;
};

export type CreateAccountMutation = {
  __typename: "Account";
  id: string;
  fullName: string;
  email: string;
  collegeEnrollment: string;
  collegeName: string;
  role: Role;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      body: string;
      tutorAccountID: string;
      category: ActivityType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateAccountMutation = {
  __typename: "Account";
  id: string;
  fullName: string;
  email: string;
  collegeEnrollment: string;
  collegeName: string;
  role: Role;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      body: string;
      tutorAccountID: string;
      category: ActivityType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteAccountMutation = {
  __typename: "Account";
  id: string;
  fullName: string;
  email: string;
  collegeEnrollment: string;
  collegeName: string;
  role: Role;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      body: string;
      tutorAccountID: string;
      category: ActivityType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  body: string;
  tutorAccountID: string;
  category: ActivityType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  body: string;
  tutorAccountID: string;
  category: ActivityType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  body: string;
  tutorAccountID: string;
  category: ActivityType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateActivityMutation = {
  __typename: "Activity";
  id: string;
  name: string;
  activityLevel: ActivityLevel;
  activityType?: ActivityType | null;
  question: string;
  questionBody: string;
  answers?: {
    __typename: "Answer";
    correct: string;
    incorrect_1?: string | null;
    incorrect_2?: string | null;
    incorrect_3?: string | null;
  } | null;
  Topic?: {
    __typename: "Topic";
    id: string;
    name: string;
    conceptInformation?: Array<string | null> | null;
    examples?: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  activityTopicId?: string | null;
};

export type UpdateActivityMutation = {
  __typename: "Activity";
  id: string;
  name: string;
  activityLevel: ActivityLevel;
  activityType?: ActivityType | null;
  question: string;
  questionBody: string;
  answers?: {
    __typename: "Answer";
    correct: string;
    incorrect_1?: string | null;
    incorrect_2?: string | null;
    incorrect_3?: string | null;
  } | null;
  Topic?: {
    __typename: "Topic";
    id: string;
    name: string;
    conceptInformation?: Array<string | null> | null;
    examples?: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  activityTopicId?: string | null;
};

export type DeleteActivityMutation = {
  __typename: "Activity";
  id: string;
  name: string;
  activityLevel: ActivityLevel;
  activityType?: ActivityType | null;
  question: string;
  questionBody: string;
  answers?: {
    __typename: "Answer";
    correct: string;
    incorrect_1?: string | null;
    incorrect_2?: string | null;
    incorrect_3?: string | null;
  } | null;
  Topic?: {
    __typename: "Topic";
    id: string;
    name: string;
    conceptInformation?: Array<string | null> | null;
    examples?: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  activityTopicId?: string | null;
};

export type CreateActivitiesProgressMutation = {
  __typename: "ActivitiesProgress";
  id: string;
  correctReading?: number | null;
  wrongReading?: number | null;
  correctWriting?: number | null;
  wrongWriting?: number | null;
  correctSpeaking?: number | null;
  wrongSpeaking?: number | null;
  correctListening?: number | null;
  wrongListening?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateActivitiesProgressMutation = {
  __typename: "ActivitiesProgress";
  id: string;
  correctReading?: number | null;
  wrongReading?: number | null;
  correctWriting?: number | null;
  wrongWriting?: number | null;
  correctSpeaking?: number | null;
  wrongSpeaking?: number | null;
  correctListening?: number | null;
  wrongListening?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteActivitiesProgressMutation = {
  __typename: "ActivitiesProgress";
  id: string;
  correctReading?: number | null;
  wrongReading?: number | null;
  correctWriting?: number | null;
  wrongWriting?: number | null;
  correctSpeaking?: number | null;
  wrongSpeaking?: number | null;
  correctListening?: number | null;
  wrongListening?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTopicMutation = {
  __typename: "Topic";
  id: string;
  name: string;
  conceptInformation?: Array<string | null> | null;
  examples?: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTopicMutation = {
  __typename: "Topic";
  id: string;
  name: string;
  conceptInformation?: Array<string | null> | null;
  examples?: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTopicMutation = {
  __typename: "Topic";
  id: string;
  name: string;
  conceptInformation?: Array<string | null> | null;
  examples?: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetAccountQuery = {
  __typename: "Account";
  id: string;
  fullName: string;
  email: string;
  collegeEnrollment: string;
  collegeName: string;
  role: Role;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      body: string;
      tutorAccountID: string;
      category: ActivityType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListAccountsQuery = {
  __typename: "ModelAccountConnection";
  items: Array<{
    __typename: "Account";
    id: string;
    fullName: string;
    email: string;
    collegeEnrollment: string;
    collegeName: string;
    role: Role;
    posts?: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        body: string;
        tutorAccountID: string;
        category: ActivityType;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAccountsQuery = {
  __typename: "ModelAccountConnection";
  items: Array<{
    __typename: "Account";
    id: string;
    fullName: string;
    email: string;
    collegeEnrollment: string;
    collegeName: string;
    role: Role;
    posts?: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        body: string;
        tutorAccountID: string;
        category: ActivityType;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  body: string;
  tutorAccountID: string;
  category: ActivityType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    body: string;
    tutorAccountID: string;
    category: ActivityType;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    body: string;
    tutorAccountID: string;
    category: ActivityType;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetActivityQuery = {
  __typename: "Activity";
  id: string;
  name: string;
  activityLevel: ActivityLevel;
  activityType?: ActivityType | null;
  question: string;
  questionBody: string;
  answers?: {
    __typename: "Answer";
    correct: string;
    incorrect_1?: string | null;
    incorrect_2?: string | null;
    incorrect_3?: string | null;
  } | null;
  Topic?: {
    __typename: "Topic";
    id: string;
    name: string;
    conceptInformation?: Array<string | null> | null;
    examples?: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  activityTopicId?: string | null;
};

export type ListActivitiesQuery = {
  __typename: "ModelActivityConnection";
  items: Array<{
    __typename: "Activity";
    id: string;
    name: string;
    activityLevel: ActivityLevel;
    activityType?: ActivityType | null;
    question: string;
    questionBody: string;
    answers?: {
      __typename: "Answer";
      correct: string;
      incorrect_1?: string | null;
      incorrect_2?: string | null;
      incorrect_3?: string | null;
    } | null;
    Topic?: {
      __typename: "Topic";
      id: string;
      name: string;
      conceptInformation?: Array<string | null> | null;
      examples?: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    activityTopicId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncActivitiesQuery = {
  __typename: "ModelActivityConnection";
  items: Array<{
    __typename: "Activity";
    id: string;
    name: string;
    activityLevel: ActivityLevel;
    activityType?: ActivityType | null;
    question: string;
    questionBody: string;
    answers?: {
      __typename: "Answer";
      correct: string;
      incorrect_1?: string | null;
      incorrect_2?: string | null;
      incorrect_3?: string | null;
    } | null;
    Topic?: {
      __typename: "Topic";
      id: string;
      name: string;
      conceptInformation?: Array<string | null> | null;
      examples?: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    activityTopicId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetActivitiesProgressQuery = {
  __typename: "ActivitiesProgress";
  id: string;
  correctReading?: number | null;
  wrongReading?: number | null;
  correctWriting?: number | null;
  wrongWriting?: number | null;
  correctSpeaking?: number | null;
  wrongSpeaking?: number | null;
  correctListening?: number | null;
  wrongListening?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListActivitiesProgressesQuery = {
  __typename: "ModelActivitiesProgressConnection";
  items: Array<{
    __typename: "ActivitiesProgress";
    id: string;
    correctReading?: number | null;
    wrongReading?: number | null;
    correctWriting?: number | null;
    wrongWriting?: number | null;
    correctSpeaking?: number | null;
    wrongSpeaking?: number | null;
    correctListening?: number | null;
    wrongListening?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncActivitiesProgressesQuery = {
  __typename: "ModelActivitiesProgressConnection";
  items: Array<{
    __typename: "ActivitiesProgress";
    id: string;
    correctReading?: number | null;
    wrongReading?: number | null;
    correctWriting?: number | null;
    wrongWriting?: number | null;
    correctSpeaking?: number | null;
    wrongSpeaking?: number | null;
    correctListening?: number | null;
    wrongListening?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTopicQuery = {
  __typename: "Topic";
  id: string;
  name: string;
  conceptInformation?: Array<string | null> | null;
  examples?: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTopicsQuery = {
  __typename: "ModelTopicConnection";
  items: Array<{
    __typename: "Topic";
    id: string;
    name: string;
    conceptInformation?: Array<string | null> | null;
    examples?: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTopicsQuery = {
  __typename: "ModelTopicConnection";
  items: Array<{
    __typename: "Topic";
    id: string;
    name: string;
    conceptInformation?: Array<string | null> | null;
    examples?: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateAccountSubscription = {
  __typename: "Account";
  id: string;
  fullName: string;
  email: string;
  collegeEnrollment: string;
  collegeName: string;
  role: Role;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      body: string;
      tutorAccountID: string;
      category: ActivityType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateAccountSubscription = {
  __typename: "Account";
  id: string;
  fullName: string;
  email: string;
  collegeEnrollment: string;
  collegeName: string;
  role: Role;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      body: string;
      tutorAccountID: string;
      category: ActivityType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteAccountSubscription = {
  __typename: "Account";
  id: string;
  fullName: string;
  email: string;
  collegeEnrollment: string;
  collegeName: string;
  role: Role;
  posts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      body: string;
      tutorAccountID: string;
      category: ActivityType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  body: string;
  tutorAccountID: string;
  category: ActivityType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  body: string;
  tutorAccountID: string;
  category: ActivityType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  body: string;
  tutorAccountID: string;
  category: ActivityType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateActivitySubscription = {
  __typename: "Activity";
  id: string;
  name: string;
  activityLevel: ActivityLevel;
  activityType?: ActivityType | null;
  question: string;
  questionBody: string;
  answers?: {
    __typename: "Answer";
    correct: string;
    incorrect_1?: string | null;
    incorrect_2?: string | null;
    incorrect_3?: string | null;
  } | null;
  Topic?: {
    __typename: "Topic";
    id: string;
    name: string;
    conceptInformation?: Array<string | null> | null;
    examples?: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  activityTopicId?: string | null;
};

export type OnUpdateActivitySubscription = {
  __typename: "Activity";
  id: string;
  name: string;
  activityLevel: ActivityLevel;
  activityType?: ActivityType | null;
  question: string;
  questionBody: string;
  answers?: {
    __typename: "Answer";
    correct: string;
    incorrect_1?: string | null;
    incorrect_2?: string | null;
    incorrect_3?: string | null;
  } | null;
  Topic?: {
    __typename: "Topic";
    id: string;
    name: string;
    conceptInformation?: Array<string | null> | null;
    examples?: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  activityTopicId?: string | null;
};

export type OnDeleteActivitySubscription = {
  __typename: "Activity";
  id: string;
  name: string;
  activityLevel: ActivityLevel;
  activityType?: ActivityType | null;
  question: string;
  questionBody: string;
  answers?: {
    __typename: "Answer";
    correct: string;
    incorrect_1?: string | null;
    incorrect_2?: string | null;
    incorrect_3?: string | null;
  } | null;
  Topic?: {
    __typename: "Topic";
    id: string;
    name: string;
    conceptInformation?: Array<string | null> | null;
    examples?: Array<string> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  activityTopicId?: string | null;
};

export type OnCreateActivitiesProgressSubscription = {
  __typename: "ActivitiesProgress";
  id: string;
  correctReading?: number | null;
  wrongReading?: number | null;
  correctWriting?: number | null;
  wrongWriting?: number | null;
  correctSpeaking?: number | null;
  wrongSpeaking?: number | null;
  correctListening?: number | null;
  wrongListening?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateActivitiesProgressSubscription = {
  __typename: "ActivitiesProgress";
  id: string;
  correctReading?: number | null;
  wrongReading?: number | null;
  correctWriting?: number | null;
  wrongWriting?: number | null;
  correctSpeaking?: number | null;
  wrongSpeaking?: number | null;
  correctListening?: number | null;
  wrongListening?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteActivitiesProgressSubscription = {
  __typename: "ActivitiesProgress";
  id: string;
  correctReading?: number | null;
  wrongReading?: number | null;
  correctWriting?: number | null;
  wrongWriting?: number | null;
  correctSpeaking?: number | null;
  wrongSpeaking?: number | null;
  correctListening?: number | null;
  wrongListening?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTopicSubscription = {
  __typename: "Topic";
  id: string;
  name: string;
  conceptInformation?: Array<string | null> | null;
  examples?: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTopicSubscription = {
  __typename: "Topic";
  id: string;
  name: string;
  conceptInformation?: Array<string | null> | null;
  examples?: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTopicSubscription = {
  __typename: "Topic";
  id: string;
  name: string;
  conceptInformation?: Array<string | null> | null;
  examples?: Array<string> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAccount(
    input: CreateAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<CreateAccountMutation> {
    const statement = `mutation CreateAccount($input: CreateAccountInput!, $condition: ModelAccountConditionInput) {
        createAccount(input: $input, condition: $condition) {
          __typename
          id
          fullName
          email
          collegeEnrollment
          collegeName
          role
          posts {
            __typename
            items {
              __typename
              id
              title
              body
              tutorAccountID
              category
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAccountMutation>response.data.createAccount;
  }
  async UpdateAccount(
    input: UpdateAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<UpdateAccountMutation> {
    const statement = `mutation UpdateAccount($input: UpdateAccountInput!, $condition: ModelAccountConditionInput) {
        updateAccount(input: $input, condition: $condition) {
          __typename
          id
          fullName
          email
          collegeEnrollment
          collegeName
          role
          posts {
            __typename
            items {
              __typename
              id
              title
              body
              tutorAccountID
              category
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAccountMutation>response.data.updateAccount;
  }
  async DeleteAccount(
    input: DeleteAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<DeleteAccountMutation> {
    const statement = `mutation DeleteAccount($input: DeleteAccountInput!, $condition: ModelAccountConditionInput) {
        deleteAccount(input: $input, condition: $condition) {
          __typename
          id
          fullName
          email
          collegeEnrollment
          collegeName
          role
          posts {
            __typename
            items {
              __typename
              id
              title
              body
              tutorAccountID
              category
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAccountMutation>response.data.deleteAccount;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          body
          tutorAccountID
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          body
          tutorAccountID
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          body
          tutorAccountID
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateActivity(
    input: CreateActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<CreateActivityMutation> {
    const statement = `mutation CreateActivity($input: CreateActivityInput!, $condition: ModelActivityConditionInput) {
        createActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          activityLevel
          activityType
          question
          questionBody
          answers {
            __typename
            correct
            incorrect_1
            incorrect_2
            incorrect_3
          }
          Topic {
            __typename
            id
            name
            conceptInformation
            examples
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          activityTopicId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateActivityMutation>response.data.createActivity;
  }
  async UpdateActivity(
    input: UpdateActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<UpdateActivityMutation> {
    const statement = `mutation UpdateActivity($input: UpdateActivityInput!, $condition: ModelActivityConditionInput) {
        updateActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          activityLevel
          activityType
          question
          questionBody
          answers {
            __typename
            correct
            incorrect_1
            incorrect_2
            incorrect_3
          }
          Topic {
            __typename
            id
            name
            conceptInformation
            examples
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          activityTopicId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateActivityMutation>response.data.updateActivity;
  }
  async DeleteActivity(
    input: DeleteActivityInput,
    condition?: ModelActivityConditionInput
  ): Promise<DeleteActivityMutation> {
    const statement = `mutation DeleteActivity($input: DeleteActivityInput!, $condition: ModelActivityConditionInput) {
        deleteActivity(input: $input, condition: $condition) {
          __typename
          id
          name
          activityLevel
          activityType
          question
          questionBody
          answers {
            __typename
            correct
            incorrect_1
            incorrect_2
            incorrect_3
          }
          Topic {
            __typename
            id
            name
            conceptInformation
            examples
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          activityTopicId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteActivityMutation>response.data.deleteActivity;
  }
  async CreateActivitiesProgress(
    input: CreateActivitiesProgressInput,
    condition?: ModelActivitiesProgressConditionInput
  ): Promise<CreateActivitiesProgressMutation> {
    const statement = `mutation CreateActivitiesProgress($input: CreateActivitiesProgressInput!, $condition: ModelActivitiesProgressConditionInput) {
        createActivitiesProgress(input: $input, condition: $condition) {
          __typename
          id
          correctReading
          wrongReading
          correctWriting
          wrongWriting
          correctSpeaking
          wrongSpeaking
          correctListening
          wrongListening
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateActivitiesProgressMutation>(
      response.data.createActivitiesProgress
    );
  }
  async UpdateActivitiesProgress(
    input: UpdateActivitiesProgressInput,
    condition?: ModelActivitiesProgressConditionInput
  ): Promise<UpdateActivitiesProgressMutation> {
    const statement = `mutation UpdateActivitiesProgress($input: UpdateActivitiesProgressInput!, $condition: ModelActivitiesProgressConditionInput) {
        updateActivitiesProgress(input: $input, condition: $condition) {
          __typename
          id
          correctReading
          wrongReading
          correctWriting
          wrongWriting
          correctSpeaking
          wrongSpeaking
          correctListening
          wrongListening
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateActivitiesProgressMutation>(
      response.data.updateActivitiesProgress
    );
  }
  async DeleteActivitiesProgress(
    input: DeleteActivitiesProgressInput,
    condition?: ModelActivitiesProgressConditionInput
  ): Promise<DeleteActivitiesProgressMutation> {
    const statement = `mutation DeleteActivitiesProgress($input: DeleteActivitiesProgressInput!, $condition: ModelActivitiesProgressConditionInput) {
        deleteActivitiesProgress(input: $input, condition: $condition) {
          __typename
          id
          correctReading
          wrongReading
          correctWriting
          wrongWriting
          correctSpeaking
          wrongSpeaking
          correctListening
          wrongListening
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteActivitiesProgressMutation>(
      response.data.deleteActivitiesProgress
    );
  }
  async CreateTopic(
    input: CreateTopicInput,
    condition?: ModelTopicConditionInput
  ): Promise<CreateTopicMutation> {
    const statement = `mutation CreateTopic($input: CreateTopicInput!, $condition: ModelTopicConditionInput) {
        createTopic(input: $input, condition: $condition) {
          __typename
          id
          name
          conceptInformation
          examples
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTopicMutation>response.data.createTopic;
  }
  async UpdateTopic(
    input: UpdateTopicInput,
    condition?: ModelTopicConditionInput
  ): Promise<UpdateTopicMutation> {
    const statement = `mutation UpdateTopic($input: UpdateTopicInput!, $condition: ModelTopicConditionInput) {
        updateTopic(input: $input, condition: $condition) {
          __typename
          id
          name
          conceptInformation
          examples
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTopicMutation>response.data.updateTopic;
  }
  async DeleteTopic(
    input: DeleteTopicInput,
    condition?: ModelTopicConditionInput
  ): Promise<DeleteTopicMutation> {
    const statement = `mutation DeleteTopic($input: DeleteTopicInput!, $condition: ModelTopicConditionInput) {
        deleteTopic(input: $input, condition: $condition) {
          __typename
          id
          name
          conceptInformation
          examples
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTopicMutation>response.data.deleteTopic;
  }
  async GetAccount(id: string): Promise<GetAccountQuery> {
    const statement = `query GetAccount($id: ID!) {
        getAccount(id: $id) {
          __typename
          id
          fullName
          email
          collegeEnrollment
          collegeName
          role
          posts {
            __typename
            items {
              __typename
              id
              title
              body
              tutorAccountID
              category
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAccountQuery>response.data.getAccount;
  }
  async ListAccounts(
    filter?: ModelAccountFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAccountsQuery> {
    const statement = `query ListAccounts($filter: ModelAccountFilterInput, $limit: Int, $nextToken: String) {
        listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            fullName
            email
            collegeEnrollment
            collegeName
            role
            posts {
              __typename
              items {
                __typename
                id
                title
                body
                tutorAccountID
                category
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAccountsQuery>response.data.listAccounts;
  }
  async SyncAccounts(
    filter?: ModelAccountFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAccountsQuery> {
    const statement = `query SyncAccounts($filter: ModelAccountFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAccounts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            fullName
            email
            collegeEnrollment
            collegeName
            role
            posts {
              __typename
              items {
                __typename
                id
                title
                body
                tutorAccountID
                category
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAccountsQuery>response.data.syncAccounts;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          body
          tutorAccountID
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            body
            tutorAccountID
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async SyncPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncPostsQuery> {
    const statement = `query SyncPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncPosts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            title
            body
            tutorAccountID
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncPostsQuery>response.data.syncPosts;
  }
  async GetActivity(id: string): Promise<GetActivityQuery> {
    const statement = `query GetActivity($id: ID!) {
        getActivity(id: $id) {
          __typename
          id
          name
          activityLevel
          activityType
          question
          questionBody
          answers {
            __typename
            correct
            incorrect_1
            incorrect_2
            incorrect_3
          }
          Topic {
            __typename
            id
            name
            conceptInformation
            examples
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          activityTopicId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActivityQuery>response.data.getActivity;
  }
  async ListActivities(
    filter?: ModelActivityFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActivitiesQuery> {
    const statement = `query ListActivities($filter: ModelActivityFilterInput, $limit: Int, $nextToken: String) {
        listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            activityLevel
            activityType
            question
            questionBody
            answers {
              __typename
              correct
              incorrect_1
              incorrect_2
              incorrect_3
            }
            Topic {
              __typename
              id
              name
              conceptInformation
              examples
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            activityTopicId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListActivitiesQuery>response.data.listActivities;
  }
  async SyncActivities(
    filter?: ModelActivityFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncActivitiesQuery> {
    const statement = `query SyncActivities($filter: ModelActivityFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncActivities(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            activityLevel
            activityType
            question
            questionBody
            answers {
              __typename
              correct
              incorrect_1
              incorrect_2
              incorrect_3
            }
            Topic {
              __typename
              id
              name
              conceptInformation
              examples
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            activityTopicId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncActivitiesQuery>response.data.syncActivities;
  }
  async GetActivitiesProgress(id: string): Promise<GetActivitiesProgressQuery> {
    const statement = `query GetActivitiesProgress($id: ID!) {
        getActivitiesProgress(id: $id) {
          __typename
          id
          correctReading
          wrongReading
          correctWriting
          wrongWriting
          correctSpeaking
          wrongSpeaking
          correctListening
          wrongListening
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActivitiesProgressQuery>response.data.getActivitiesProgress;
  }
  async ListActivitiesProgresses(
    filter?: ModelActivitiesProgressFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActivitiesProgressesQuery> {
    const statement = `query ListActivitiesProgresses($filter: ModelActivitiesProgressFilterInput, $limit: Int, $nextToken: String) {
        listActivitiesProgresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            correctReading
            wrongReading
            correctWriting
            wrongWriting
            correctSpeaking
            wrongSpeaking
            correctListening
            wrongListening
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListActivitiesProgressesQuery>(
      response.data.listActivitiesProgresses
    );
  }
  async SyncActivitiesProgresses(
    filter?: ModelActivitiesProgressFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncActivitiesProgressesQuery> {
    const statement = `query SyncActivitiesProgresses($filter: ModelActivitiesProgressFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncActivitiesProgresses(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            correctReading
            wrongReading
            correctWriting
            wrongWriting
            correctSpeaking
            wrongSpeaking
            correctListening
            wrongListening
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncActivitiesProgressesQuery>(
      response.data.syncActivitiesProgresses
    );
  }
  async GetTopic(id: string): Promise<GetTopicQuery> {
    const statement = `query GetTopic($id: ID!) {
        getTopic(id: $id) {
          __typename
          id
          name
          conceptInformation
          examples
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTopicQuery>response.data.getTopic;
  }
  async ListTopics(
    filter?: ModelTopicFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTopicsQuery> {
    const statement = `query ListTopics($filter: ModelTopicFilterInput, $limit: Int, $nextToken: String) {
        listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            conceptInformation
            examples
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTopicsQuery>response.data.listTopics;
  }
  async SyncTopics(
    filter?: ModelTopicFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTopicsQuery> {
    const statement = `query SyncTopics($filter: ModelTopicFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTopics(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            conceptInformation
            examples
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTopicsQuery>response.data.syncTopics;
  }
  OnCreateAccountListener(
    filter?: ModelSubscriptionAccountFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAccount">>
  > {
    const statement = `subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
        onCreateAccount(filter: $filter) {
          __typename
          id
          fullName
          email
          collegeEnrollment
          collegeName
          role
          posts {
            __typename
            items {
              __typename
              id
              title
              body
              tutorAccountID
              category
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAccount">>
    >;
  }

  OnUpdateAccountListener(
    filter?: ModelSubscriptionAccountFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAccount">>
  > {
    const statement = `subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
        onUpdateAccount(filter: $filter) {
          __typename
          id
          fullName
          email
          collegeEnrollment
          collegeName
          role
          posts {
            __typename
            items {
              __typename
              id
              title
              body
              tutorAccountID
              category
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAccount">>
    >;
  }

  OnDeleteAccountListener(
    filter?: ModelSubscriptionAccountFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAccount">>
  > {
    const statement = `subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
        onDeleteAccount(filter: $filter) {
          __typename
          id
          fullName
          email
          collegeEnrollment
          collegeName
          role
          posts {
            __typename
            items {
              __typename
              id
              title
              body
              tutorAccountID
              category
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAccount">>
    >;
  }

  OnCreatePostListener(
    filter?: ModelSubscriptionPostFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
  > {
    const statement = `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
        onCreatePost(filter: $filter) {
          __typename
          id
          title
          body
          tutorAccountID
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
    >;
  }

  OnUpdatePostListener(
    filter?: ModelSubscriptionPostFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
  > {
    const statement = `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
        onUpdatePost(filter: $filter) {
          __typename
          id
          title
          body
          tutorAccountID
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
    >;
  }

  OnDeletePostListener(
    filter?: ModelSubscriptionPostFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
  > {
    const statement = `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
        onDeletePost(filter: $filter) {
          __typename
          id
          title
          body
          tutorAccountID
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
    >;
  }

  OnCreateActivityListener(
    filter?: ModelSubscriptionActivityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActivity">>
  > {
    const statement = `subscription OnCreateActivity($filter: ModelSubscriptionActivityFilterInput) {
        onCreateActivity(filter: $filter) {
          __typename
          id
          name
          activityLevel
          activityType
          question
          questionBody
          answers {
            __typename
            correct
            incorrect_1
            incorrect_2
            incorrect_3
          }
          Topic {
            __typename
            id
            name
            conceptInformation
            examples
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          activityTopicId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateActivity">>
    >;
  }

  OnUpdateActivityListener(
    filter?: ModelSubscriptionActivityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActivity">>
  > {
    const statement = `subscription OnUpdateActivity($filter: ModelSubscriptionActivityFilterInput) {
        onUpdateActivity(filter: $filter) {
          __typename
          id
          name
          activityLevel
          activityType
          question
          questionBody
          answers {
            __typename
            correct
            incorrect_1
            incorrect_2
            incorrect_3
          }
          Topic {
            __typename
            id
            name
            conceptInformation
            examples
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          activityTopicId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateActivity">>
    >;
  }

  OnDeleteActivityListener(
    filter?: ModelSubscriptionActivityFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActivity">>
  > {
    const statement = `subscription OnDeleteActivity($filter: ModelSubscriptionActivityFilterInput) {
        onDeleteActivity(filter: $filter) {
          __typename
          id
          name
          activityLevel
          activityType
          question
          questionBody
          answers {
            __typename
            correct
            incorrect_1
            incorrect_2
            incorrect_3
          }
          Topic {
            __typename
            id
            name
            conceptInformation
            examples
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          activityTopicId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteActivity">>
    >;
  }

  OnCreateActivitiesProgressListener(
    filter?: ModelSubscriptionActivitiesProgressFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateActivitiesProgress">
    >
  > {
    const statement = `subscription OnCreateActivitiesProgress($filter: ModelSubscriptionActivitiesProgressFilterInput) {
        onCreateActivitiesProgress(filter: $filter) {
          __typename
          id
          correctReading
          wrongReading
          correctWriting
          wrongWriting
          correctSpeaking
          wrongSpeaking
          correctListening
          wrongListening
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateActivitiesProgress">
      >
    >;
  }

  OnUpdateActivitiesProgressListener(
    filter?: ModelSubscriptionActivitiesProgressFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateActivitiesProgress">
    >
  > {
    const statement = `subscription OnUpdateActivitiesProgress($filter: ModelSubscriptionActivitiesProgressFilterInput) {
        onUpdateActivitiesProgress(filter: $filter) {
          __typename
          id
          correctReading
          wrongReading
          correctWriting
          wrongWriting
          correctSpeaking
          wrongSpeaking
          correctListening
          wrongListening
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateActivitiesProgress">
      >
    >;
  }

  OnDeleteActivitiesProgressListener(
    filter?: ModelSubscriptionActivitiesProgressFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteActivitiesProgress">
    >
  > {
    const statement = `subscription OnDeleteActivitiesProgress($filter: ModelSubscriptionActivitiesProgressFilterInput) {
        onDeleteActivitiesProgress(filter: $filter) {
          __typename
          id
          correctReading
          wrongReading
          correctWriting
          wrongWriting
          correctSpeaking
          wrongSpeaking
          correctListening
          wrongListening
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteActivitiesProgress">
      >
    >;
  }

  OnCreateTopicListener(
    filter?: ModelSubscriptionTopicFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTopic">>
  > {
    const statement = `subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
        onCreateTopic(filter: $filter) {
          __typename
          id
          name
          conceptInformation
          examples
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTopic">>
    >;
  }

  OnUpdateTopicListener(
    filter?: ModelSubscriptionTopicFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTopic">>
  > {
    const statement = `subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
        onUpdateTopic(filter: $filter) {
          __typename
          id
          name
          conceptInformation
          examples
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTopic">>
    >;
  }

  OnDeleteTopicListener(
    filter?: ModelSubscriptionTopicFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTopic">>
  > {
    const statement = `subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
        onDeleteTopic(filter: $filter) {
          __typename
          id
          name
          conceptInformation
          examples
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTopic">>
    >;
  }
}
