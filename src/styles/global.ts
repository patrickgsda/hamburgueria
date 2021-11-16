import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        --gray0: #F5F5F5;
        --gray1: #333333;
        --gray2: #828282;
        --gray3: #E0E0E0;
        --gray4: #BDBDBD;
        --negative: #E60000;
        --warring: #FFCD07;
        --success: #168821,
        --information: #155BCB;
    }

    body {
        /* background: ; */
        font-family: 'Inter', sans-serif;
    }

    border-style, input, button {
        // font and font-size
    }

    h1, h2, h3, h4, h5, h6 {
        //font nad font-size
    }

    button {
        cursor: pointer;
    }

    a {
        color: var(--gray4);
        text-decoration: none;
    }
`;
