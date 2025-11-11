export function packageNameCamelCase({ packageName }) {
  return packageName.split(" ").reduce((a, b, i) => {
    if (i === 0) {
      return a + b.toLowerCase();
    } else {
      return a + b;
    }
  }, "");
}
