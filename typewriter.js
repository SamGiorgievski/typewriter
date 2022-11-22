const sentence = "hello there from lighthouse labs";
x = 1000;



for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, x)
  x += 50;
}
setTimeout(() => {console.log("\n")}, x+(50*sentence.length));