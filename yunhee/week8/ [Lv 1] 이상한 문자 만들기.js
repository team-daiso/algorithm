function solution(s) {
    return s.split(" ")
            .map(_ => [..._].map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join(""))
            .join(" ");
}