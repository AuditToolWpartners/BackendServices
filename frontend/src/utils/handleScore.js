const handleScore = (variable, setCategoryScore, setNistScore) => { //TODO: Add Nist Scoring
    // eslint-disable-next-line default-case
    switch (variable) {
        case 'yes':
            setCategoryScore(1)
            break;
        case 'no':
            setCategoryScore(0)
            break;
        case 'pns':
            setCategoryScore(0)
            break;
    }
}

export default handleScore