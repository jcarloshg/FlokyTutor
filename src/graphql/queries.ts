/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      activitiesProgress {
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
      role
      activities {
        items {
          id
          accountID
          activitieID
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
      accountActivitiesProgressId
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
        activitiesProgress {
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
        role
        activities {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountActivitiesProgressId
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
        activitiesProgress {
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
        role
        activities {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountActivitiesProgressId
      }
      nextToken
      startedAt
    }
  }
`;
export const getActivitie = /* GraphQL */ `
  query GetActivitie($id: ID!) {
    getActivitie(id: $id) {
      id
      name
      activityLevel
      typeActivity
      question
      questionBody
      topicID
      answers {
        correct
        incorrect_1
        incorrect_2
        incorrect_3
      }
      accounts {
        items {
          id
          accountID
          activitieID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      examples
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listActivities = /* GraphQL */ `
  query ListActivities(
    $filter: ModelActivitieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        activityLevel
        typeActivity
        question
        questionBody
        topicID
        answers {
          correct
          incorrect_1
          incorrect_2
          incorrect_3
        }
        accounts {
          nextToken
          startedAt
        }
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
export const syncActivities = /* GraphQL */ `
  query SyncActivities(
    $filter: ModelActivitieFilterInput
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
        typeActivity
        question
        questionBody
        topicID
        answers {
          correct
          incorrect_1
          incorrect_2
          incorrect_3
        }
        accounts {
          nextToken
          startedAt
        }
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
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      name
      activities {
        items {
          id
          name
          activityLevel
          typeActivity
          question
          questionBody
          topicID
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
      conceptInformation
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
        activities {
          nextToken
          startedAt
        }
        conceptInformation
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
        activities {
          nextToken
          startedAt
        }
        conceptInformation
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
export const getAccountActivitie = /* GraphQL */ `
  query GetAccountActivitie($id: ID!) {
    getAccountActivitie(id: $id) {
      id
      accountID
      activitieID
      account {
        id
        fullName
        email
        collegeEnrollment
        collegeName
        activitiesProgress {
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
        role
        activities {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountActivitiesProgressId
      }
      activitie {
        id
        name
        activityLevel
        typeActivity
        question
        questionBody
        topicID
        answers {
          correct
          incorrect_1
          incorrect_2
          incorrect_3
        }
        accounts {
          nextToken
          startedAt
        }
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
    }
  }
`;
export const listAccountActivities = /* GraphQL */ `
  query ListAccountActivities(
    $filter: ModelAccountActivitieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        accountID
        activitieID
        account {
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
          accountActivitiesProgressId
        }
        activitie {
          id
          name
          activityLevel
          typeActivity
          question
          questionBody
          topicID
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAccountActivities = /* GraphQL */ `
  query SyncAccountActivities(
    $filter: ModelAccountActivitieFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccountActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        accountID
        activitieID
        account {
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
          accountActivitiesProgressId
        }
        activitie {
          id
          name
          activityLevel
          typeActivity
          question
          questionBody
          topicID
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
      }
      nextToken
      startedAt
    }
  }
`;
