import { Injectable } from "@angular/core";
import { EnvironmentService } from './environment_variables';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {
    }

    public get(url): any {
        return this.http.get(url);
    }

    public post(url, data) {
        return this.http.post(url, data);
    }
}