import React from 'react';

// Components from MUI
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import axios from "axios";
import {StoreContext} from "../pages/Audit/constantStore";
// import {StoreContext} from "../pages/Audit/constantStore";


const Save = (className, color) => {
    const api = React.useContext(StoreContext);
    axios.defaults.withCredentials = true
    const handleSave = () => {
        const scores = {
            info: {
                "totalAvailableScore": 0,
                "orgName": api.orgName,
                "regAddress": api.regAddress,
            },
            digitalFootprint: {
                "totalAvailableScore": 1,
                "cybAttackScore": api.cybAttackScore,
                "sufCyberAttack": api.sufCybAttack,
            },
            industryRisk: {
                "totalAvailableScore": 1,
                "prtCNIScore": api.prtCNIScore,
                "prtCNI": api.prtCNI,
            }
        }
     console.log(test)

        axios.post('http://192.168.1.214:8000/audit/cyberaudit/', scores)
            .then(res => {
                console.log(res);
            }).catch(function (error) {
            console.log(error);
        })

    }
    return (
        <Button
            onClick={handleSave}
            className={className}
            color={color}
            variant="contained"
            endIcon={<SaveOutlinedIcon />}
        >
            Save
        </Button>
    )
}

export default Save;