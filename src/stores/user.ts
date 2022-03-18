import { makeAutoObservable, observable, action } from 'mobx';
import { Admin } from '@/typings/admin';

class UserStore {
  @observable isLogin = false;
  @observable info: Admin | undefined = undefined; 
  @observable roles: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setUser(info: Admin, roles: string[]) {
    this.isLogin = true;
    this.info = info;
    this.roles = roles;
  }

  @action
  setTest() {
    this.isLogin = true;
  }
}

export default UserStore;