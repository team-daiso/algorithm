function solution(n, arr1, arr2) {
    return arr1.map((num, idx) => [...(num | arr2[idx]).toString(2)]
                    .map(char => char === "1" ? "#" : " ")
                    .join("")
                    .padStart(n, " "));
}