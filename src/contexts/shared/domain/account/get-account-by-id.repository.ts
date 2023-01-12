import { Account } from '../models'
export interface GetAccountByIDRepository {
    run(ID: string): Promise<Account | null>;
}