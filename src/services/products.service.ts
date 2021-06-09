import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    private data = new BehaviorSubject<any>([]);
    data$ = this.data.asObservable();

    changeData(data: any) {
        this.data.next(data)
    }
}