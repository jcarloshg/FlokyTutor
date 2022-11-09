/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createActivitie = /* GraphQL */ `
  mutation CreateActivitie(
    $input: CreateActivitieInput!
    $condition: ModelActivitieConditionInput
  ) {
    createActivitie(input: $input, condition: $condition) {
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
export const updateActivitie = /* GraphQL */ `
  mutation UpdateActivitie(
    $input: UpdateActivitieInput!
    $condition: ModelActivitieConditionInput
  ) {
    updateActivitie(input: $input, condition: $condition) {
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
export const deleteActivitie = /* GraphQL */ `
  mutation DeleteActivitie(
    $input: DeleteActivitieInput!
    $condition: ModelActivitieConditionInput
  ) {
    deleteActivitie(input: $input, condition: $condition) {
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
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createAccountActivitie = /* GraphQL */ `
  mutation CreateAccountActivitie(
    $input: CreateAccountActivitieInput!
    $condition: ModelAccountActivitieConditionInput
  ) {
    createAccountActivitie(input: $input, condition: $condition) {
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
export const updateAccountActivitie = /* GraphQL */ `
  mutation UpdateAccountActivitie(
    $input: UpdateAccountActivitieInput!
    $condition: ModelAccountActivitieConditionInput
  ) {
    updateAccountActivitie(input: $input, condition: $condition) {
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
export const deleteAccountActivitie = /* GraphQL */ `
  mutation DeleteAccountActivitie(
    $input: DeleteAccountActivitieInput!
    $condition: ModelAccountActivitieConditionInput
  ) {
    deleteAccountActivitie(input: $input, condition: $condition) {
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
