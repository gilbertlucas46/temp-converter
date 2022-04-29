
import React from 'react';
import styled from 'styled-components';
import { IoIosCloudyNight } from 'react-icons/io';
import { WiDayCloudy } from 'react-icons/wi';

const ToggleContainer = styled.button`
    position: fixed;
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.gradient};
    width: 8rem;
    height: 3.5rem;
    margin: 0 auto;
    border-radius: 30px;
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    font-size: 0.5rem;
    padding: 0.5rem 0.8rem;
    overflow: hidden;
    cursor: pointer;
    top: 20px;
    margin: auto;
    right: 20px;
    z-index: 14;
    align-items: center;
    svg {
        width: 20px;
        height: 20px;
        fill: var(--white);
        transition: all 0.3s linear;

        &:first-child {
            transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
        }

        &:nth-child(2) {
            transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
        }
    }
`;
  
export const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
            <WiDayCloudy/>
            <IoIosCloudyNight/>
        </ToggleContainer>
    )
}
  