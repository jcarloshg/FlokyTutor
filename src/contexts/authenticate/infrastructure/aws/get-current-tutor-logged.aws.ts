import { DataStore, API, Auth, graphqlOperation } from "aws-amplify";
import { GetCurrentTutorLoggedRepository } from '../../domain/repository/get-current-tutor-logged.repository';
import { Account } from '../../../shared/domain/models';

export class GetCurrentTutorLogged_AWS implements GetCurrentTutorLoggedRepository {

    async run(): Promise<Account | null> {
        try {
            const currentUser = await Auth.currentSession();
            const tutorID = currentUser.getAccessToken().payload['sub'].toString();
            const userTutorCurrent = await DataStore.query<Account>(Account, tutorID);
            return userTutorCurrent ?? null;
        } catch (error) {
            console.log('[GetCurrentTutorLogged_AWS]', error);
            return null;
        }
    }

}