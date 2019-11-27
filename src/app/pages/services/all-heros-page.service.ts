import { Injectable } from "@angular/core";
import { HttpService } from '../../services/httpService';
import { EnvironmentService } from 'src/app/services/environment_variables';
import { IHeros } from '../../interfaces/heros';
import { Observable } from 'rxjs';

@Injectable()
export class AllHerosPageService {
    private serviceUrl: String;
    constructor(private envService: EnvironmentService, private httpService: HttpService) {
        this.serviceUrl = this.envService.getUrl();
    }

    getHeros(): Observable<IHeros[]> {
        return this.httpService.get(this.serviceUrl);
    }
}