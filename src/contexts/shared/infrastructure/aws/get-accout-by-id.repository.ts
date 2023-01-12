import { DataStore } from "aws-amplify";
import { getAccountByIDRepository } from "../../domain/account/get-account-by-id.repository";
import { Account } from "../../domain/models";

export class GetAccountByID_AWS implements getAccountByIDRepository {

    async getAccountByID(ID: string): Promise<Account> {
        const account = await DataStore.query<Account>(Account, ID);
        return account as Account || null;
    }

}