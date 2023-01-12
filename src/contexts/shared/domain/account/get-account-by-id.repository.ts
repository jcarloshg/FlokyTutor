import { Account } from '../models'

export interface getAccountByIDRepository {
    getAccountByID(ID: string): Promise<Account | null>;
}