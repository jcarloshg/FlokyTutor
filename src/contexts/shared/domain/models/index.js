// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Role = {
  "STUDENT": "STUDENT",
  "TEACHER": "TEACHER",
  "ADMIN": "ADMIN"
};

const ActivityType = {
  "WRITING": "WRITING",
  "READING": "READING",
  "TALKING": "TALKING",
  "LISTENING": "LISTENING"
};

const ActivityLevel = {
  "A1": "A1",
  "A2": "A2",
  "B1": "B1",
  "B2": "B2",
  "C1": "C1",
  "C2": "C2",
  "PRUEBA_DROP_THIS": "PRUEBA_DROP_THIS"
};

const { Account, Post, Activity, Topic, ActivitiesProgress, Answer } = initSchema(schema);

export {
  Account,
  Post,
  Activity,
  Topic,
  ActivitiesProgress,
  Role,
  ActivityType,
  ActivityLevel,
  Answer
};