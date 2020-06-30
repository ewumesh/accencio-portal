import { SafeResourceUrl } from '@angular/platform-browser';

export class Workbook {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public site: string,
    public name: string,
    public date: Date,
    public url: SafeResourceUrl,
    public account: string,
    public analysis: string
    ) { }

}
