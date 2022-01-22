export default class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._job = job;
  }
  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent,
    };
    return userInfo;
  }

  setUserInfo(userInfo) {
    this._name.textContent = userInfo.name;
    this._job.textContent = userInfo.text;
  }
}