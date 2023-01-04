/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAccountInput = {
  id?: string | null,
  fullName: string,
  email: string,
  collegeEnrollment: string,
  collegeName: string,
  role: Role,
  _version?: number | null,
};

export enum Role {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  ADMIN = "ADMIN",
}


export type ModelAccountConditionInput = {
  fullName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  collegeEnrollment?: ModelStringInput | null,
  collegeName?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  and?: Array< ModelAccountConditionInput | null > | null,
  or?: Array< ModelAccountConditionInput | null > | null,
  not?: ModelAccountConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelRoleInput = {
  eq?: Role | null,
  ne?: Role | null,
};

export type Account = {
  __typename: "Account",
  id: string,
  fullName: string,
  email: string,
  collegeEnrollment: string,
  collegeName: string,
  role: Role,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  body: string,
  tutorAccountID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAccountInput = {
  id: string,
  fullName?: string | null,
  email?: string | null,
  collegeEnrollment?: string | null,
  collegeName?: string | null,
  role?: Role | null,
  _version?: number | null,
};

export type DeleteAccountInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  body: string,
  tutorAccountID: string,
  _version?: number | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  tutorAccountID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  body?: string | null,
  tutorAccountID?: string | null,
  _version?: number | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreateActivityInput = {
  id?: string | null,
  name: string,
  activityLevel: ActivityLevel,
  activityType?: ActivityType | null,
  question: string,
  questionBody: string,
  answers?: AnswerInput | null,
  _version?: number | null,
  activityTopicId?: string | null,
};

export enum ActivityLevel {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2",
  PRUEBA_DROP_THIS = "PRUEBA_DROP_THIS",
}


export enum ActivityType {
  WRITING = "WRITING",
  READING = "READING",
  TALKING = "TALKING",
  LISTENING = "LISTENING",
}


export type AnswerInput = {
  correct: string,
  incorrect_1?: string | null,
  incorrect_2?: string | null,
  incorrect_3?: string | null,
};

export type ModelActivityConditionInput = {
  name?: ModelStringInput | null,
  activityLevel?: ModelActivityLevelInput | null,
  activityType?: ModelActivityTypeInput | null,
  question?: ModelStringInput | null,
  questionBody?: ModelStringInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
  activityTopicId?: ModelIDInput | null,
};

export type ModelActivityLevelInput = {
  eq?: ActivityLevel | null,
  ne?: ActivityLevel | null,
};

export type ModelActivityTypeInput = {
  eq?: ActivityType | null,
  ne?: ActivityType | null,
};

export type Activity = {
  __typename: "Activity",
  id: string,
  name: string,
  activityLevel: ActivityLevel,
  activityType?: ActivityType | null,
  question: string,
  questionBody: string,
  answers?: Answer | null,
  Topic?: Topic | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  activityTopicId?: string | null,
};

export type Answer = {
  __typename: "Answer",
  correct: string,
  incorrect_1?: string | null,
  incorrect_2?: string | null,
  incorrect_3?: string | null,
};

export type Topic = {
  __typename: "Topic",
  id: string,
  name: string,
  conceptInformation?: Array< string | null > | null,
  examples?: Array< string > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateActivityInput = {
  id: string,
  name?: string | null,
  activityLevel?: ActivityLevel | null,
  activityType?: ActivityType | null,
  question?: string | null,
  questionBody?: string | null,
  answers?: AnswerInput | null,
  _version?: number | null,
  activityTopicId?: string | null,
};

export type DeleteActivityInput = {
  id: string,
  _version?: number | null,
};

export type CreateActivitiesProgressInput = {
  id?: string | null,
  correctReading?: number | null,
  wrongReading?: number | null,
  correctWriting?: number | null,
  wrongWriting?: number | null,
  correctSpeaking?: number | null,
  wrongSpeaking?: number | null,
  correctListening?: number | null,
  wrongListening?: number | null,
  _version?: number | null,
};

export type ModelActivitiesProgressConditionInput = {
  correctReading?: ModelIntInput | null,
  wrongReading?: ModelIntInput | null,
  correctWriting?: ModelIntInput | null,
  wrongWriting?: ModelIntInput | null,
  correctSpeaking?: ModelIntInput | null,
  wrongSpeaking?: ModelIntInput | null,
  correctListening?: ModelIntInput | null,
  wrongListening?: ModelIntInput | null,
  and?: Array< ModelActivitiesProgressConditionInput | null > | null,
  or?: Array< ModelActivitiesProgressConditionInput | null > | null,
  not?: ModelActivitiesProgressConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ActivitiesProgress = {
  __typename: "ActivitiesProgress",
  id: string,
  correctReading?: number | null,
  wrongReading?: number | null,
  correctWriting?: number | null,
  wrongWriting?: number | null,
  correctSpeaking?: number | null,
  wrongSpeaking?: number | null,
  correctListening?: number | null,
  wrongListening?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateActivitiesProgressInput = {
  id: string,
  correctReading?: number | null,
  wrongReading?: number | null,
  correctWriting?: number | null,
  wrongWriting?: number | null,
  correctSpeaking?: number | null,
  wrongSpeaking?: number | null,
  correctListening?: number | null,
  wrongListening?: number | null,
  _version?: number | null,
};

export type DeleteActivitiesProgressInput = {
  id: string,
  _version?: number | null,
};

export type CreateTopicInput = {
  id?: string | null,
  name: string,
  conceptInformation?: Array< string | null > | null,
  examples?: Array< string > | null,
  _version?: number | null,
};

export type ModelTopicConditionInput = {
  name?: ModelStringInput | null,
  conceptInformation?: ModelStringInput | null,
  examples?: ModelStringInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
};

export type UpdateTopicInput = {
  id: string,
  name?: string | null,
  conceptInformation?: Array< string | null > | null,
  examples?: Array< string > | null,
  _version?: number | null,
};

export type DeleteTopicInput = {
  id: string,
  _version?: number | null,
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null,
  fullName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  collegeEnrollment?: ModelStringInput | null,
  collegeName?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  and?: Array< ModelAccountFilterInput | null > | null,
  or?: Array< ModelAccountFilterInput | null > | null,
  not?: ModelAccountFilterInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  tutorAccountID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  activityLevel?: ModelActivityLevelInput | null,
  activityType?: ModelActivityTypeInput | null,
  question?: ModelStringInput | null,
  questionBody?: ModelStringInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
  activityTopicId?: ModelIDInput | null,
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection",
  items:  Array<Activity | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelActivitiesProgressFilterInput = {
  id?: ModelIDInput | null,
  correctReading?: ModelIntInput | null,
  wrongReading?: ModelIntInput | null,
  correctWriting?: ModelIntInput | null,
  wrongWriting?: ModelIntInput | null,
  correctSpeaking?: ModelIntInput | null,
  wrongSpeaking?: ModelIntInput | null,
  correctListening?: ModelIntInput | null,
  wrongListening?: ModelIntInput | null,
  and?: Array< ModelActivitiesProgressFilterInput | null > | null,
  or?: Array< ModelActivitiesProgressFilterInput | null > | null,
  not?: ModelActivitiesProgressFilterInput | null,
};

export type ModelActivitiesProgressConnection = {
  __typename: "ModelActivitiesProgressConnection",
  items:  Array<ActivitiesProgress | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  conceptInformation?: ModelStringInput | null,
  examples?: ModelStringInput | null,
  and?: Array< ModelTopicFilterInput | null > | null,
  or?: Array< ModelTopicFilterInput | null > | null,
  not?: ModelTopicFilterInput | null,
};

export type ModelTopicConnection = {
  __typename: "ModelTopicConnection",
  items:  Array<Topic | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionAccountFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  collegeEnrollment?: ModelSubscriptionStringInput | null,
  collegeName?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAccountFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  tutorAccountID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionActivityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  activityLevel?: ModelSubscriptionStringInput | null,
  activityType?: ModelSubscriptionStringInput | null,
  question?: ModelSubscriptionStringInput | null,
  questionBody?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActivityFilterInput | null > | null,
  or?: Array< ModelSubscriptionActivityFilterInput | null > | null,
};

export type ModelSubscriptionActivitiesProgressFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  correctReading?: ModelSubscriptionIntInput | null,
  wrongReading?: ModelSubscriptionIntInput | null,
  correctWriting?: ModelSubscriptionIntInput | null,
  wrongWriting?: ModelSubscriptionIntInput | null,
  correctSpeaking?: ModelSubscriptionIntInput | null,
  wrongSpeaking?: ModelSubscriptionIntInput | null,
  correctListening?: ModelSubscriptionIntInput | null,
  wrongListening?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionActivitiesProgressFilterInput | null > | null,
  or?: Array< ModelSubscriptionActivitiesProgressFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  conceptInformation?: ModelSubscriptionStringInput | null,
  examples?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionTopicFilterInput | null > | null,
};

export type CreateAccountMutationVariables = {
  input: CreateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type CreateAccountMutation = {
  createAccount?:  {
    __typename: "Account",
    id: string,
    fullName: string,
    email: string,
    collegeEnrollment: string,
    collegeName: string,
    role: Role,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        body: string,
        tutorAccountID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAccountMutationVariables = {
  input: UpdateAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type UpdateAccountMutation = {
  updateAccount?:  {
    __typename: "Account",
    id: string,
    fullName: string,
    email: string,
    collegeEnrollment: string,
    collegeName: string,
    role: Role,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        body: string,
        tutorAccountID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAccountMutationVariables = {
  input: DeleteAccountInput,
  condition?: ModelAccountConditionInput | null,
};

export type DeleteAccountMutation = {
  deleteAccount?:  {
    __typename: "Account",
    id: string,
    fullName: string,
    email: string,
    collegeEnrollment: string,
    collegeName: string,
    role: Role,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        body: string,
        tutorAccountID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    body: string,
    tutorAccountID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    body: string,
    tutorAccountID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    body: string,
    tutorAccountID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity?:  {
    __typename: "Activity",
    id: string,
    name: string,
    activityLevel: ActivityLevel,
    activityType?: ActivityType | null,
    question: string,
    questionBody: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    Topic?:  {
      __typename: "Topic",
      id: string,
      name: string,
      conceptInformation?: Array< string | null > | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    activityTopicId?: string | null,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity?:  {
    __typename: "Activity",
    id: string,
    name: string,
    activityLevel: ActivityLevel,
    activityType?: ActivityType | null,
    question: string,
    questionBody: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    Topic?:  {
      __typename: "Topic",
      id: string,
      name: string,
      conceptInformation?: Array< string | null > | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    activityTopicId?: string | null,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity?:  {
    __typename: "Activity",
    id: string,
    name: string,
    activityLevel: ActivityLevel,
    activityType?: ActivityType | null,
    question: string,
    questionBody: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    Topic?:  {
      __typename: "Topic",
      id: string,
      name: string,
      conceptInformation?: Array< string | null > | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    activityTopicId?: string | null,
  } | null,
};

export type CreateActivitiesProgressMutationVariables = {
  input: CreateActivitiesProgressInput,
  condition?: ModelActivitiesProgressConditionInput | null,
};

export type CreateActivitiesProgressMutation = {
  createActivitiesProgress?:  {
    __typename: "ActivitiesProgress",
    id: string,
    correctReading?: number | null,
    wrongReading?: number | null,
    correctWriting?: number | null,
    wrongWriting?: number | null,
    correctSpeaking?: number | null,
    wrongSpeaking?: number | null,
    correctListening?: number | null,
    wrongListening?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateActivitiesProgressMutationVariables = {
  input: UpdateActivitiesProgressInput,
  condition?: ModelActivitiesProgressConditionInput | null,
};

export type UpdateActivitiesProgressMutation = {
  updateActivitiesProgress?:  {
    __typename: "ActivitiesProgress",
    id: string,
    correctReading?: number | null,
    wrongReading?: number | null,
    correctWriting?: number | null,
    wrongWriting?: number | null,
    correctSpeaking?: number | null,
    wrongSpeaking?: number | null,
    correctListening?: number | null,
    wrongListening?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteActivitiesProgressMutationVariables = {
  input: DeleteActivitiesProgressInput,
  condition?: ModelActivitiesProgressConditionInput | null,
};

export type DeleteActivitiesProgressMutation = {
  deleteActivitiesProgress?:  {
    __typename: "ActivitiesProgress",
    id: string,
    correctReading?: number | null,
    wrongReading?: number | null,
    correctWriting?: number | null,
    wrongWriting?: number | null,
    correctSpeaking?: number | null,
    wrongSpeaking?: number | null,
    correctListening?: number | null,
    wrongListening?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTopicMutationVariables = {
  input: CreateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type CreateTopicMutation = {
  createTopic?:  {
    __typename: "Topic",
    id: string,
    name: string,
    conceptInformation?: Array< string | null > | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTopicMutationVariables = {
  input: UpdateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type UpdateTopicMutation = {
  updateTopic?:  {
    __typename: "Topic",
    id: string,
    name: string,
    conceptInformation?: Array< string | null > | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTopicMutationVariables = {
  input: DeleteTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type DeleteTopicMutation = {
  deleteTopic?:  {
    __typename: "Topic",
    id: string,
    name: string,
    conceptInformation?: Array< string | null > | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetAccountQueryVariables = {
  id: string,
};

export type GetAccountQuery = {
  getAccount?:  {
    __typename: "Account",
    id: string,
    fullName: string,
    email: string,
    collegeEnrollment: string,
    collegeName: string,
    role: Role,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        body: string,
        tutorAccountID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountsQuery = {
  listAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      fullName: string,
      email: string,
      collegeEnrollment: string,
      collegeName: string,
      role: Role,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAccountsQueryVariables = {
  filter?: ModelAccountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAccountsQuery = {
  syncAccounts?:  {
    __typename: "ModelAccountConnection",
    items:  Array< {
      __typename: "Account",
      id: string,
      fullName: string,
      email: string,
      collegeEnrollment: string,
      collegeName: string,
      role: Role,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    body: string,
    tutorAccountID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      body: string,
      tutorAccountID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      body: string,
      tutorAccountID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity?:  {
    __typename: "Activity",
    id: string,
    name: string,
    activityLevel: ActivityLevel,
    activityType?: ActivityType | null,
    question: string,
    questionBody: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    Topic?:  {
      __typename: "Topic",
      id: string,
      name: string,
      conceptInformation?: Array< string | null > | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    activityTopicId?: string | null,
  } | null,
};

export type ListActivitiesQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitiesQuery = {
  listActivities?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      name: string,
      activityLevel: ActivityLevel,
      activityType?: ActivityType | null,
      question: string,
      questionBody: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      Topic?:  {
        __typename: "Topic",
        id: string,
        name: string,
        conceptInformation?: Array< string | null > | null,
        examples?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      activityTopicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncActivitiesQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncActivitiesQuery = {
  syncActivities?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      name: string,
      activityLevel: ActivityLevel,
      activityType?: ActivityType | null,
      question: string,
      questionBody: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      Topic?:  {
        __typename: "Topic",
        id: string,
        name: string,
        conceptInformation?: Array< string | null > | null,
        examples?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      activityTopicId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetActivitiesProgressQueryVariables = {
  id: string,
};

export type GetActivitiesProgressQuery = {
  getActivitiesProgress?:  {
    __typename: "ActivitiesProgress",
    id: string,
    correctReading?: number | null,
    wrongReading?: number | null,
    correctWriting?: number | null,
    wrongWriting?: number | null,
    correctSpeaking?: number | null,
    wrongSpeaking?: number | null,
    correctListening?: number | null,
    wrongListening?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListActivitiesProgressesQueryVariables = {
  filter?: ModelActivitiesProgressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitiesProgressesQuery = {
  listActivitiesProgresses?:  {
    __typename: "ModelActivitiesProgressConnection",
    items:  Array< {
      __typename: "ActivitiesProgress",
      id: string,
      correctReading?: number | null,
      wrongReading?: number | null,
      correctWriting?: number | null,
      wrongWriting?: number | null,
      correctSpeaking?: number | null,
      wrongSpeaking?: number | null,
      correctListening?: number | null,
      wrongListening?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncActivitiesProgressesQueryVariables = {
  filter?: ModelActivitiesProgressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncActivitiesProgressesQuery = {
  syncActivitiesProgresses?:  {
    __typename: "ModelActivitiesProgressConnection",
    items:  Array< {
      __typename: "ActivitiesProgress",
      id: string,
      correctReading?: number | null,
      wrongReading?: number | null,
      correctWriting?: number | null,
      wrongWriting?: number | null,
      correctSpeaking?: number | null,
      wrongSpeaking?: number | null,
      correctListening?: number | null,
      wrongListening?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTopicQueryVariables = {
  id: string,
};

export type GetTopicQuery = {
  getTopic?:  {
    __typename: "Topic",
    id: string,
    name: string,
    conceptInformation?: Array< string | null > | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicsQuery = {
  listTopics?:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "Topic",
      id: string,
      name: string,
      conceptInformation?: Array< string | null > | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTopicsQuery = {
  syncTopics?:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "Topic",
      id: string,
      name: string,
      conceptInformation?: Array< string | null > | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnCreateAccountSubscription = {
  onCreateAccount?:  {
    __typename: "Account",
    id: string,
    fullName: string,
    email: string,
    collegeEnrollment: string,
    collegeName: string,
    role: Role,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        body: string,
        tutorAccountID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnUpdateAccountSubscription = {
  onUpdateAccount?:  {
    __typename: "Account",
    id: string,
    fullName: string,
    email: string,
    collegeEnrollment: string,
    collegeName: string,
    role: Role,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        body: string,
        tutorAccountID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAccountSubscriptionVariables = {
  filter?: ModelSubscriptionAccountFilterInput | null,
};

export type OnDeleteAccountSubscription = {
  onDeleteAccount?:  {
    __typename: "Account",
    id: string,
    fullName: string,
    email: string,
    collegeEnrollment: string,
    collegeName: string,
    role: Role,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        body: string,
        tutorAccountID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    body: string,
    tutorAccountID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    body: string,
    tutorAccountID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    body: string,
    tutorAccountID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity?:  {
    __typename: "Activity",
    id: string,
    name: string,
    activityLevel: ActivityLevel,
    activityType?: ActivityType | null,
    question: string,
    questionBody: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    Topic?:  {
      __typename: "Topic",
      id: string,
      name: string,
      conceptInformation?: Array< string | null > | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    activityTopicId?: string | null,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?:  {
    __typename: "Activity",
    id: string,
    name: string,
    activityLevel: ActivityLevel,
    activityType?: ActivityType | null,
    question: string,
    questionBody: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    Topic?:  {
      __typename: "Topic",
      id: string,
      name: string,
      conceptInformation?: Array< string | null > | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    activityTopicId?: string | null,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?:  {
    __typename: "Activity",
    id: string,
    name: string,
    activityLevel: ActivityLevel,
    activityType?: ActivityType | null,
    question: string,
    questionBody: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    Topic?:  {
      __typename: "Topic",
      id: string,
      name: string,
      conceptInformation?: Array< string | null > | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    activityTopicId?: string | null,
  } | null,
};

export type OnCreateActivitiesProgressSubscriptionVariables = {
  filter?: ModelSubscriptionActivitiesProgressFilterInput | null,
};

export type OnCreateActivitiesProgressSubscription = {
  onCreateActivitiesProgress?:  {
    __typename: "ActivitiesProgress",
    id: string,
    correctReading?: number | null,
    wrongReading?: number | null,
    correctWriting?: number | null,
    wrongWriting?: number | null,
    correctSpeaking?: number | null,
    wrongSpeaking?: number | null,
    correctListening?: number | null,
    wrongListening?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateActivitiesProgressSubscriptionVariables = {
  filter?: ModelSubscriptionActivitiesProgressFilterInput | null,
};

export type OnUpdateActivitiesProgressSubscription = {
  onUpdateActivitiesProgress?:  {
    __typename: "ActivitiesProgress",
    id: string,
    correctReading?: number | null,
    wrongReading?: number | null,
    correctWriting?: number | null,
    wrongWriting?: number | null,
    correctSpeaking?: number | null,
    wrongSpeaking?: number | null,
    correctListening?: number | null,
    wrongListening?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteActivitiesProgressSubscriptionVariables = {
  filter?: ModelSubscriptionActivitiesProgressFilterInput | null,
};

export type OnDeleteActivitiesProgressSubscription = {
  onDeleteActivitiesProgress?:  {
    __typename: "ActivitiesProgress",
    id: string,
    correctReading?: number | null,
    wrongReading?: number | null,
    correctWriting?: number | null,
    wrongWriting?: number | null,
    correctSpeaking?: number | null,
    wrongSpeaking?: number | null,
    correctListening?: number | null,
    wrongListening?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnCreateTopicSubscription = {
  onCreateTopic?:  {
    __typename: "Topic",
    id: string,
    name: string,
    conceptInformation?: Array< string | null > | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnUpdateTopicSubscription = {
  onUpdateTopic?:  {
    __typename: "Topic",
    id: string,
    name: string,
    conceptInformation?: Array< string | null > | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTopicSubscriptionVariables = {
  filter?: ModelSubscriptionTopicFilterInput | null,
};

export type OnDeleteTopicSubscription = {
  onDeleteTopic?:  {
    __typename: "Topic",
    id: string,
    name: string,
    conceptInformation?: Array< string | null > | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
