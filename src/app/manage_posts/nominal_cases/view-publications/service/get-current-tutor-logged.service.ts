import { Injectable } from '@angular/core';
import { GetCurrentTutorLoggedRepository } from 'src/contexts/authenticate/domain/repository/get-current-tutor-logged.repository';
import { Account } from 'src/contexts/shared/domain/models';
import { GetCurrentTutorLogged_AWS } from '../../../../../contexts/authenticate/infrastructure/aws/get-current-tutor-logged.aws';

@Injectable({
    providedIn: 'root'
})
export class GetCurrentTutorLoggedService implements GetCurrentTutorLoggedRepository {

    public async run(): Promise<Account | null> {
        const account: Account | null = await new GetCurrentTutorLogged_AWS().run();
        return account;
    }

}