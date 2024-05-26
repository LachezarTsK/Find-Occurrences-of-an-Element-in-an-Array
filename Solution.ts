
function occurrencesOfElement(input: number[], queries: number[], target: number): number[] {
    const indexesOfTargetOccurrences = findIndexesOfTargetOccurrences(input, target);
    return findIndexesOfQueriesForTargetOccurrences(queries, indexesOfTargetOccurrences);
};

function findIndexesOfTargetOccurrences(input: number[], target: number): number[] {
    this.NO_SUCH_FREQUENCY = -1;
    const indexesOfTargetOccurrences: number[] = new Array();

    for (let i = 0; i < input.length; ++i) {
        if (input[i] === target) {
            indexesOfTargetOccurrences.push(i);
        }
    }
    return indexesOfTargetOccurrences;
}

function findIndexesOfQueriesForTargetOccurrences(queries: number[], indexesOfTargetOccurrences: number[]): number[] {
    const indexesOfQueriesForTargetOccurrences: number[] = new Array(queries.length);
    for (let i = 0; i < queries.length; ++i) {
        if (queries[i] > indexesOfTargetOccurrences.length) {
            indexesOfQueriesForTargetOccurrences[i] = this.NO_SUCH_FREQUENCY;
            continue;
        }
        indexesOfQueriesForTargetOccurrences[i] = indexesOfTargetOccurrences[queries[i] - 1];
    }
    return indexesOfQueriesForTargetOccurrences;
}
