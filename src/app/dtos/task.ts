export class Task {
    private readonly name: string;
    private readonly created: Date;

    constructor(name: string, created: Date) {
        this.name = name;
        this.created = created;
    }

    public getName() : string {
        return this.name;
    }

    public getCreatedTime() : Date {
        return new Date(this.created);
    }

    public getHoursDelta(date2: Date) : number {
        return date2.getHours() - this.created.getHours();
    }
}
