import { FormGroup, Validators } from "@angular/forms";

export class JournalForms {
    public static readonly JournalEntryForm? = [
        {'ctrl': 'EntryDate', 'lbl': 'Entry Date', 'required': 'yes'},
        {'ctrl': 'Category', 'lbl': 'Category', 'required': 'yes'},
        {'ctrl': 'SubCategory', 'lbl': 'Sub Category', 'required': 'no'},
        {'ctrl': 'Entry', 'lbl': 'Entry', 'required': 'no'}
    ];

    public static setJournalEntryValidation(form: FormGroup) {
        form.clearValidators();
        for (let c in form.controls) {
            const ctrl = form.get(c);
            if (ctrl) {
                ctrl.clearValidators();
                const arr: any = [];
                const vrule = this.JournalEntryForm?.find(x => x.ctrl === c);
                if (vrule) {
                    if (vrule.required === 'yes') arr.push(Validators.required);
                }
                if (arr) ctrl.setValidators(arr);
                ctrl.updateValueAndValidity();
            }
        }
        form.updateValueAndValidity();
    }
}
