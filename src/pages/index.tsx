import {Box, Card, CardContent, Container, Grid, Link, Typography} from "@mui/material";

import RootLayout from "@/components/RootLayout";

export const metadata = {
  title: 'Arcadia Map',
  description: 'Find locations of Arcadia',
}

export default function Home() {
  return (
    <RootLayout>
      <Container>
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12}>
            <Card>
              <CardContent>
                To view our maps please <Link href={"/map"}>log in</Link>.
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} xs={6}>
            <Card>
              <CardContent>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus euismod accumsan.
                  Pellentesque commodo tristique nisi. Nullam venenatis neque a ullamcorper porta. Ut ultricies nisi
                  vitae
                  fermentum rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas turpis non
                  neque
                  scelerisque aliquet. Nam hendrerit massa quis ante laoreet, a tincidunt felis elementum. Aliquam
                  luctus
                  risus metus, vitae pharetra odio cursus a. In lobortis urna nec sollicitudin vulputate. Aenean
                  lacinia,
                  dui vitae consectetur volutpat, turpis libero dignissim erat, sed aliquam enim nulla vel felis. Aenean
                  mauris augue, efficitur vitae erat eu, tempor convallis nibh. Donec ligula diam, cursus quis imperdiet
                  in, ullamcorper in est.
                </Typography>
                <Box my={2}/>
                <Typography>In in velit a orci molestie varius vitae id dolor. Integer auctor ac enim et sodales. Donec
                  faucibus, sem at rutrum aliquet, dolor neque tempor tellus, nec lacinia metus massa nec risus. Proin
                  sit
                  amet enim ipsum. Praesent ut est semper, rhoncus orci quis, dictum arcu. Ut non quam non libero
                  ullamcorper dignissim. Sed auctor, ligula eget aliquet placerat, orci erat consequat sapien, nec
                  euismod
                  risus enim quis est. Ut vitae felis nec purus bibendum consectetur in a velit. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} xs={6}>
            <Card>
              <CardContent>
                <Typography>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Curabitur rutrum tellus est, feugiat molestie augue consectetur at. Duis venenatis ante mollis egestas
                  ornare. Proin quis eros et libero blandit suscipit vel pharetra justo. Nunc mi turpis, venenatis ut
                  tortor a, congue tincidunt metus. Quisque viverra lorem tristique leo tristique interdum. Cras
                  imperdiet, arcu vel venenatis laoreet, eros ipsum gravida libero, non congue est neque eget ligula.
                  Mauris vehicula, dolor et efficitur dignissim, leo erat lacinia mauris, quis vehicula augue nunc et
                  sapien. Nulla rhoncus ex nisl, non pretium nisi hendrerit et. Proin imperdiet aliquam pulvinar. Duis
                  pharetra velit in libero molestie, quis pellentesque purus maximus. Cras interdum elementum nisi,
                  mollis blandit velit luctus vel. Donec ultricies, ante sed fringilla pulvinar, tortor purus iaculis
                  ex, sed dictum erat leo non eros. Ut pharetra nec ipsum a pretium. Aliquam auctor ac mauris ac
                  aliquet.
                </Typography>
                <Box my={2}/>
                <Typography>Ut posuere urna eros. Duis turpis felis, feugiat a turpis ac, sodales dignissim erat. Sed
                  sit amet ex dui. In accumsan, sem eu imperdiet volutpat, metus lectus laoreet turpis, sed eleifend
                  arcu arcu sed nibh. Aliquam orci sem, accumsan eget pharetra non, pulvinar a lectus.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>

    </RootLayout>
  );
}