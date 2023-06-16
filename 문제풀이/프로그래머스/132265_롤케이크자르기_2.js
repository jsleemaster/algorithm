const solution = (topping) => {
  const elementNumber = new Map();
  topping.forEach((v) => {
    if (elementNumber.has(v)) {
      const val = elementNumber.get(v);
      val.duplicated++;
      elementNumber.set(v, val);
    } else {
      elementNumber.set(v, { duplicated: 1, visited: false });
    }
  });
  let result = 0;
  let [me, brother] = [0, elementNumber.size];
  for (let i = 0; i < topping.length; i++) {
    const val = elementNumber.get(topping[i]);
    if (val.duplicated >= 1) {
      val.duplicated--;
      if (val.duplicated === 0) brother--;
    }
    if (!val.visited) { val.visited = true; me++; }
    elementNumber.set(topping[i], val);
    if (me === brother) result++;
  }

  return result;
}
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])) //2