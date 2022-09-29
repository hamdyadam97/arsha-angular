import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Iservices } from 'src/Models/iservices';

@Injectable({
  providedIn: 'root'
})
export class TheservicesService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Iservices[]>{
    let url = "http://candles.uaenorth.cloudapp.azure.com:96/api/Services/GetAllDataService";
    return this.http.get<Iservices[]>(url);
  }

  add(model:Iservices):Observable<Iservices>{
    let url ="http://candles.uaenorth.cloudapp.azure.com:96/api/Services/AddService";
      return this.http.post<Iservices>(url,model);
  }

  delete(id:number):Observable<string>{
    let url = "http://candles.uaenorth.cloudapp.azure.com:96/api/Services?Id="+id;
    return this.http.delete<string>(url);
  }
  update(id:number,model:Iservices):Observable<Iservices>{
    let url = "http://candles.uaenorth.cloudapp.azure.com:96/api/Services/UpdateService/"+id;
    return this.http.put<Iservices>(url,model);
  }
}

