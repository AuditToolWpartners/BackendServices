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

const TabPanelVertical = (props) => {
    const { children, value, index, ...other } = props;

    return (

        <div
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

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "cente",
        backgroundColor: "primary",
        display: 'flex',
        paddingTop: 0,
    },
    tabs: {
        // color: theme.palette.getContrastText('#ff4747'),
        // backgroundColor: '#ff4747',
        // background: '#ff4747',
        // borderColor: '#ff4747',
    },
    tabss: {
        // color: theme.palette.getContrastText('#ff4747'),
        // backgroundColor: '#ff4747',
        // background: '#ff4747',
        // borderColor: '#ff4747',
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
                className={classes.tabs}
            >
                <Tab label='Organisation Details' aicon={<DoneOutlinedIcon/>} className={classes.tabss} {...a11yProps(0)} />
                <Tab label='Governance & Management' className={classes.tabss} {...a11yProps(1)} />
            </Tabs>
            <TabPanelVertical value={value} index={0}>
                <OrgDetails/>
            </TabPanelVertical>
            <TabPanelVertical value={value} index={1}>
                <p>Testing</p>
            </TabPanelVertical>
        </div>

    )
}

export default PageSelect;