
class Solution {

    private companion object {
        const val NO_SUCH_FREQUENCY = -1
    }

    fun occurrencesOfElement(input: IntArray, queries: IntArray, target: Int): IntArray {
        var indexesOfTargetOccurrences = findIndexesOfTargetOccurrences(input, target)
        return findIndexesOfQueriesForTargetOccurrences(queries, indexesOfTargetOccurrences)
    }

    private fun findIndexesOfTargetOccurrences(input: IntArray, target: Int): List<Int> {
        val indexesOfTargetOccurrences = ArrayList<Int>()
        for (i in input.indices) {
            if (input[i] == target) {
                indexesOfTargetOccurrences.add(i)
            }
        }
        return indexesOfTargetOccurrences
    }

    private fun findIndexesOfQueriesForTargetOccurrences(queries: IntArray, indexesOfTargetOccurrences: List<Int>): IntArray {
        val indexesOfQueriesForTargetOccurrences = IntArray(queries.size)
        for (i in queries.indices) {
            if (queries[i] > indexesOfTargetOccurrences.size) {
                indexesOfQueriesForTargetOccurrences[i] = NO_SUCH_FREQUENCY
                continue
            }
            indexesOfQueriesForTargetOccurrences[i] = indexesOfTargetOccurrences[queries[i] - 1]
        }
        return indexesOfQueriesForTargetOccurrences
    }
}
