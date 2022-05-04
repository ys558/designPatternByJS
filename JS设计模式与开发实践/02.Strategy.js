const strategies = {
  'S': salary => salary * 4,
  'A': salary => salary * 3,
  'B': salary => salary * 2,
  'C': salary => salary * 0.8
};

const calculateBonues = (level, salary) => strategies[level](salary)

console.log(calculateBonues('S', 24000))// 96000