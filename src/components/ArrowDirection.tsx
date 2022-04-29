import React from 'react';
import styled from 'styled-components';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';


type Props = {
    direction: string;
};

const ArrowWrapper = styled.div`
    position: absolute;
    border-radius: 80px;
    width: 80px;
    height: 80px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: var(--white);
    z-index: 12;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--bs);
    svg {
        display: block;
        width: 50px;
        height: 50px;
        fill: var(--gray-700);
    }
`;

export const ArrowDirection = ({direction}: Props) => {
        
    return (
        <ArrowWrapper>
            {direction === "up" ? <BiUpArrowAlt/> : <BiDownArrowAlt/>}
        </ArrowWrapper>
    )
}
