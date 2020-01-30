import React from 'react';
import Doctors from './Doctors/Doctors';
import {doctors} from './Doctors/constants';
import './consultDoc.css'

export function ConsultDoc(){
    //API call
    return (
        <div>
            <Doctors docs={doctors} />
        </div>

    );
}