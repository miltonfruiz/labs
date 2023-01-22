/* Ejercicio 3.3

Para una palabra dada, calculamos su puntuación en Scrabble®

1 Añadir anotaciones de tipo siempre que sea posible */

function computeScore(word: string) {
    const letters = word.toUpperCase().split('');
    return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0);
}
function getPointsFor(letter: string) {
    const lettersAndPoints: [string, number][] = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];
    return lettersAndPoints.reduce((computedScore: number, pointsTuple) => {
        const [letters, score]: [string, number] = pointsTuple;
        if (letters.split('').find((ll) => ll === letter)) {
            return computedScore += score;
        }
        return computedScore;
    },  0);
}

console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos.`);


