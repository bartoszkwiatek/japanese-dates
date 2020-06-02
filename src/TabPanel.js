import React from 'react'
import PropTypes from 'prop-types';
import { Box, Typography } from "@material-ui/core";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );


}


export { TabPanel }