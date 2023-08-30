import { Box, Container, Grid, Skeleton, createStyles } from "@mantine/core";
import { useUpcoming } from "../../api";
import { upComingProp } from "../../type/type";
import {lazy,Suspense} from "react"
import Reuse from "../reuseable";
import { useMediaQuery } from "@mantine/hooks";

const UpComingBody = lazy(() => import("./UpComingBody"))

const useStyle = createStyles((theme) => ({
  res : {
    [theme.fn.smallerThan("md")] : {
      // display : "none"
    }
  }
}) )


const UpComing = () => {
  const { classes } = useStyle();
  const { data, isLoading } = useUpcoming();
   const matches = useMediaQuery("(min-width: 60em)");

  

  if (isLoading) {
    return <h1>is Loading</h1>;
  }

  return (
    <Container mt={10} size={"86.5rem"} className={classes.res}>
      <Box py={20} component="h2" sx={{ color: "white" }}>
        Upcoming Movie
      </Box>
      {matches ? (
        <Grid columns={5}>
          {data.map((item: upComingProp) => (
            <Grid.Col lg={1}>
              <Suspense
                fallback={
                  <>
                    <Skeleton
                      height={350}
                      width={"100%"}
                      sx={{
                        "&::after": {
                          backgroundColor: "#000000db",
                        },
                      }}
                    />
                  </>
                }
              >
                <UpComingBody item={item} />
              </Suspense>
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        <Reuse>
          {data.map((item: upComingProp) => (
            <div key={item.id} className="keen-slider__slide number-slide1">
              <Suspense
                fallback={
                  <>
                    <Skeleton
                      height={250}
                      width={"100%"}
                      sx={{
                        "&::after": {
                          backgroundColor: "#000000db",
                        },
                      }}
                    />
                  </>
                }
              >
                <UpComingBody item={item} />
              </Suspense>
            </div>
          ))}
        </Reuse>
      )}
    </Container>
  );
};

export default UpComing;