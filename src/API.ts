/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export type CreateAccountInput = {
  id?: string | null,
  fullName: string,
  email: string,
  collegeEnrollment: string,
  collegeName: string,
  role?: Role | null,
  _version?: number | null,
  accountActivitiesProgressId?: string | null,
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
  accountActivitiesProgressId?: ModelIDInput | null,
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

export type Account = {
  __typename: "Account",
  id: string,
  fullName: string,
  email: string,
  collegeEnrollment: string,
  collegeName: string,
  activitiesProgress?: ActivitiesProgress | null,
  role?: Role | null,
  activities?: ModelAccountActivitieConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  accountActivitiesProgressId?: string | null,
};

export type ModelAccountActivitieConnection = {
  __typename: "ModelAccountActivitieConnection",
  items:  Array<AccountActivitie | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type AccountActivitie = {
  __typename: "AccountActivitie",
  id: string,
  accountID: string,
  activitieID: string,
  account: Account,
  activitie: Activitie,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Activitie = {
  __typename: "Activitie",
  id: string,
  name: string,
  activityLevel?: ActivityLevel | null,
  typeActivity?: ActivityType | null,
  question: string,
  questionBody?: string | null,
  topicID: string,
  answers?: Answer | null,
  accounts?: ModelAccountActivitieConnection | null,
  examples?: Array< string > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum ActivityLevel {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2",
}


export enum ActivityType {
  WRITING = "WRITING",
  READING = "READING",
  TALKING = "TALKING",
  LISTENING = "LISTENING",
}


export type Answer = {
  __typename: "Answer",
  correct: string,
  incorrect_1?: string | null,
  incorrect_2?: string | null,
  incorrect_3?: string | null,
};

export type UpdateAccountInput = {
  id: string,
  fullName?: string | null,
  email?: string | null,
  collegeEnrollment?: string | null,
  collegeName?: string | null,
  role?: Role | null,
  _version?: number | null,
  accountActivitiesProgressId?: string | null,
};

export type DeleteAccountInput = {
  id: string,
  _version?: number | null,
};

export type CreateActivitieInput = {
  id?: string | null,
  name: string,
  activityLevel?: ActivityLevel | null,
  typeActivity?: ActivityType | null,
  question: string,
  questionBody?: string | null,
  topicID: string,
  answers?: AnswerInput | null,
  examples?: Array< string > | null,
  _version?: number | null,
};

export type AnswerInput = {
  correct: string,
  incorrect_1?: string | null,
  incorrect_2?: string | null,
  incorrect_3?: string | null,
};

export type ModelActivitieConditionInput = {
  name?: ModelStringInput | null,
  activityLevel?: ModelActivityLevelInput | null,
  typeActivity?: ModelActivityTypeInput | null,
  question?: ModelStringInput | null,
  questionBody?: ModelStringInput | null,
  topicID?: ModelIDInput | null,
  examples?: ModelStringInput | null,
  and?: Array< ModelActivitieConditionInput | null > | null,
  or?: Array< ModelActivitieConditionInput | null > | null,
  not?: ModelActivitieConditionInput | null,
};

export type ModelActivityLevelInput = {
  eq?: ActivityLevel | null,
  ne?: ActivityLevel | null,
};

export type ModelActivityTypeInput = {
  eq?: ActivityType | null,
  ne?: ActivityType | null,
};

export type UpdateActivitieInput = {
  id: string,
  name?: string | null,
  activityLevel?: ActivityLevel | null,
  typeActivity?: ActivityType | null,
  question?: string | null,
  questionBody?: string | null,
  topicID?: string | null,
  answers?: AnswerInput | null,
  examples?: Array< string > | null,
  _version?: number | null,
};

export type DeleteActivitieInput = {
  id: string,
  _version?: number | null,
};

export type CreateTopicInput = {
  id?: string | null,
  name: string,
  conceptInformation?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelTopicConditionInput = {
  name?: ModelStringInput | null,
  conceptInformation?: ModelStringInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
};

export type Topic = {
  __typename: "Topic",
  id: string,
  name: string,
  activities?: ModelActivitieConnection | null,
  conceptInformation?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelActivitieConnection = {
  __typename: "ModelActivitieConnection",
  items:  Array<Activitie | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateTopicInput = {
  id: string,
  name?: string | null,
  conceptInformation?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteTopicInput = {
  id: string,
  _version?: number | null,
};

export type CreateAccountActivitieInput = {
  id?: string | null,
  accountID: string,
  activitieID: string,
  _version?: number | null,
};

export type ModelAccountActivitieConditionInput = {
  accountID?: ModelIDInput | null,
  activitieID?: ModelIDInput | null,
  and?: Array< ModelAccountActivitieConditionInput | null > | null,
  or?: Array< ModelAccountActivitieConditionInput | null > | null,
  not?: ModelAccountActivitieConditionInput | null,
};

export type UpdateAccountActivitieInput = {
  id: string,
  accountID?: string | null,
  activitieID?: string | null,
  _version?: number | null,
};

export type DeleteAccountActivitieInput = {
  id: string,
  _version?: number | null,
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
  accountActivitiesProgressId?: ModelIDInput | null,
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection",
  items:  Array<Account | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelActivitieFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  activityLevel?: ModelActivityLevelInput | null,
  typeActivity?: ModelActivityTypeInput | null,
  question?: ModelStringInput | null,
  questionBody?: ModelStringInput | null,
  topicID?: ModelIDInput | null,
  examples?: ModelStringInput | null,
  and?: Array< ModelActivitieFilterInput | null > | null,
  or?: Array< ModelActivitieFilterInput | null > | null,
  not?: ModelActivitieFilterInput | null,
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  conceptInformation?: ModelStringInput | null,
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

export type ModelAccountActivitieFilterInput = {
  id?: ModelIDInput | null,
  accountID?: ModelIDInput | null,
  activitieID?: ModelIDInput | null,
  and?: Array< ModelAccountActivitieFilterInput | null > | null,
  or?: Array< ModelAccountActivitieFilterInput | null > | null,
  not?: ModelAccountActivitieFilterInput | null,
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

export type ModelSubscriptionActivitieFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  activityLevel?: ModelSubscriptionStringInput | null,
  typeActivity?: ModelSubscriptionStringInput | null,
  question?: ModelSubscriptionStringInput | null,
  questionBody?: ModelSubscriptionStringInput | null,
  topicID?: ModelSubscriptionIDInput | null,
  examples?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActivitieFilterInput | null > | null,
  or?: Array< ModelSubscriptionActivitieFilterInput | null > | null,
};

export type ModelSubscriptionTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  conceptInformation?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionTopicFilterInput | null > | null,
};

export type ModelSubscriptionAccountActivitieFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  accountID?: ModelSubscriptionIDInput | null,
  activitieID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAccountActivitieFilterInput | null > | null,
  or?: Array< ModelSubscriptionAccountActivitieFilterInput | null > | null,
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
    activitiesProgress?:  {
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
    role?: Role | null,
    activities?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
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
    accountActivitiesProgressId?: string | null,
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
    activitiesProgress?:  {
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
    role?: Role | null,
    activities?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
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
    accountActivitiesProgressId?: string | null,
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
    activitiesProgress?:  {
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
    role?: Role | null,
    activities?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
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
    accountActivitiesProgressId?: string | null,
  } | null,
};

export type CreateActivitieMutationVariables = {
  input: CreateActivitieInput,
  condition?: ModelActivitieConditionInput | null,
};

export type CreateActivitieMutation = {
  createActivitie?:  {
    __typename: "Activitie",
    id: string,
    name: string,
    activityLevel?: ActivityLevel | null,
    typeActivity?: ActivityType | null,
    question: string,
    questionBody?: string | null,
    topicID: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateActivitieMutationVariables = {
  input: UpdateActivitieInput,
  condition?: ModelActivitieConditionInput | null,
};

export type UpdateActivitieMutation = {
  updateActivitie?:  {
    __typename: "Activitie",
    id: string,
    name: string,
    activityLevel?: ActivityLevel | null,
    typeActivity?: ActivityType | null,
    question: string,
    questionBody?: string | null,
    topicID: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteActivitieMutationVariables = {
  input: DeleteActivitieInput,
  condition?: ModelActivitieConditionInput | null,
};

export type DeleteActivitieMutation = {
  deleteActivitie?:  {
    __typename: "Activitie",
    id: string,
    name: string,
    activityLevel?: ActivityLevel | null,
    typeActivity?: ActivityType | null,
    question: string,
    questionBody?: string | null,
    topicID: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    examples?: Array< string > | null,
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
    activities?:  {
      __typename: "ModelActivitieConnection",
      items:  Array< {
        __typename: "Activitie",
        id: string,
        name: string,
        activityLevel?: ActivityLevel | null,
        typeActivity?: ActivityType | null,
        question: string,
        questionBody?: string | null,
        topicID: string,
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
    conceptInformation?: Array< string | null > | null,
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
    activities?:  {
      __typename: "ModelActivitieConnection",
      items:  Array< {
        __typename: "Activitie",
        id: string,
        name: string,
        activityLevel?: ActivityLevel | null,
        typeActivity?: ActivityType | null,
        question: string,
        questionBody?: string | null,
        topicID: string,
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
    conceptInformation?: Array< string | null > | null,
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
    activities?:  {
      __typename: "ModelActivitieConnection",
      items:  Array< {
        __typename: "Activitie",
        id: string,
        name: string,
        activityLevel?: ActivityLevel | null,
        typeActivity?: ActivityType | null,
        question: string,
        questionBody?: string | null,
        topicID: string,
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
    conceptInformation?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAccountActivitieMutationVariables = {
  input: CreateAccountActivitieInput,
  condition?: ModelAccountActivitieConditionInput | null,
};

export type CreateAccountActivitieMutation = {
  createAccountActivitie?:  {
    __typename: "AccountActivitie",
    id: string,
    accountID: string,
    activitieID: string,
    account:  {
      __typename: "Account",
      id: string,
      fullName: string,
      email: string,
      collegeEnrollment: string,
      collegeName: string,
      activitiesProgress?:  {
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
      role?: Role | null,
      activities?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      accountActivitiesProgressId?: string | null,
    },
    activitie:  {
      __typename: "Activitie",
      id: string,
      name: string,
      activityLevel?: ActivityLevel | null,
      typeActivity?: ActivityType | null,
      question: string,
      questionBody?: string | null,
      topicID: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAccountActivitieMutationVariables = {
  input: UpdateAccountActivitieInput,
  condition?: ModelAccountActivitieConditionInput | null,
};

export type UpdateAccountActivitieMutation = {
  updateAccountActivitie?:  {
    __typename: "AccountActivitie",
    id: string,
    accountID: string,
    activitieID: string,
    account:  {
      __typename: "Account",
      id: string,
      fullName: string,
      email: string,
      collegeEnrollment: string,
      collegeName: string,
      activitiesProgress?:  {
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
      role?: Role | null,
      activities?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      accountActivitiesProgressId?: string | null,
    },
    activitie:  {
      __typename: "Activitie",
      id: string,
      name: string,
      activityLevel?: ActivityLevel | null,
      typeActivity?: ActivityType | null,
      question: string,
      questionBody?: string | null,
      topicID: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAccountActivitieMutationVariables = {
  input: DeleteAccountActivitieInput,
  condition?: ModelAccountActivitieConditionInput | null,
};

export type DeleteAccountActivitieMutation = {
  deleteAccountActivitie?:  {
    __typename: "AccountActivitie",
    id: string,
    accountID: string,
    activitieID: string,
    account:  {
      __typename: "Account",
      id: string,
      fullName: string,
      email: string,
      collegeEnrollment: string,
      collegeName: string,
      activitiesProgress?:  {
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
      role?: Role | null,
      activities?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      accountActivitiesProgressId?: string | null,
    },
    activitie:  {
      __typename: "Activitie",
      id: string,
      name: string,
      activityLevel?: ActivityLevel | null,
      typeActivity?: ActivityType | null,
      question: string,
      questionBody?: string | null,
      topicID: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    activitiesProgress?:  {
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
    role?: Role | null,
    activities?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
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
    accountActivitiesProgressId?: string | null,
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
      activitiesProgress?:  {
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
      role?: Role | null,
      activities?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      accountActivitiesProgressId?: string | null,
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
      activitiesProgress?:  {
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
      role?: Role | null,
      activities?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      accountActivitiesProgressId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetActivitieQueryVariables = {
  id: string,
};

export type GetActivitieQuery = {
  getActivitie?:  {
    __typename: "Activitie",
    id: string,
    name: string,
    activityLevel?: ActivityLevel | null,
    typeActivity?: ActivityType | null,
    question: string,
    questionBody?: string | null,
    topicID: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListActivitiesQueryVariables = {
  filter?: ModelActivitieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitiesQuery = {
  listActivities?:  {
    __typename: "ModelActivitieConnection",
    items:  Array< {
      __typename: "Activitie",
      id: string,
      name: string,
      activityLevel?: ActivityLevel | null,
      typeActivity?: ActivityType | null,
      question: string,
      questionBody?: string | null,
      topicID: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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

export type SyncActivitiesQueryVariables = {
  filter?: ModelActivitieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncActivitiesQuery = {
  syncActivities?:  {
    __typename: "ModelActivitieConnection",
    items:  Array< {
      __typename: "Activitie",
      id: string,
      name: string,
      activityLevel?: ActivityLevel | null,
      typeActivity?: ActivityType | null,
      question: string,
      questionBody?: string | null,
      topicID: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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

export type GetTopicQueryVariables = {
  id: string,
};

export type GetTopicQuery = {
  getTopic?:  {
    __typename: "Topic",
    id: string,
    name: string,
    activities?:  {
      __typename: "ModelActivitieConnection",
      items:  Array< {
        __typename: "Activitie",
        id: string,
        name: string,
        activityLevel?: ActivityLevel | null,
        typeActivity?: ActivityType | null,
        question: string,
        questionBody?: string | null,
        topicID: string,
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
    conceptInformation?: Array< string | null > | null,
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
      activities?:  {
        __typename: "ModelActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      conceptInformation?: Array< string | null > | null,
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
      activities?:  {
        __typename: "ModelActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      conceptInformation?: Array< string | null > | null,
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

export type GetAccountActivitieQueryVariables = {
  id: string,
};

export type GetAccountActivitieQuery = {
  getAccountActivitie?:  {
    __typename: "AccountActivitie",
    id: string,
    accountID: string,
    activitieID: string,
    account:  {
      __typename: "Account",
      id: string,
      fullName: string,
      email: string,
      collegeEnrollment: string,
      collegeName: string,
      activitiesProgress?:  {
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
      role?: Role | null,
      activities?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      accountActivitiesProgressId?: string | null,
    },
    activitie:  {
      __typename: "Activitie",
      id: string,
      name: string,
      activityLevel?: ActivityLevel | null,
      typeActivity?: ActivityType | null,
      question: string,
      questionBody?: string | null,
      topicID: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAccountActivitiesQueryVariables = {
  filter?: ModelAccountActivitieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccountActivitiesQuery = {
  listAccountActivities?:  {
    __typename: "ModelAccountActivitieConnection",
    items:  Array< {
      __typename: "AccountActivitie",
      id: string,
      accountID: string,
      activitieID: string,
      account:  {
        __typename: "Account",
        id: string,
        fullName: string,
        email: string,
        collegeEnrollment: string,
        collegeName: string,
        role?: Role | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        accountActivitiesProgressId?: string | null,
      },
      activitie:  {
        __typename: "Activitie",
        id: string,
        name: string,
        activityLevel?: ActivityLevel | null,
        typeActivity?: ActivityType | null,
        question: string,
        questionBody?: string | null,
        topicID: string,
        examples?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
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

export type SyncAccountActivitiesQueryVariables = {
  filter?: ModelAccountActivitieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAccountActivitiesQuery = {
  syncAccountActivities?:  {
    __typename: "ModelAccountActivitieConnection",
    items:  Array< {
      __typename: "AccountActivitie",
      id: string,
      accountID: string,
      activitieID: string,
      account:  {
        __typename: "Account",
        id: string,
        fullName: string,
        email: string,
        collegeEnrollment: string,
        collegeName: string,
        role?: Role | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        accountActivitiesProgressId?: string | null,
      },
      activitie:  {
        __typename: "Activitie",
        id: string,
        name: string,
        activityLevel?: ActivityLevel | null,
        typeActivity?: ActivityType | null,
        question: string,
        questionBody?: string | null,
        topicID: string,
        examples?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
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
    activitiesProgress?:  {
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
    role?: Role | null,
    activities?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
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
    accountActivitiesProgressId?: string | null,
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
    activitiesProgress?:  {
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
    role?: Role | null,
    activities?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
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
    accountActivitiesProgressId?: string | null,
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
    activitiesProgress?:  {
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
    role?: Role | null,
    activities?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
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
    accountActivitiesProgressId?: string | null,
  } | null,
};

export type OnCreateActivitieSubscriptionVariables = {
  filter?: ModelSubscriptionActivitieFilterInput | null,
};

export type OnCreateActivitieSubscription = {
  onCreateActivitie?:  {
    __typename: "Activitie",
    id: string,
    name: string,
    activityLevel?: ActivityLevel | null,
    typeActivity?: ActivityType | null,
    question: string,
    questionBody?: string | null,
    topicID: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateActivitieSubscriptionVariables = {
  filter?: ModelSubscriptionActivitieFilterInput | null,
};

export type OnUpdateActivitieSubscription = {
  onUpdateActivitie?:  {
    __typename: "Activitie",
    id: string,
    name: string,
    activityLevel?: ActivityLevel | null,
    typeActivity?: ActivityType | null,
    question: string,
    questionBody?: string | null,
    topicID: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    examples?: Array< string > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteActivitieSubscriptionVariables = {
  filter?: ModelSubscriptionActivitieFilterInput | null,
};

export type OnDeleteActivitieSubscription = {
  onDeleteActivitie?:  {
    __typename: "Activitie",
    id: string,
    name: string,
    activityLevel?: ActivityLevel | null,
    typeActivity?: ActivityType | null,
    question: string,
    questionBody?: string | null,
    topicID: string,
    answers?:  {
      __typename: "Answer",
      correct: string,
      incorrect_1?: string | null,
      incorrect_2?: string | null,
      incorrect_3?: string | null,
    } | null,
    accounts?:  {
      __typename: "ModelAccountActivitieConnection",
      items:  Array< {
        __typename: "AccountActivitie",
        id: string,
        accountID: string,
        activitieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    examples?: Array< string > | null,
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
    activities?:  {
      __typename: "ModelActivitieConnection",
      items:  Array< {
        __typename: "Activitie",
        id: string,
        name: string,
        activityLevel?: ActivityLevel | null,
        typeActivity?: ActivityType | null,
        question: string,
        questionBody?: string | null,
        topicID: string,
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
    conceptInformation?: Array< string | null > | null,
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
    activities?:  {
      __typename: "ModelActivitieConnection",
      items:  Array< {
        __typename: "Activitie",
        id: string,
        name: string,
        activityLevel?: ActivityLevel | null,
        typeActivity?: ActivityType | null,
        question: string,
        questionBody?: string | null,
        topicID: string,
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
    conceptInformation?: Array< string | null > | null,
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
    activities?:  {
      __typename: "ModelActivitieConnection",
      items:  Array< {
        __typename: "Activitie",
        id: string,
        name: string,
        activityLevel?: ActivityLevel | null,
        typeActivity?: ActivityType | null,
        question: string,
        questionBody?: string | null,
        topicID: string,
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
    conceptInformation?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAccountActivitieSubscriptionVariables = {
  filter?: ModelSubscriptionAccountActivitieFilterInput | null,
};

export type OnCreateAccountActivitieSubscription = {
  onCreateAccountActivitie?:  {
    __typename: "AccountActivitie",
    id: string,
    accountID: string,
    activitieID: string,
    account:  {
      __typename: "Account",
      id: string,
      fullName: string,
      email: string,
      collegeEnrollment: string,
      collegeName: string,
      activitiesProgress?:  {
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
      role?: Role | null,
      activities?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      accountActivitiesProgressId?: string | null,
    },
    activitie:  {
      __typename: "Activitie",
      id: string,
      name: string,
      activityLevel?: ActivityLevel | null,
      typeActivity?: ActivityType | null,
      question: string,
      questionBody?: string | null,
      topicID: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAccountActivitieSubscriptionVariables = {
  filter?: ModelSubscriptionAccountActivitieFilterInput | null,
};

export type OnUpdateAccountActivitieSubscription = {
  onUpdateAccountActivitie?:  {
    __typename: "AccountActivitie",
    id: string,
    accountID: string,
    activitieID: string,
    account:  {
      __typename: "Account",
      id: string,
      fullName: string,
      email: string,
      collegeEnrollment: string,
      collegeName: string,
      activitiesProgress?:  {
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
      role?: Role | null,
      activities?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      accountActivitiesProgressId?: string | null,
    },
    activitie:  {
      __typename: "Activitie",
      id: string,
      name: string,
      activityLevel?: ActivityLevel | null,
      typeActivity?: ActivityType | null,
      question: string,
      questionBody?: string | null,
      topicID: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAccountActivitieSubscriptionVariables = {
  filter?: ModelSubscriptionAccountActivitieFilterInput | null,
};

export type OnDeleteAccountActivitieSubscription = {
  onDeleteAccountActivitie?:  {
    __typename: "AccountActivitie",
    id: string,
    accountID: string,
    activitieID: string,
    account:  {
      __typename: "Account",
      id: string,
      fullName: string,
      email: string,
      collegeEnrollment: string,
      collegeName: string,
      activitiesProgress?:  {
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
      role?: Role | null,
      activities?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      accountActivitiesProgressId?: string | null,
    },
    activitie:  {
      __typename: "Activitie",
      id: string,
      name: string,
      activityLevel?: ActivityLevel | null,
      typeActivity?: ActivityType | null,
      question: string,
      questionBody?: string | null,
      topicID: string,
      answers?:  {
        __typename: "Answer",
        correct: string,
        incorrect_1?: string | null,
        incorrect_2?: string | null,
        incorrect_3?: string | null,
      } | null,
      accounts?:  {
        __typename: "ModelAccountActivitieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      examples?: Array< string > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
