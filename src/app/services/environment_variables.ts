import { Injectable } from "@angular/core";

@Injectable()
export class EnvironmentService {
    private url = "/assets/data/heros.json";
    constructor() { }

    public getUrl() {
        return this.url;
    }
}