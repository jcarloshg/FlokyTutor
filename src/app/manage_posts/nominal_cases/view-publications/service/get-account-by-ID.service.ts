import { Injectable } from '@angular/core';
import { GetAccountByIDRepository } from 'src/contexts/shared/domain/account/get-account-by-id.repository';
import { Account } from 'src/contexts/shared/domain/models';
import { GetAccountByID_AWS } from 'src/contexts/shared/infrastructure/aws/get-account-by-id.aws';

@Injectable({
    providedIn: 'root'
})
export class GetAccountByIDService implements GetAccountByIDRepository {

    constructor() { }

    async run(ID: string): Promise<Account | null> {
        const account: Account | null = await new GetAccountByID_AWS().run(ID);
        return account;
    }

}