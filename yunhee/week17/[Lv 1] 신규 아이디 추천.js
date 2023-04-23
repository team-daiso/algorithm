function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w\d\-\_\.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "");

  new_id = new_id.length === 0 ? "a" : new_id.slice(0, 15).replace(/\.$/, "");

  return new_id.length > 2
    ? new_id
    : new_id.padEnd(3, new_id[new_id.length - 1]);
}
