let usersArr = ["Tyler", "Sarah", "Dan"];

export let users = {
  getUsers() {
    return usersArr
  },
  sortUsers() {
    return usersArr.sort()
  },
  firstUser() {
    return usersArr[0]
  }
}