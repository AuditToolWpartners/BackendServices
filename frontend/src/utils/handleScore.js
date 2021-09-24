const handleScore = (variable, setCategoryScore, setNistScore) => { //TODO: Add Nist Scoring
    switch (variable) {
        case 'yes':
            setCategoryScore(1)
            console.log(setNistScore)
            console.log('should be 1')
            break;
        case 'no':
            setCategoryScore(0)
            console.log(setNistScore)
            console.log('should be 0')
            break;
        case 'pns':
            setCategoryScore(0)
            console.log(setNistScore)
            console.log('should be 0')
            break;

    }
}
//TODO: Figure out how to score for SelectsCustom.js

export default handleScore