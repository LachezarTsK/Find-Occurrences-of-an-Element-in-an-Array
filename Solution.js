
/**
 * @param {number[]} input
 * @param {number[]} queries
 * @param {number} target
 * @return {number[]}
 */
var occurrencesOfElement = function (input, queries, target) {
    const indexesOfTargetOccurrences = findIndexesOfTargetOccurrences(input, target);
    return findIndexesOfQueriesForTargetOccurrences(queries, indexesOfTargetOccurrences);
};

/**
 * @param {number[]} input
 * @param {number} target
 * @return {number[]}
 */
function findIndexesOfTargetOccurrences(input, target) {
    this.NO_SUCH_FREQUENCY = -1;
    const indexesOfTargetOccurrences = new Array();

    for (let i = 0; i < input.length; ++i) {
        if (input[i] === target) {
            indexesOfTargetOccurrences.push(i);
        }
    }
    return indexesOfTargetOccurrences;
}

/**
 * @param {number[]} queries
 * @param {number[]} indexesOfTargetOccurrences
 * @return {number[]}
 */
function  findIndexesOfQueriesForTargetOccurrences(queries, indexesOfTargetOccurrences) {
    const indexesOfQueriesForTargetOccurrences = new Array(queries.length);
    for (let i = 0; i < queries.length; ++i) {
        if (queries[i] > indexesOfTargetOccurrences.length) {
            indexesOfQueriesForTargetOccurrences[i] = this.NO_SUCH_FREQUENCY;
            continue;
        }
        indexesOfQueriesForTargetOccurrences[i] = indexesOfTargetOccurrences[queries[i] - 1];
    }
    return indexesOfQueriesForTargetOccurrences;
}
