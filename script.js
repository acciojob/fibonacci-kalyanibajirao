function fibonacci(num) {
// your code here
	if (num === 1) {
    return 0;
  }
  if (num === 2) {
    return 1;
  }
  let sequence = [0, 1];
  for (let i = 2; i < num; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[num - 1];
}

module.exports = fibonacci;
