function solution(new_id) {
  const regExp = /[a-z0-9-_.]/g;
  const DotregExp = /\.+/g;
  let id = new_id.toLowerCase().match(regExp).join('').replace(DotregExp, '.');

  id = RemoveDot(id);

  if (id.length === 0) {
    return 'aaa';
  }

  if (id.length < 3) {
    return id.padEnd(3, id[id.length - 1]);
  }

  if (id.length > 15) {
    return RemoveDot(id.slice(0, 15));
  }

  return id;
}

function RemoveDot(id) {
  if (id[0] === '.') {
    id = id.slice(1);
  }

  if (id[id.length - 1] === '.') {
    id = id.slice(0, -1);
  }

  return id;
}
