import styled from 'styled-components';

type props = {
    primary?: boolean;
    children: any;
    theme?: {
        main?: string;
    };
};

const NormalButton = ({ primary, children, theme }: props) => {
    const Button = styled.button`
        background: ${primary ? 'palevioletred' : 'white'};
        color: ${primary ? 'white' : 'palevioletred'};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border: 1px dashed ${theme?.main};
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            background-color: #ccc;
        }
    `;

    Button.defaultProps = {
        theme: {
            main: 'palevioletred',
        },
    };

    return <Button>{children}</Button>;
};

export const TomatoButton = (props: any) => {
    const TomatoButton = styled(NormalButton)`
        color: tomato;
        border-color: tomato;
    `;

    return <TomatoButton {...props} />;
};

export default NormalButton;
