import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core';

// Components from MUI
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Local components
import Save from "../../../components/Save";
import Buttons from '../../../components/Buttons';
import TabPanel from '../../../components/TabPanel';
import TabOne from "./tabs/TabOne";
import TabTwo from "./tabs/TabTwo";
import TabThree from "./tabs/TabThree";

// Icons from MUI
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import TabFour from "./tabs/TabFour";
import TabFive from "./tabs/TabFive";

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

const Governance = () => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    useEffect(() => {}, []);

    const tabNextButton = () => {
        setTabValue(tabValue + 1)
    };

    const tabPrevButton = () => {
        setTabValue(tabValue - 1)
    };

    const HandleTabChange = (event, newValue) => {
        setTabValue(newValue)
    };

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleKeyDown = (e) => {
        switch(e.keyCode) {
            case 37:
                if (tabValue > 0) {
                    setTabValue(tabValue - 1)
                } break
            case 39:
                if (tabValue <= 5) {
                    setTabValue(tabValue + 1)
                } break
            default: return
        }
    }

    return (
        <Container>
            <Tabs value={tabValue} onChange={HandleTabChange} textColor="primary" variant="scrollable">
                <Tab label="1.1" {...a11yProps(0)} />
                <Tab label="1.2" {...a11yProps(1)} />
                <Tab label="1.3" {...a11yProps(3)} />
                <Tab label="1.4" {...a11yProps(4)} />
                <Tab label="1.5" {...a11yProps(5)} />
                <Tab label="1.6" {...a11yProps(6)} />
                <Tab label="1.7" {...a11yProps(7)} />
                <Tab label="" {...a11yProps(8)} />
            </Tabs>
            {document.onkeydown = handleKeyDown}
            <TabPanel value={tabValue} index={0}>
                <TabOne/>
                {Buttons(tabNextButton, classes.bttn, "primary", <KeyboardArrowRightIcon/>, "Next")}
                {Save(classes.bttn, "primary","Save")}
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <TabTwo/>
                {Buttons(tabPrevButton, classes.bttn, "primary", <KeyboardArrowLeftIcon/>, "Previous")}
                {Buttons(tabNextButton, classes.bttn, "primary", <KeyboardArrowRightIcon/>, "Next")}
                {Save(classes.bttn, "primary","Save")}
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                <TabThree/>
                {Buttons(tabPrevButton, classes.bttn, "primary", <KeyboardArrowLeftIcon/>, "Previous")}
                {Buttons(tabNextButton, classes.bttn, "primary", <KeyboardArrowRightIcon/>, "Next")}
                {Save(classes.bttn, "primary","Save")}
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
                <TabFour/>
                {Buttons(tabPrevButton, classes.bttn, "primary", <KeyboardArrowLeftIcon/>, "Previous")}
                {Buttons(tabNextButton, classes.bttn, "primary", <KeyboardArrowRightIcon/>, "Next")}
                {Save(classes.bttn, "primary","Save")}
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
                <TabFive/>
                {Buttons(tabPrevButton, classes.bttn, "primary", <KeyboardArrowLeftIcon/>, "Previous")}
                {Buttons(tabNextButton, classes.bttn, "primary", <KeyboardArrowRightIcon/>, "Next")}
                {Save(classes.bttn, "primary","Save")}
            </TabPanel>
            <TabPanel value={tabValue} index={5}>
                {Buttons(tabPrevButton, classes.bttn, "primary", <KeyboardArrowLeftIcon/>, "Previous")}
                {Buttons(tabNextButton, classes.bttn, "primary", <KeyboardArrowRightIcon/>, "Next")}
                {Save(classes.bttn, "primary","Save")}
            </TabPanel>
            <TabPanel value={tabValue} index={6}>
                {Buttons(tabPrevButton, classes.bttn, "primary", <KeyboardArrowLeftIcon/>, "Previous")}
                {Save(classes.bttn, "primary","Save")}
            </TabPanel>
        </Container>
    )

}

export default Governance;
