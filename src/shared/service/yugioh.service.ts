import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {monster, YugiohModel} from "../models/YugiohModel";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class YugiohService {
  url : string = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

  getListOfMonster():Observable<YugiohModel>{
    return this._httpClient.get<YugiohModel>(this.url);
  }
  getMonsterByLimit(offset:number):Observable<YugiohModel>{
    return this._httpClient.get<YugiohModel>(this.url+`/?num=4&offset=${offset}`);
  }
  constructor(private _httpClient : HttpClient) { }
}
