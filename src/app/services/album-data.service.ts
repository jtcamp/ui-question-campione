import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Albums } from "../models/album";

@Injectable({
    providedIn: 'root'
})
export class AlbumDataService {

    private albumDataSubject: BehaviorSubject<Albums> = new BehaviorSubject<Albums>({});

    constructor() {}

    getAlbumData(): Observable<Albums> {
        return this.albumDataSubject.asObservable();
    }

    setAlbumData(albums: Albums): void {
        this.albumDataSubject.next(albums);
    }
}