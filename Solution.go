
package main

import "fmt"

const NO_SUCH_FREQUENCY = -1

func occurrencesOfElement(input []int, queries []int, target int) []int {
	var indexesOfTargetOccurrences = findIndexesOfTargetOccurrences(input, target)
	return findIndexesOfQueriesForTargetOccurrences(queries, indexesOfTargetOccurrences)
}

func findIndexesOfTargetOccurrences(input []int, target int) []int {
	var indexesOfTargetOccurrences = make([]int, 0)
	for i := range input {
		if input[i] == target {
			indexesOfTargetOccurrences = append(indexesOfTargetOccurrences, i)
		}
	}
	return indexesOfTargetOccurrences
}

func findIndexesOfQueriesForTargetOccurrences(queries []int, indexesOfTargetOccurrences []int) []int {
	var indexesOfQueriesForTargetOccurrences = make([]int, len(queries))
	for i := range queries {
		if queries[i] > len(indexesOfTargetOccurrences) {
			indexesOfQueriesForTargetOccurrences[i] = NO_SUCH_FREQUENCY
			continue
		}
		indexesOfQueriesForTargetOccurrences[i] = indexesOfTargetOccurrences[queries[i]-1]
	}
	return indexesOfQueriesForTargetOccurrences
}
