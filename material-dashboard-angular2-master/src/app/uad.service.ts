import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {IAuth} from './auth'
import {IMaterial} from './material'
import {ICategoria} from './categorias'
import {IUser} from './user'
import {IRequest} from './request'
import {IUpdateM} from './updateMat'

@Injectable({
  providedIn: 'root'
})
export class UadService {
  private url: string = "http://127.0.0.1:8000/api/v1/"
  constructor(private http: HttpClient) { }
  
  login(user, pass): Observable<IAuth[]>{
    const url = this.url + "auth/login/"
    return this.http.post<IAuth[]>(url, {username: user, password: pass})
  }

  getUser(token, username): Observable<IUser[]>{
    const url = this.url + "users/"+ username + "/"
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
    return this.http.get<IUser[]>(url, {headers})
  }

 getMaterial(token): Observable<IMaterial[]>{
   const url = this.url + "material/"
   let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
   return this.http.get<IMaterial[]>(url, {headers})
 }

 getCategories(token): Observable<ICategoria[]>{
  const url = this.url + "categorias/"
  let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
  return this.http.get<ICategoria[]>(url, {headers})
 }

 updateMaterial(token, pk, name, categoria, disponibilidad): Observable<IUpdateM[]>{
   const url = this.url + 'material/' + pk + "/"
   let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
   return this.http.put<IUpdateM[]>(url, {name: name, categoria: categoria, disponibilidad: disponibilidad}, {headers})
 }

 createRequest(token, pk_user, pk_material, uso):Observable<IRequest[]>{
   const url = this.url + "request/"
   let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
   return this.http.post<IRequest[]>(url, {user: pk_user, material: pk_material, uso: uso}, {headers})
 }
}
