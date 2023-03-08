function solution(a, b) {
    let calendar = [];
    
    switch (a) {
		case 1: case 4: case 7:
        calendar = ['THU', 'FRI','SAT', 'SUN','MON','TUE','WED'];
        break;
    case 2: case 8: 
        calendar = ['SUN','MON','TUE','WED', 'THU', 'FRI', 'SAT'];
        break;
    case 3: case 11:
        calendar = ['MON','TUE','WED', 'THU', 'FRI','SAT', 'SUN'];
        break;
    case 5: 
        calendar = ['SAT', 'SUN','MON','TUE','WED', 'THU', 'FRI'];
        break;
    case 6: 
        calendar = ['TUE','WED', 'THU', 'FRI','SAT', 'SUN','MON'];
        break;
    case 9: case 12:
        calendar = ['WED', 'THU', 'FRI','SAT', 'SUN','MON','TUE'];
        break;
    case 10: 
        calendar = ['FRI','SAT', 'SUN','MON','TUE','WED', 'THU'];
        break;
    }
    return calendar[b % 7]
}

// 다른 방법 
function solution(a, b) {
    return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
}