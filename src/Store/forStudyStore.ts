import {makeAutoObservable} from "mobx";
import {channels, listForStudy} from "../components/Pages/listForStudy";

export interface ICategories {
    category: string,
    array: string[],
    isOpen: boolean
}

export interface IChannels {
    category: string,
    array: string[],
    isOpen: boolean
}

class forStudyStore {
    channels: IChannels[] = channels
    categories: ICategories[] = listForStudy

    constructor() {
        makeAutoObservable(this)
    }

    isOpen(qqqq: string) {
        this.categories.forEach(el => {
            if (el.category === qqqq) {
                el.isOpen = !el.isOpen
            } else {
                el.isOpen = false
            }
        })
    }
}

export default new forStudyStore()