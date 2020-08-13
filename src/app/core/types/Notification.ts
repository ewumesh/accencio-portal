export class Notification {
  constructor(
    public id: string,
    public type: string,
    public org: string,
    public orgid: string,
    public wb: string,
    public date: Date,
    public msg: string,
    public status: number
  ) {}
}
