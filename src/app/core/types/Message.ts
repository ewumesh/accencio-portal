export class Message {
  constructor(
    public id: string,
    public type: string,
    public org: string,
    public orgid: string,
    public wb: string,
    public date: Date,
    public msg: string,
    public status: number,
    public from1: string,
    public to1: string,
    public isEditing: boolean,
    public canEdit: boolean
  ) {}
}
