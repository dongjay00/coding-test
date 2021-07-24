class Solution {
    fun solution(arr: IntArray): ArrayList<Int> {
        var answer = ArrayList<Int>()
        var min_value = arr[0]
        for (i in 1..(arr.size - 1)) {
            if(min_value > arr[i]) {
                min_value = arr[i]
            }
        }
        if(arr.size > 1) {
            for (j in 0..(arr.size - 1)) {
                if(arr[j] !== min_value) {
                    answer.add(arr[j])
                }
            } 
        } else {
            answer.add(-1)
        }

        return answer
    }
}