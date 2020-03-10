import React, {useState} from 'react';

function CallUserData() {
    const [userData, setUserData] = useState([]);
    fetch('/user')
        .then(res => res.json())
        .then(data => setUserData(data));

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

    </div>)
}

export default CallUserData;