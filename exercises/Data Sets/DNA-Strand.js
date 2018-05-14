function DNAStrand(dna){
    if (typeof dna == 'string' || dna instanceof String) {
        if (dna.length > 0) {
            for (let i = 0; i < dna.length; i++) {
                dna.replace(/A/gi, 'T');
                dna.replace(/T/gi, 'A');
                dna.replace(/G/gi, 'C');
                dna.replace(/C/gi, 'G');
                console.log(dna)
            }
            
            return dna;
        } else {
            return 'Input a string with at least one char.';
        }
    } else {
        return 'Input a valid string.'
    }
}

console.log(DNAStrand('ATTGC'));