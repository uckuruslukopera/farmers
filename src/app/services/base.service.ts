import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export abstract class BaseService {

    protected baseUrl: string;

    constructor(
        protected http: HttpClient
    ) {
        this.baseUrl = environment.baseUrl;
    }

    protected get<T>(endpoint: string): Observable<any> {
        return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
    }
}
