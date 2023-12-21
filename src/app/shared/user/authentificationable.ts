import { JWTTokens } from 'rilata2/src/app/jwt/types';
import { Observable } from 'rxjs';
import { TelegramAuthDTO } from 'workshop-domain/src/subject/domain-data/user/user-authentification/a-params';

export interface Authentificationable {
    userAuthentification(telegramAuthDTO: TelegramAuthDTO): Observable<JWTTokens>;
}
