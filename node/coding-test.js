
// [2, 1, 3, 5, 2, 12]
// 이 숫자들의 랭킹으로 바꿔라


const arr = [2, 1, 3, 5, 2, 12];

arr.sort((a, b) => {
    return b - a;
});
console.log(arr);

const result = [];
const rankMap = new Map();

let rank = 0;
for (let num of arr) {
    if (!rankMap.has(num)) {
        rankMap.set(num, ++rank);
    }
    console.log(rank, '=>', num);
    result.push(rankMap.get(num));
}

console.log(result);

