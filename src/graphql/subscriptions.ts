/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
      id
      fullName
      email
      collegeEnrollment
      collegeName
      role
      posts {
        items {
          id
          title
          body
          tutorAccountID
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
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
      id
      fullName
      email
      collegeEnrollment
      collegeName
      role
      posts {
        items {
          id
          title
          body
          tutorAccountID
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
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
      id
      fullName
      email
      collegeEnrollment
      collegeName
      role
      posts {
        items {
          id
          title
          body
          tutorAccountID
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
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      title
      body
      tutorAccountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      title
      body
      tutorAccountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      title
      body
      tutorAccountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onCreateActivity(filter: $filter) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($filter: ModelSubscriptionActivityFilterInput) {
    onUpdateActivity(filter: $filter) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($filter: ModelSubscriptionActivityFilterInput) {
    onDeleteActivity(filter: $filter) {
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
export const onCreateActivitiesProgress = /* GraphQL */ `
  subscription OnCreateActivitiesProgress(
    $filter: ModelSubscriptionActivitiesProgressFilterInput
  ) {
    onCreateActivitiesProgress(filter: $filter) {
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
export const onUpdateActivitiesProgress = /* GraphQL */ `
  subscription OnUpdateActivitiesProgress(
    $filter: ModelSubscriptionActivitiesProgressFilterInput
  ) {
    onUpdateActivitiesProgress(filter: $filter) {
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
export const onDeleteActivitiesProgress = /* GraphQL */ `
  subscription OnDeleteActivitiesProgress(
    $filter: ModelSubscriptionActivitiesProgressFilterInput
  ) {
    onDeleteActivitiesProgress(filter: $filter) {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onCreateTopic(filter: $filter) {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onUpdateTopic(filter: $filter) {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
    onDeleteTopic(filter: $filter) {
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
