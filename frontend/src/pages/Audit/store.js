import React, {createContext} from 'react';
import PropTypes from "prop-types";

export const StoreContext = createContext({});

export const Provider = props => {
    const {
        orgName: userOrgName,
        companyType: userCompanyType,
        children
    } = props;

    const [orgName, setOrgName] = React.useState(userOrgName);
    const [companyType, setCompanyType] = React.useState(userCompanyType);

    const wordsContext = {
        orgName,
        setOrgName,
        companyType,
        setCompanyType
    }

    return <StoreContext.Provider value={wordsContext}>{children}</StoreContext.Provider>;
};

export const {Consumer} = StoreContext;

Provider.propTypes = {
    orgName: PropTypes.string,
    companyType: PropTypes.string
};

Provider.defaultProps = {
    orgName: '',
    companyType: ''
};

export default Provider;