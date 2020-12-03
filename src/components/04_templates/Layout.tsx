/*========== import ==========*/
import React from "react";
import styled from "styled-components";
/* organisms */
import Header from "@/src/components/03_organisms/Header";
import Footer from "@/src/components/03_organisms/Footer";
/* utils */
import { HeaderHeight, FooterHeight } from "@/src/utils/theme";
// /* type */
// interface Props {
//   className?: string;
// };

/* DOM */
const Layout: React.FC = ({children}): JSX.Element => {

  return (
    <>
    <Header />
    <Main>{children}</Main>
    <Footer />
    </>
  );
};

/* style */
const Main = styled.main`
  min-height: calc(100vh - ${HeaderHeight} - ${FooterHeight});
`;

/* export */
export default Layout;