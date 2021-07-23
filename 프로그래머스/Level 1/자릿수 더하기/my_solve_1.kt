class Solution {
    fun solution(n: Int): Int {
        var answer = 0

        var num = n.toString()
        for (i in 0..(num.length - 1)) {
            answer += Character.getNumericValue(num[i])
        }

        return answer
    }
}