function secondLargest(numbers) {
    let sorted = numbers.sort(function(a, b) { return a - b; });

    return sorted[sorted.length - 2];
}
module.exports = secondLargest;