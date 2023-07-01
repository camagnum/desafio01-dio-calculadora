import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #555;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    p {
        width: 10%;
        height: 75px;

        background-color: #555;
        color: #fff;
        border: none;
        padding: 0 10px;
        display: flex;
        align-items: center;

        font: bold 14px 'Roboto','sans-serif';
        color: #00CC00;
    }

    input {
        width: 90%;
        height: 75px;
        background-color: #555;
        color: #fff;
        border: none;
        padding: 0 10px;

        text-align: right;
        font-size: 24px;
        font-family: 'Roboto';
    }
`