function generador() {
  let quien = ["The dog", "My grandma", "His turtle", "My bird"];
  let queHizo = ["ate", "peed", "crushed", "broke"];
  let evitar = ["my homework", "the keys", "the car"];
  let cuando = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  let random_quien = Math.floor(Math.random() * quien.length);
  let random_queHizo = Math.floor(Math.random() * queHizo.length);
  let random_evitar = Math.floor(Math.random() * evitar.length);
  let random_cuando = Math.floor(Math.random() * cuando.length);
  document.getElementById("result").innerHTML =
    "<div class=' alert text-bg-success h-50'><h6 id='proporcion'>" +
    quien[random_quien] +
    " " +
    queHizo[random_queHizo] +
    " " +
    evitar[random_evitar] +
    " " +
    cuando[random_cuando] +
    "</h6></div>";
}
