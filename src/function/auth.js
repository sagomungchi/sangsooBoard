
var users;
fetch('/User').then((res)=>res.json()).then(data=>{
  users = data;
});
export function signIn({ id, password }) {


  const user = users.find(user => user.id === id && user.password === password);
  if (user === undefined) throw new Error();
  return user;
}