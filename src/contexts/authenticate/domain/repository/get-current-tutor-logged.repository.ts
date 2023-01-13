import { Account } from '../../../shared/domain/models';

export interface GetCurrentTutorLoggedRepository {
    run(): Promise<Account | null>,
}