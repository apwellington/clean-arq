import { Observable } from 'rxjs';
import {UserModel} from "../models/UserModel";

export abstract class UserRepository {
  abstract login(params: {username: string, password: string}): Observable<UserModel>;
  abstract register(params: {phoneNum: string, password: string}): Observable<UserModel>;
  abstract getUserProfile(): Observable<UserModel>;
}
