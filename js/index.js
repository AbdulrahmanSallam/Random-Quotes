var container = [
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
  <br><br>― Marilyn Monroe`,
  `“Be yourself; everyone else is already taken.”
  <br><br>― Oscar Wilde`,
  `“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”
  <br><br>― John Green, The Fault in Our Stars`,
  `“All you need is love. But a little chocolate now and then doesn't hurt.”
  <br><br>― Charles M. Schulz`,
  `“Life isn't about finding yourself. Life is about creating yourself.”
  <br><br>― George Bernard Shaw`,
  `“Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.”
  <br><br>― Jim Henson`,
  `
  “Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”
  <br><br>― J.K. Rowling, Harry Potter and the Deathly Hallows`,
  `“If one cannot enjoy reading a book over and over again, there is no use in reading it at all.”
  <br><br>― Oscar Wilde`,
  `“It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all—in which case, you fail by default.”
  <br><br>― J.K. Rowling`,
  `“If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.”
  <br><br>― Albert Einstein`,
];

var num;

function getRandomNumber() {
  var result = Math.trunc(Math.random() * 10);
  while (result == num) {
    result = Math.trunc(Math.random() * 10);
  }
  num = result;
  console.log(result);
  return result;
}

function getQuote() {
  var temp = getRandomNumber();
  document.getElementById("item").innerHTML = container[temp];
}
