import React from 'react'

export default function Home() {
    var arr = [];

    for (let index = 1; index < 1000; index++) {
        arr.push(`AwokAwok${index}x `);
        
    }
    return (
        <div>
            <p style={{
                fontWeight: 'bold',
                fontSize: '28px'
            }}>{arr}</p>
        </div>
    )
}
