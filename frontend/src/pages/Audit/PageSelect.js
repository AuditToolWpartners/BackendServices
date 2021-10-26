import React from 'react';

// MUI Components
import { makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';

// Local Components
import OrgDetails from './OrganisationDetails/OrganisationDetails';
import PropTypes from 'prop-types';
import Governance from "./Governance/Governance";

const TabPanelVertical = (props) => {
    const { children, value, index, ...other } = props;

    return (

        <div
            /* eslint-disable-next-line jsx-a11y/aria-role */
            role="TabPanelVertical"
            hidden={value !== index}
            id={`vertical-TabPanelVertical-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanelVertical.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel=${index}`
    };
}

const useStyles = makeStyles(() => ({
    root: {
        justifyContent: "center",
        backgroundColor: "primary",
        display: 'flex',
        paddingTop: 0,
    },
    test: {
        alignItems: "flex-center",
        display: 'flex',
        paddingTop: 10,
    },
}));

const PageSelect = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div id="test" className={classes.test}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Select Category"
                textColor="primary"
            >
                <Tab label='Organisation Details' aicon={<DoneOutlinedIcon/>} {...a11yProps(0)} />
                <Tab label='Governance & Management' {...a11yProps(1)} />
                <Tab label='Training' {...a11yProps(2)} />
                <Tab label='Identity & Access Management' {...a11yProps(3)} />
                <Tab label='Data Protection' {...a11yProps(4)} />
                <Tab label='Personnel Security' {...a11yProps(5)} />
                <Tab label='Supply Chain Security' {...a11yProps(6)} />
                <Tab label='Device Asset Security' {...a11yProps(7)} />

            </Tabs>
            <TabPanelVertical value={value} index={0}>
                <OrgDetails/>
            </TabPanelVertical>
            <TabPanelVertical value={value} index={1}>
                <Governance/>
            </TabPanelVertical>
            <TabPanelVertical value={value} index={2}>
            </TabPanelVertical>
            <TabPanelVertical value={value} index={3}>
            </TabPanelVertical>
            <TabPanelVertical value={value} index={4}>
            </TabPanelVertical>
            <TabPanelVertical value={value} index={5}>
            </TabPanelVertical>
            <TabPanelVertical value={value} index={6}>
            </TabPanelVertical>
            <TabPanelVertical value={value} index={7}>
            </TabPanelVertical>
        </div>

    )
}

export default PageSelect;