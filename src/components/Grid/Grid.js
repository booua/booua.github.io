import styled from "styled-components"

const media = {
    xs : (styles) => `
        @media only screen and (max-width: 480px) {
            ${styles}
        }
    `,
    sm : (styles) => `
        @media only screen and (max-width: 768px) {
            ${styles}
        }
    `,
    md : (styles) => `
        @media only screen and (max-width: 992px) {
            ${styles}
        }
    `,
    lg : (styles) => `
        @media only screen and (max-width: 1200px) {
            ${styles}
        }
    `,
}

export const Row = styled.div`
    display: flex;
    ${(props) => props.collapse && media[props.collapse](`
        flex-direction: column;
    `)};
`

export const Col = styled.div`
    flex-direction: column;
    flex: ${(props) => props.size};
    ${(props) => props.hide && media[props.hide](`
        display: none;
    `)};
`