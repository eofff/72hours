export class Task {
    private readonly name: string;
    private readonly created: Date;
    private isSucceed: boolean;

    constructor(name: string, created: Date);
    constructor(name: string, created: Date, isSucceed: boolean);
    constructor(name: string, created: Date, isSucceed?: boolean) {
        this.name = name;
        this.created = created;
        this.isSucceed = isSucceed ?? false;
    }

    public getSucceed(): boolean {
        return this.isSucceed;
    }

    public setSucceed(isSucceed: boolean): void {
        this.isSucceed = isSucceed;
    }

    public getName() : string {
        return this.name;
    }

    public getCreatedTime() : Date {
        return new Date(this.created);
    }

    public getHoursDelta(date2: Date) : number {
        return (date2.getTime() - this.created.getTime()) / 3600000;
    }
}
