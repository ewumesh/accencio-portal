import { SafeResourceUrl } from '@angular/platform-browser';

export class Workbook {
  constructor(
    public site: string,
    public name: string,
    public date: Date,
    public url: SafeResourceUrl,
    public account: string
    ) { }

}
