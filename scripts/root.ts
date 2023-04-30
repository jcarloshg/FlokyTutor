
import { DataStore } from "aws-amplify";
import { Activity, ActivityLevel, ActivityType, Answer, Topic } from "src/contexts/shared/domain/models";
import { topics } from "./topics";
import { activitiesToLoad } from "./activities";

export interface inputTopic {
    name: string;
    conceptInformation: string[];
    examples: string[];
}

export interface inputActivity {
    activityLevel: ActivityLevel,
    activityType: ActivityType,
    activityTopicId: string,
    answers: Answer,
    name: string,
    question: string,
    questionBody: string,
    topic: Topic,
}


export const createTopics = async () => {
    topics.forEach(async (topic, index, array) => {
        const newTopic: Topic = new Topic({
            name: topic.name,
            conceptInformation: topic.conceptInformation,
            examples: topic.examples,
        });
        const topicCreated: Topic = await DataStore.save(newTopic);
        console.log(topicCreated);
    });
}



export const getAllTopics = async () => {
    const topics = await DataStore.query(Topic);
    console.log({ topics });
}

export const createActivities = async () => {
    const shuffleActivities = activitiesToLoad.sort(() => Math.random() - 0.5);
    // return;
    try {
        shuffleActivities.forEach(async (activity) => {
            const newActivity = new Activity({
                activityLevel: activity.activityLevel,
                activityType: activity.activityType,
                topic: activity.topic,
                activityTopicId: activity.activityTopicId,
                answers: activity.answers,
                name: activity.name,
                question: activity.question,
                questionBody: activity.questionBody,
            });
            const activityCreated: Activity = await DataStore.save(newActivity);
            console.log(activityCreated);
        });
    } catch (error) {
        console.log(error);
    }
}