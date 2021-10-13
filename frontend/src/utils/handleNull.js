const handleNull = (hook, setVariable) => {
    if (hook === 'null') {
        setVariable('yes')
    }
}

export default handleNull;