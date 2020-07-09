import { SafeResourceUrl } from '@angular/platform-browser';
import { WorkbookType } from './workbooktype';
import { Workbook } from './workbook';
import { Permission } from 'app/permissions/Permission';

export class WorkbookPerm {
  public p: Permission[];
  public w: Workbook[];
}
