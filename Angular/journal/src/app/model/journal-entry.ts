export class JournalEntry {
    constructor(
        public Id: string,
        public EntryDate: Date,
        public Category: string,
        public SubCategory: string,
        public Entry: string,
        private CreatedOn: Date,
        private ModifiedOn?: Date
    ) {}

    getCreatedOn() { return this.CreatedOn; }
    getModifiedOn() { return this.ModifiedOn; }
}
