/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
export const onCreateActivitie = /* GraphQL */ `
  subscription OnCreateActivitie(
    $filter: ModelSubscriptionActivitieFilterInput
  ) {
    onCreateActivitie(filter: $filter) {
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
export const onUpdateActivitie = /* GraphQL */ `
  subscription OnUpdateActivitie(
    $filter: ModelSubscriptionActivitieFilterInput
  ) {
    onUpdateActivitie(filter: $filter) {
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
export const onDeleteActivitie = /* GraphQL */ `
  subscription OnDeleteActivitie(
    $filter: ModelSubscriptionActivitieFilterInput
  ) {
    onDeleteActivitie(filter: $filter) {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onCreateTopic(filter: $filter) {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onUpdateTopic(filter: $filter) {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
    onDeleteTopic(filter: $filter) {
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
export const onCreateAccountActivitie = /* GraphQL */ `
  subscription OnCreateAccountActivitie(
    $filter: ModelSubscriptionAccountActivitieFilterInput
  ) {
    onCreateAccountActivitie(filter: $filter) {
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
export const onUpdateAccountActivitie = /* GraphQL */ `
  subscription OnUpdateAccountActivitie(
    $filter: ModelSubscriptionAccountActivitieFilterInput
  ) {
    onUpdateAccountActivitie(filter: $filter) {
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
export const onDeleteAccountActivitie = /* GraphQL */ `
  subscription OnDeleteAccountActivitie(
    $filter: ModelSubscriptionAccountActivitieFilterInput
  ) {
    onDeleteAccountActivitie(filter: $filter) {
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
