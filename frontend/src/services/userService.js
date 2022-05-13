export function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    window.location.replace('/');
  } else {
    return user;
  }
}
