const handleSubmits = (hook, setError) => {
    setError(false)

    if(hook == '') {
        setError(true)
    }

}

export default handleSubmits;