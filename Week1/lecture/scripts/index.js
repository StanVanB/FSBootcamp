function Search(list, element) {
    for(let item of list) {
        if(item === element) {
            return true;
        }
    }
    return false;
}
function max(list) {
    let max = 0;
    for(let num of list) {
        if(num > max) {
            max = num;
        }
    }
    return max;

}
const num_list = [1, 0.2, 4, 780820, 9, 200, 84, 23, 86, -463, 64, 232, 65.352, 76.32, -523, -5234131, 33131];
console.log(max(num_list));
let stop = 10;
while(stop > 10) {
    console.log(stop);
}