import React, {useEffect, useState} from "react";
import DataImporter from "./data-inporter";
import ProcessedData from "./processed-data";


export default function Dashboard() {
    const [data, setData] = useState('');
    const [sourceType, setSourceType] = useState('text');

    return (
        <div className={'content'}>

            {
                data === '' ? <DataImporter setData={setData} setSourceType={setSourceType} /> : <ProcessedData data={data} setData={setData} sourceType={sourceType} />
            }

        </div>
    );
}