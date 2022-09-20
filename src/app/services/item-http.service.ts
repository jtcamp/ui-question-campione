import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "../models/item";

@Injectable({
    providedIn: 'root'
})
export class ItemHttpService {

    constructor(private http: HttpClient) {}

    getItemsFromApi(): Observable<Item[]> {
        return this.http.get<Item[]>('https://jsonplaceholder.typicode.com/photos');
    }
}