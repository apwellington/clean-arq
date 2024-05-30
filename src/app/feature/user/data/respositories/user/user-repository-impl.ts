import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {UserMapper} from "./mappers/user-mapper";
import {UserRepository} from "../../../domain/repositories/user-repository";
import {UserModel} from "../../../domain/models/UserModel";
import {UserEntity} from "./entities/UserEntity";
import {environment} from "../../../../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryImpl extends UserRepository {
  userMapper: UserMapper = new UserMapper();
  baseUrl: string =  environment.api.userApiBaseUrl;

  constructor(private http: HttpClient) {
    super();
  }

  login(params: {username: string, password: string}): Observable<UserModel> {
    return this.http
      .post<UserEntity>(`${this.baseUrl}/login`, {params})
      .pipe(map(this.userMapper.mapFrom));
  }
  register(params: {phoneNum: string, password: string}): Observable<UserModel> {
    return this.http
      .post<UserEntity>(`${this.baseUrl}/register`, {params})
      .pipe(map(this.userMapper.mapFrom));
  }
  getUserProfile(): Observable<UserModel>{
    return this.http.get<UserEntity>(`${this.baseUrl}/user`).pipe(
      map(this.userMapper.mapFrom));
  }
}
