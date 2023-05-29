import {PropsWithChildren} from "react";
import {Container, CssBaseline} from "@mui/material";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout(props: PropsWithChildren) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true}>
        <Header/>
        { props.children }
        <Footer/>
      </Container>
    </>
  )
}
