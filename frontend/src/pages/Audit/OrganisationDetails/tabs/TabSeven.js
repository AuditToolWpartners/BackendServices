import React from 'react';
import { makeStyles } from '@material-ui/core';
import {StoreContext} from "../../constantStore";
import Selects from "../../../../components/Selects";
import ConditionalText from "../../../../components/ConditionalText";

const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
    },
    fields: {
      marginTop: 20,
    },
    bttn: {
      margin: 10
    },
    label: {
      marginTop: 20,
      fontSize: 14,
      textAlign: 'left',
      paddingLeft: 14
    },
})

const TabSeven = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <p>Do you have any of the folowing for your organisation:</p>
            {Selects("Website", classes.label, api.setWebsite, api.website, true, "secondary", api.setWebsiteScore)}
            {Selects("LinkedIn", classes.label, api.setLinkedIn, api.linkedIn, true, "secondary", api.setLinkedInScore)}
            {Selects("Twitter", classes.label, api.setTwitter, api.twitter, true, "secondary", api.setTwitterScore)}
            {Selects("Facebook", classes.label, api.setFacebook, api.facebook, true, "secondary", api.setFacebookScore)}
            {Selects("Instagram", classes.label, api.setInstagram, api.instagram, true, "secondary", api.setInstagramScore)}

            {Selects("Other", classes.label, api.setOtherSocials, api.otherSocials, true, "secondary", api.setPlaceholder)}
            {ConditionalText(api.otherSocials, 'yes', classes.field, api.setOtherSocialsDetails, api.otherSocialsDetails)}
        </form>
    );
}

export default TabSeven;