function solution(strings, n) {
    return strings.map(str => str[n] + str)
                  .sort()
                  .map(str => str.substring(1));
}

/*
	n번째 인덱스가 같은 경우 사전순으로 정렬해줘야하므로 n번째 인덱스를 맨앞에 붙여주고 정렬한 다음 맨 앞에 붙였던 문자를 제거해준다!
*/