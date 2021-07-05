import { SpinnerDirective } from '@rxweb/framework';
import { TemplateConfig } from '@rxweb/dom';

export class AppSpinner extends SpinnerDirective {
    constructor(element: HTMLElement) {
        super(element);
        this.inClass = ['sk-loading'];
        this.designClass.root = ['sk-spinner', 'sk-spinner-wave'];
        this.designClass.childrens = ['sk-rect1', 'sk-rect2', 'sk-rect3', 'sk-rect4', 'sk-rect5'];
    }

    getTemplate(): TemplateConfig {
        return {
            div: {
                class: ['spinner-border']
            }
        };
    }
}