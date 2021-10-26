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
            orgDetails:{
                "totalAvailableScore":10,
                "cyberAttackCatScore":api.cyberAttackCatScore,
                "partCNIScore":api.prtCNIScore,
                "provideServicesGov":api.srvGovScore,
                "provideServicesDef":api.srvDefScore,
            },
            categoryTwo:{
                "totalAvailableScore":3,
                "score1":0,
                "score2":1
            }
        }
        const values = {
            orgDetails:{
                "orgName": api.orgName,
                "regAddress": api.regAddress,
                "companyType": api.companyType,
                "yearOI": api.yearOI,
                "sufCybAttack": api.sufCybAttack,
                "attackDetails": api.attackDetails,
                "cybInsurance": api.cybInsurance,
                "insuranceDetails": api.insuranceDetails,
                "itModels": api.itModels,
                "companySize": api.companySize,
                "employees": api.employees,
                "contractors": api.contractors,
                "region": api.region,
            },
            categoryTwo:{
                "value1": "ashdak"
            }
    }

        const test = [values, scores]
        console.log(test)

        axios.post('http://192.168.1.214:8000/audit/cyberaudit/', scores)
            .then(res => {
                console.log(res);
            }).catch(function (error) {
            console.log(error);
        })

        axios.post('http://192.168.1.214:8000/audit/cyberaudit/', values)
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