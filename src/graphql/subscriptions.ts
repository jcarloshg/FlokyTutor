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
      role
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
      role
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accountActivitiesProgressId
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      title
      body
      category
      comments {
        items {
          id
          body
          postID
          author {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentAuthorId
        }
        nextToken
        startedAt
      }
      author {
        id
        fullName
        email
        collegeEnrollment
        collegeName
        role
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountActivitiesProgressId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postAuthorId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      title
      body
      category
      comments {
        items {
          id
          body
          postID
          author {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentAuthorId
        }
        nextToken
        startedAt
      }
      author {
        id
        fullName
        email
        collegeEnrollment
        collegeName
        role
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountActivitiesProgressId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postAuthorId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      title
      body
      category
      comments {
        items {
          id
          body
          postID
          author {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentAuthorId
        }
        nextToken
        startedAt
      }
      author {
        id
        fullName
        email
        collegeEnrollment
        collegeName
        role
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountActivitiesProgressId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postAuthorId
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      body
      postID
      author {
        id
        fullName
        email
        collegeEnrollment
        collegeName
        role
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountActivitiesProgressId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentAuthorId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      body
      postID
      author {
        id
        fullName
        email
        collegeEnrollment
        collegeName
        role
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountActivitiesProgressId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentAuthorId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      body
      postID
      author {
        id
        fullName
        email
        collegeEnrollment
        collegeName
        role
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accountActivitiesProgressId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentAuthorId
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
      topic {
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
      topic {
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
      topic {
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
