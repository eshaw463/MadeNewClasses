let items = ["Pizza", "Salad", "Soda"];

let lines = items.map(
  function(item) {
    return "• " + item;
  }
);

let result = lines.join("\n");    // result is "• Pizza\n• Salad\n• Soda"

console.log(result)