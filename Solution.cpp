
#include <span>
#include <array>
#include <vector>
using namespace std;

class Solution {

    static const int NO_SUCH_FREQUENCY = -1;

public:
    vector<int> occurrencesOfElement(const vector<int>& input, const vector<int>& queries, int target) const {
        vector<int> indexesOfTargetOccurrences = findIndexesOfTargetOccurrences(input, target);
        return findIndexesOfQueriesForTargetOccurrences(queries, indexesOfTargetOccurrences);
    }

private:
    vector<int> findIndexesOfTargetOccurrences(span<const int> input, int target) const {
        vector<int> indexesOfTargetOccurrences;
        for (size_t i = 0; i < input.size(); ++i) {
            if (input[i] == target) {
                indexesOfTargetOccurrences.push_back(i);
            }
        }
        return indexesOfTargetOccurrences;
    }

    vector<int> findIndexesOfQueriesForTargetOccurrences(span<const int> queries, span<const int> indexesOfTargetOccurrences) const {
        vector<int> indexesOfQueriesForTargetOccurrences(queries.size());
        for (size_t i = 0; i < queries.size(); ++i) {
            if (queries[i] > indexesOfTargetOccurrences.size()) {
                indexesOfQueriesForTargetOccurrences[i] = NO_SUCH_FREQUENCY;
                continue;
            }
            indexesOfQueriesForTargetOccurrences[i] = indexesOfTargetOccurrences[queries[i] - 1];
        }
        return indexesOfQueriesForTargetOccurrences;
    }
};
