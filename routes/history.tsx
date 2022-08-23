import { Head, Link } from "aleph/react";
import { Button, Container, Header, Divider, Grid, Input, Dimmer, Loader } from "https://esm.sh/semantic-ui-react";
import React from 'react';


const externalLinks = [
    ["Get Started", "https://alephjs.org/docs/get-started"],
    ["Docs", "https://alephjs.org/docs"],
    ["Github", "https://github.com/alephjs/aleph.js"],
];

export default function Index() {
    return (
        <div
            // className="w-screen flex flex-col items-center justify-center"
            // style={{
            //     height: "calc(100vh - 2 * 80px)",
            // }}
        >

            <title>お散歩ぽん 過去の記録</title>
            

            <div>
                <Header>ルート</Header>
                <p>2022/8/11 1→2</p>
                <p>2022/8/11 2→3</p>
                <p>2022/8/11 西山公園駅 → 展望台</p><br/>

            </div>
 
            <div>
                <Header>ホットスポット</Header><br/>

            </div>
            
            <div>
                <Header>現在のランク</Header>
                <p>次のランクまで後~~</p>
            </div>

        </div>

    );
}
