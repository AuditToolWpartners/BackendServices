import React from "react";
import Selects from "../../../../components/Selects";
import {makeStyles} from "@material-ui/core";
import {StoreContext} from "../../constantStore";

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
    }
})


const TabThree = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {Selects("Do you have a documented process for onboarding staff?", classes.label, api.setOnBoardingStaff, api.onBoardingStaff, true, "secondary", api.setOnBoardingStaffScore)}
            {Selects("Do you have a documented process for offboarding staff?", classes.label, api.setOffBoardingStaff, api.offBoardingStaff, true, "secondary", api.setOffBoardingStaffScore)}
        </form>

    )
}

export default TabThree