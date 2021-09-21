import React, {createContext} from 'react';
import PropTypes from "prop-types";

export const StoreContext = createContext({});

export const Provider = props => {
    const {
        word: initialWord,
        selectedWord: initialSelectedWord,
        children
    } = props;

    const [word, setWord] = React.useState(initialWord);
    const [selectedWord, setSelectedWord] = React.useState(initialSelectedWord);

    const wordsContext = {
        word,
        setWord,
        selectedWord,
        setSelectedWord
    }

    return <StoreContext.Provider value={wordsContext}>{children}</StoreContext.Provider>;
};

export const {Consumer} = StoreContext;

Provider.propTypes = {
    word: PropTypes.string,
    selectedWord: PropTypes.string
};

Provider.defaultProps = {
    word: '',
    selectedWord: ''
};

export default Provider;