import { Albums } from "src/app/models/album";
import { Item } from "src/app/models/item";

export const mockAlbums: Albums = {
    1: [{
        id: 1,
        albumId: 1,
        title: 'mock title 1',
        url: '',
        thumbnailUrl: ''
    }],
    2: [{
        id: 2,
        albumId: 2,
        title: 'mock title 2',
        url: '',
        thumbnailUrl: ''
    }]
};

export const mockItems: Item[] = [
    {
        id: 1,
        albumId: 1,
        title: 'mock title 1',
        url: '',
        thumbnailUrl: ''
    },
    {
        id: 2,
        albumId: 2,
        title: 'mock title 2',
        url: '',
        thumbnailUrl: ''
    }
];