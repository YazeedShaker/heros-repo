import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class LoadingService {
    constructor(private spinner: NgxSpinnerService) {
    }

    public startLoading() {
        this.spinner.show();
    }

    public stopLoaing() {
        this.spinner.hide();
    }
}