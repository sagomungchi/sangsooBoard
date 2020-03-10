import React, {useState} from 'react';

function CallBoardData() {
    const [contentData, setContentData] = useState([]);
    fetch('/content')
        .then(res => res.json())
        .then(data => setContentData(data));

    return (
        <div>
            {
                contentData.map(
                    data => (
                        <div key={data.key}>
                            {data.title}
                        </div>
                    )
                )
            }
        </div>
    )
}

export default CallBoardData;