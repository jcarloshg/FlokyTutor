import { DataStore } from "aws-amplify";
import { GetAccountByIDRepository } from "../../domain/account/get-account-by-id.repository";
import { Account } from "../../domain/models";

export class GetAccountByID_AWS implements GetAccountByIDRepository {
    async run(ID: string): Promise<Account | null> {
        const account = await DataStore.query<Account>(Account, ID);
        return account as Account || null;
    }
}