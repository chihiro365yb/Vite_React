import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.less';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import Buttons, { TomatoButton } from './components/Buttons';

const Title = styled.h1`
    font-size: 1.5em;
    text-algin: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    margin: auto;
    background: papayawhip;
    padding: 4em;
`;

const Input = styled.input.attrs({
    type: 'checkbox',
})``;

const Label = styled.label`
    align-items: center;
    display: flex;
    gap: 8px;
    margin: 8px;
`;

type labelProps = {
    $mode?: string;
};

const LabelText = styled.span`
    ${(props: labelProps) => {
        switch (props.$mode) {
            case 'dark':
                return css`
                    background-color: black;
                    color: #fff;
                    ${Input}:checked + && {
                        color: blue;
                    }
                `;
                break;

            default:
                return css`
                    background-color: #fff;
                    color: black;
                    ${Input}:checked + && {
                        color: red;
                    }
                `;
                break;
        }
    }}
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

const theme = {
    main: 'mediumseagreen',
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <App /> */}
        <Wrapper>
            <Title>hello,world</Title>
        </Wrapper>
        <ThemeProvider theme={theme}>
            <Buttons>Normal</Buttons>
            <Buttons primary>primary</Buttons>
            <TomatoButton>tomato</TomatoButton>
        </ThemeProvider>

        <div>
            <Label>
                <Input defaultChecked />
                <LabelText>Foo</LabelText>
            </Label>
            <Label>
                <Input />
                <LabelText $mode="dark">Foo</LabelText>
            </Label>
            <Label>
                <Input defaultChecked />
                <LabelText>Foo</LabelText>
            </Label>
            <Label>
                <Input defaultChecked />
                <LabelText $mode="dark">Foo</LabelText>
            </Label>
        </div>

        <Rotate>&lt; 💅🏾 &gt</Rotate>
    </React.StrictMode>
);
