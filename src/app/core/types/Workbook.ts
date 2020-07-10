import { SafeResourceUrl } from '@angular/platform-browser';
import { WorkbookType } from './WorkbookType';

export class Workbook {
  public shortName: string;
  constructor(
    public id: string,
    public type: WorkbookType,
    public title: string,
    public description: string,
    public site: string,
    public name: string,
    public date: Date,
    public url: SafeResourceUrl,
    public account: string,
    public analysis: string,
    public content: string,
  ) {}
}
