export class Library {
    id: number;
    name: string;
    date: string;
    description: string;
    workbook: string;
    //LibraryWorkbooks: any[];
}
export class LibraryResponse {
    Libraries: Library[];
}
