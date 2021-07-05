import { Toastr, ToastrMessageType } from '@rxweb/js';
import { Injectable } from "@angular/core";

@Injectable()
export class BaseToastr extends Toastr {
    constructor() {
        super();
        this.designClass.root = ["toast-container", "toast-top-right"];
        this.designClass.secondLevelDiv = ["toast", function () {
            switch (this.messageType) {
                case ToastrMessageType.success:
                    return "toast-success"
                case ToastrMessageType.error:
                    return "toast-error"
                case ToastrMessageType.info:
                    return "toast-info"
                case ToastrMessageType.warning:
                    return "toast-warning"
            }
        }]
        this.designClass.thirdLevelDiv = ["toast-message"]
        this.defaultConfig.timeOut = 5000;
    }

    success(message: string) {
        this.show(message, ToastrMessageType.success);
    }

    error(message: string) {
        this.show(message, ToastrMessageType.error);
    }

    warning(message: string) {
        this.show(message, ToastrMessageType.warning);
    }

    info(message: string) {
        this.show(message, ToastrMessageType.info);
    }
}

