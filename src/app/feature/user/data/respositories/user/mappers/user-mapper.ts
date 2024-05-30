import {UserEntity} from "../entities/UserEntity";
import {UserModel} from "../../../../domain/models/UserModel";
import {Mapper} from "../../../../../../core/util/mapper";


export class UserMapper extends Mapper<UserEntity, UserModel> {
  mapFrom(param: UserEntity): UserModel {
    return {
      id: param.id,
      fullName: param.name,
      username: param.userName,
      phoneNum: param.phoneNumber,
      profilePicture: param.userPicture,
      activationStatus: param.activationStatus
    };
  }
  mapTo(param: UserModel): UserEntity {
    return {
      id: param.id,
      name: param.fullName,
      userName: param.username,
      phoneNumber: param.phoneNum,
      userPicture: param.profilePicture,
      activationStatus: param.activationStatus
    }
  }
}
