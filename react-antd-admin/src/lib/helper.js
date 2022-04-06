

export function objEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

export function objExtend(obj1, obj2) {
  return Object.keys(obj2)
    .filter((k) => obj2)
    .reduce((a, k) => ({ ...a, [k]: obj2[k] }), obj1 || {});
}

export function objJoin(obj, sep=",") {
  return Object.keys(obj)
    .filter((k) => obj[k] !== null && obj[k] !== undefined)
    .reduce((a, k) => ([ ...a, `${k}:${obj[k]}` ]), [])
    .join(sep);
}

export function objSplit(txt, sep=" ") {
  return txt.split(sep)
    .map((k) => (k.split(":")))
    .reduce((a, k) => ({ ...a, [k[0]]: k[1] }), {});
}

export function objStrip(obj) {
  return Object.keys(obj)
    .filter((k) => obj[k] !== null && obj[k] !== undefined)
    .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
}

export function arrJoin(arr, sep=",") {
  return arr.join(sep);
}

export function arrStrip(arr) {
  return arr.filter((v) => v !== null);
}