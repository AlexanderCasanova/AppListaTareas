import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private URL="http://localhost:3000"
  constructor(private http:HttpClient) { }

  getTask(user:any){
    return this.http.post<any>(this.URL+'/task/getTasks',user)
  }
}
