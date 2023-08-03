import "./styles.css";

export default function App() {
  function spinningWords() {
    let frase = "Hola everardo ramirez como estás";

    return frase
      .split(" ")
      .map((i) =>
        i.length > 4 ? i.split("").reverse().toString().replace(/,/g, "") : i
      )
      .toString()
      .replace(/,/g, " ");
  }

  function spinWords(words) {
    return words
      .split(" ")
      .map(function (word) {
        return word.length > 4 ? word.split("").reverse().join("") : word;
      })
      .join(" ");
  }

  function spinWords2(string) {
    return string.replace(/\w{5,}/g, function (w) {
      return w.split("").reverse().join("");
    });
  }

  function spinWords3(words) {
    return words
      .split(" ")
      .map((w) => (w.length < 5 ? w : w.split("").reverse().join("")))
      .join(" ");
  }

  function spinWords4(str) {
    return str.replace(/\w{5,}/g, function (w) {
      return w.split("").reverse().join("");
    });
  }

  let fraseSwip = spinningWords();
  console.log(fraseSwip);
  spinningWords();
  return (
    <div className="App">
      <input />
    </div>
  );
}
