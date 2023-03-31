function solution(d, budget) {
    let answer = 0;
    d = d.sort((a,b) => a - b)
    for (let i=0; i<d.length; i++) {
        const cal = budget - d[i]
        if (cal >= 0 ){
            budget = cal
            answer ++
        }
    }
    return answer
}
