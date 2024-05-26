
using System;
using System.Collections.Generic;

public class Solution
{
    static readonly int NO_SUCH_FREQUENCY = -1;
    public int[] OccurrencesOfElement(int[] input, int[] queries, int target)
    {
        IList<int> indexesOfTargetOccurrences = FindIndexesOfTargetOccurrences(input, target);
        return FindIndexesOfQueriesForTargetOccurrences(queries, indexesOfTargetOccurrences);
    }

    private IList<int> FindIndexesOfTargetOccurrences(int[] input, int target)
    {
        IList<int> indexesOfTargetOccurrences = new List<int>();
        for (int i = 0; i < input.Length; ++i)
        {
            if (input[i] == target)
            {
                indexesOfTargetOccurrences.Add(i);
            }
        }
        return indexesOfTargetOccurrences;
    }

    private int[] FindIndexesOfQueriesForTargetOccurrences(int[] queries, IList<int> indexesOfTargetOccurrences)
    {
        int[] indexesOfQueriesForTargetOccurrences = new int[queries.Length];
        for (int i = 0; i < queries.Length; ++i)
        {
            if (queries[i] > indexesOfTargetOccurrences.Count)
            {
                indexesOfQueriesForTargetOccurrences[i] = NO_SUCH_FREQUENCY;
                continue;
            }
            indexesOfQueriesForTargetOccurrences[i] = indexesOfTargetOccurrences[queries[i] - 1];
        }
        return indexesOfQueriesForTargetOccurrences;
    }
}
