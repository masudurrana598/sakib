import React, {useRef, useState} from "react";
import DataImporter from "./setting-data-inporter";


function Settings() {
   
    return (
        <>
            <div className={'second-header-bar'}>
                <div className="second-header-title">
                   
                    <span>
                        Account Settings
                    </span>
                </div>
            </div>

            <div className="d-flex flex-row h-100">
			      <DataImporter />

            </div>
        </>
    );
}

export default Settings