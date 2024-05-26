
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private static final int NO_SUCH_FREQUENCY = -1;

    public int[] occurrencesOfElement(int[] input, int[] queries, int target) {
        List<Integer> indexesOfTargetOccurrences = findIndexesOfTargetOccurrences(input, target);
        return findIndexesOfQueriesForTargetOccurrences(queries, indexesOfTargetOccurrences);
    }

    private List<Integer> findIndexesOfTargetOccurrences(int[] input, int target) {
        List<Integer> indexesOfTargetOccurrences = new ArrayList<>();
        for (int i = 0; i < input.length; ++i) {
            if (input[i] == target) {
                indexesOfTargetOccurrences.add(i);
            }
        }
        return indexesOfTargetOccurrences;
    }

    private int[] findIndexesOfQueriesForTargetOccurrences(int[] queries, List<Integer> indexesOfTargetOccurrences) {
        int[] indexesOfQueriesForTargetOccurrences = new int[queries.length];
        for (int i = 0; i < queries.length; ++i) {
            if (queries[i] > indexesOfTargetOccurrences.size()) {
                indexesOfQueriesForTargetOccurrences[i] = NO_SUCH_FREQUENCY;
                continue;
            }
            indexesOfQueriesForTargetOccurrences[i] = indexesOfTargetOccurrences.get(queries[i] - 1);
        }
        return indexesOfQueriesForTargetOccurrences;
    }
}
