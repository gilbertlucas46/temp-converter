import styled from 'styled-components';

const FormStyles = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    .form-group {
        position: relative;
        &:before {
            content: '';
        }
        h3 {
            margin: 0;
            text-align: center;
            font-weight: 100;
            font-size: 3rem;
        }
    }
    input {
        width: 4ch;
        padding: 0;
        font-size: 5rem;
        border: 0;
        margin: auto;
        display: block;
        text-align: center;
        background-color: transparent;
        &:focus-visible {
            outline: none;
            border-bottom: 2px solid rgba(124, 209, 243, 1);
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
`;

export default FormStyles;
