import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const MainColor = {
    whiteColor: "#F9F9F9",
    bgColor: "#040714",
}

export const GlobalStyled = createGlobalStyle`
//add the reset package
${reset}

//edit the GlobalStyled content
*{
    box-sizing: border-box;
}
body{
background-color: ${MainColor.bgColor};
color: ${MainColor.whiteColor};
letter-spacing: -1px;
word-break:break-all;
}

ul, li {
    list-style: none;
}
a{
    text-decoration:none;
    color: ${MainColor.whiteColor};
}
`;
  

