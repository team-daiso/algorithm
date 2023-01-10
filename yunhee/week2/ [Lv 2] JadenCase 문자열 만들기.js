function solution(s) {
    return s.split(" ")
        .map(char => char && char[0].toUpperCase() + char.slice(1).toLowerCase())
        .join(" ")
}