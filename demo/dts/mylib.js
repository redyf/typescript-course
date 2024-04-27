// summing thins together, returning the total
function add(a, b, ...args) {
  let total = a + b;
  for (let n of args) {
    total += n;
  }
  return total;
}

// array of numbers, returning the maximum value
function max(arr) {
  if (arr.length === 0) {
    return null;
  }
  return arr.reduce((a, b) => Math.max(a, b));
}

// changes text to upper of lowercase, returns the new text
function setCase(message, kind) {
  if (kind === "uppercase") {
    return message.toUpperCase();
  } else if (kind === "lowercase") {
    return message.toLowerCase();
  } else {
    throw new Error("invalid kind: must be 'uppercase' or 'lowercase'");
  }
}

// return another function
function quote(message) {
  return () => {
    return `"${message}"`;
  };
}

module.exports = {
  add,
  max,
  quote,
  setCase,
};
