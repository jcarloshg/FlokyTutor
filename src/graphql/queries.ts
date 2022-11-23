/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      name
      activityLevel
      activityType
      question
      questionBody
      answers {
        correct
        incorrect_1
        incorrect_2
        incorrect_3
      }
      Topic {
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
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        activityLevel
        activityType
        question
        questionBody
        answers {
          correct
          incorrect_1
          incorrect_2
          incorrect_3
        }
        Topic {
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
  }
`;
export const syncActivities = /* GraphQL */ `
  query SyncActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        activityLevel
        activityType
        question
        questionBody
        answers {
          correct
          incorrect_1
          incorrect_2
          incorrect_3
        }
        Topic {
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
  }
`;
export const getActivitiesProgress = /* GraphQL */ `
  query GetActivitiesProgress($id: ID!) {
    getActivitiesProgress(id: $id) {
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
  }
`;
export const listActivitiesProgresses = /* GraphQL */ `
  query ListActivitiesProgresses(
    $filter: ModelActivitiesProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivitiesProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
  }
`;
export const syncActivitiesProgresses = /* GraphQL */ `
  query SyncActivitiesProgresses(
    $filter: ModelActivitiesProgressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActivitiesProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      fullName
      email
      collegeEnrollment
      collegeName
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        email
        collegeEnrollment
        collegeName
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAccounts = /* GraphQL */ `
  query SyncAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fullName
        email
        collegeEnrollment
        collegeName
        role
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
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
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const syncTopics = /* GraphQL */ `
  query SyncTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTopics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
  }
`;
