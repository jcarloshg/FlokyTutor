import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum ActivityLevel {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2"
}

export enum Role {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  ADMIN = "ADMIN"
}

export enum ActivityType {
  WRITING = "WRITING",
  READING = "READING",
  TALKING = "TALKING",
  LISTENING = "LISTENING"
}

type EagerAnswer = {
  readonly correct: string;
  readonly incorrect_1?: string | null;
  readonly incorrect_2?: string | null;
  readonly incorrect_3?: string | null;
}

type LazyAnswer = {
  readonly correct: string;
  readonly incorrect_1?: string | null;
  readonly incorrect_2?: string | null;
  readonly incorrect_3?: string | null;
}

export declare type Answer = LazyLoading extends LazyLoadingDisabled ? EagerAnswer : LazyAnswer

export declare const Answer: (new (init: ModelInit<Answer>) => Answer)

type ActivitiesProgressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AccountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ActivitieMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TopicMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AccountActivitieMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerActivitiesProgress = {
  readonly id: string;
  readonly correctReading?: number | null;
  readonly wrongReading?: number | null;
  readonly correctWriting?: number | null;
  readonly wrongWriting?: number | null;
  readonly correctSpeaking?: number | null;
  readonly wrongSpeaking?: number | null;
  readonly correctListening?: number | null;
  readonly wrongListening?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyActivitiesProgress = {
  readonly id: string;
  readonly correctReading?: number | null;
  readonly wrongReading?: number | null;
  readonly correctWriting?: number | null;
  readonly wrongWriting?: number | null;
  readonly correctSpeaking?: number | null;
  readonly wrongSpeaking?: number | null;
  readonly correctListening?: number | null;
  readonly wrongListening?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ActivitiesProgress = LazyLoading extends LazyLoadingDisabled ? EagerActivitiesProgress : LazyActivitiesProgress

export declare const ActivitiesProgress: (new (init: ModelInit<ActivitiesProgress, ActivitiesProgressMetaData>) => ActivitiesProgress) & {
  copyOf(source: ActivitiesProgress, mutator: (draft: MutableModel<ActivitiesProgress, ActivitiesProgressMetaData>) => MutableModel<ActivitiesProgress, ActivitiesProgressMetaData> | void): ActivitiesProgress;
}

type EagerAccount = {
  readonly id: string;
  readonly fullName: string;
  readonly email: string;
  readonly collegeEnrollment: string;
  readonly collegeName: string;
  readonly activitiesProgress?: ActivitiesProgress | null;
  readonly role?: Role | keyof typeof Role | null;
  readonly activities?: (AccountActivitie | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountActivitiesProgressId?: string | null;
}

type LazyAccount = {
  readonly id: string;
  readonly fullName: string;
  readonly email: string;
  readonly collegeEnrollment: string;
  readonly collegeName: string;
  readonly activitiesProgress: AsyncItem<ActivitiesProgress | undefined>;
  readonly role?: Role | keyof typeof Role | null;
  readonly activities: AsyncCollection<AccountActivitie>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accountActivitiesProgressId?: string | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account, AccountMetaData>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account, AccountMetaData>) => MutableModel<Account, AccountMetaData> | void): Account;
}

type EagerActivitie = {
  readonly id: string;
  readonly name: string;
  readonly activityLevel?: ActivityLevel | keyof typeof ActivityLevel | null;
  readonly typeActivity?: ActivityType | keyof typeof ActivityType | null;
  readonly question: string;
  readonly questionBody?: string | null;
  readonly topicID: string;
  readonly answers?: Answer | null;
  readonly accounts?: (AccountActivitie | null)[] | null;
  readonly examples?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyActivitie = {
  readonly id: string;
  readonly name: string;
  readonly activityLevel?: ActivityLevel | keyof typeof ActivityLevel | null;
  readonly typeActivity?: ActivityType | keyof typeof ActivityType | null;
  readonly question: string;
  readonly questionBody?: string | null;
  readonly topicID: string;
  readonly answers?: Answer | null;
  readonly accounts: AsyncCollection<AccountActivitie>;
  readonly examples?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Activitie = LazyLoading extends LazyLoadingDisabled ? EagerActivitie : LazyActivitie

export declare const Activitie: (new (init: ModelInit<Activitie, ActivitieMetaData>) => Activitie) & {
  copyOf(source: Activitie, mutator: (draft: MutableModel<Activitie, ActivitieMetaData>) => MutableModel<Activitie, ActivitieMetaData> | void): Activitie;
}

type EagerTopic = {
  readonly id: string;
  readonly name: string;
  readonly activities?: (Activitie | null)[] | null;
  readonly conceptInformation?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTopic = {
  readonly id: string;
  readonly name: string;
  readonly activities: AsyncCollection<Activitie>;
  readonly conceptInformation?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Topic = LazyLoading extends LazyLoadingDisabled ? EagerTopic : LazyTopic

export declare const Topic: (new (init: ModelInit<Topic, TopicMetaData>) => Topic) & {
  copyOf(source: Topic, mutator: (draft: MutableModel<Topic, TopicMetaData>) => MutableModel<Topic, TopicMetaData> | void): Topic;
}

type EagerAccountActivitie = {
  readonly id: string;
  readonly account: Account;
  readonly activitie: Activitie;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccountActivitie = {
  readonly id: string;
  readonly account: AsyncItem<Account>;
  readonly activitie: AsyncItem<Activitie>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AccountActivitie = LazyLoading extends LazyLoadingDisabled ? EagerAccountActivitie : LazyAccountActivitie

export declare const AccountActivitie: (new (init: ModelInit<AccountActivitie, AccountActivitieMetaData>) => AccountActivitie) & {
  copyOf(source: AccountActivitie, mutator: (draft: MutableModel<AccountActivitie, AccountActivitieMetaData>) => MutableModel<AccountActivitie, AccountActivitieMetaData> | void): AccountActivitie;
}