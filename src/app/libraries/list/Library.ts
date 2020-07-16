export class Library {
    id: number;
    name: string;
    date: string;
    description: string;
    workbook: string;
    list: any[];
}
export class LibraryResponse {
    Libraries: Library[];
}
