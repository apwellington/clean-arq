import { Observable } from 'rxjs';
import {UseCase} from "../../../../core/util/use-case";
import {UserModel} from "../models/UserModel";
import {UserRepository} from "../repositories/user-repository";

export class UserLoginUseCase implements UseCase<{ username: string; password: string }, UserModel> {

  constructor(private userRepository: UserRepository) { }
  execute(
    params: { username: string, password: string },
  ): Observable<UserModel> {
    return this.userRepository.login(params);
  }
}
