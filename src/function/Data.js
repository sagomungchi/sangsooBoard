import React, {useState} from 'react';

function Data() {
    const [userData, setUserData] = useState([]);
    fetch('/user')
        .then(res => res.json())
        .then(data => setUserData(data));

    const[contentData,setContentData] = useState([]);
    fetch('/content')
        .then(res =>res.json())
        .then(data => setContentData(data));

    return (<div>
        {
            userData.map(
                data=>(
                    <div key={data.key}>
                        {data.id}
                    </div>
                )
            )
        }
        {
            contentData.map(
                data=>(
                    <div key={data.key}>
                        {data.title}
                    </div>
                )
            )
        }
    </div>)
}

export default Data;