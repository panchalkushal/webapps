import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JournalEntry } from '../model/journal-entry';

import { JournalForms } from '../shared/forms/JournalForms';

@Component({
  selector: 'app-journaledit',
  templateUrl: './journaledit.component.html',
  styleUrls: ['./journaledit.component.css']
})
export class JournaleditComponent implements OnInit {
  journalEditForm!: FormGroup;
  journalEntry?: JournalEntry;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let ctrls = JournalForms.JournalEntryForm;
    this.journalEditForm = this.fb.group({});

    ctrls?.forEach((e) => {
      this.journalEditForm?.addControl(e.ctrl, this.fb.control(''));
    });

    JournalForms.setJournalEntryValidation(this.journalEditForm);
  }

  saveJournalEntry() {    
    if (this.journalEditForm.valid) {
      this.journalEntry = this.journalEditForm.value;      
    }
  }

  getFC(key: string) {  return this.journalEditForm.get(key); }
}