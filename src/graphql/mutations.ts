/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
export const createActivitiesProgress = /* GraphQL */ `
  mutation CreateActivitiesProgress(
    $input: CreateActivitiesProgressInput!
    $condition: ModelActivitiesProgressConditionInput
  ) {
    createActivitiesProgress(input: $input, condition: $condition) {
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
export const updateActivitiesProgress = /* GraphQL */ `
  mutation UpdateActivitiesProgress(
    $input: UpdateActivitiesProgressInput!
    $condition: ModelActivitiesProgressConditionInput
  ) {
    updateActivitiesProgress(input: $input, condition: $condition) {
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
export const deleteActivitiesProgress = /* GraphQL */ `
  mutation DeleteActivitiesProgress(
    $input: DeleteActivitiesProgressInput!
    $condition: ModelActivitiesProgressConditionInput
  ) {
    deleteActivitiesProgress(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
