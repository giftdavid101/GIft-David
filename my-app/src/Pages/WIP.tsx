import React from 'react';
import WorkSpace from "../assets/img/Wip.jpg";
import styled from "styled-components";


const WIPStyle = styled.div`
width: 100%;

`

const Wip = () => {
    return (
        <WIPStyle>
            <div className={"header-text"}>
                <h1>GIFT DAVID Portfolio</h1>
                <h3>WORK IN PROGRESS .....</h3>
            </div>
            <img className={"emage-container"} src={WorkSpace} alt={"Work in Progress"} />
        </WIPStyle>
    );
};

export default Wip;