import { Box, Container, Skeleton } from "@mantine/core";
import HeroLoader from "../../Loader/heroLoader";
import { useTv } from "../../api";
import Reuse from "../../componet/reuseable";
import { tv } from "../../type/type";
import { lazy, Suspense } from "react";
import Air from "./Air";
const TvBody = lazy(() => import("./TvBody"));
const Tv = () => {
  const day = useTv("day");

  if (day.isLoading) {
    return <HeroLoader />;
  }

  return (
    <Container size={"86.5rem"}>
      {/* Day */}
      <Box
        component="h2"
        mb={8}
        sx={{
          color: "white",
          textDecorationLine: "underline",
          textDecorationStyle: "double",
        }}
      >
        Trending Day
      </Box>
      <Reuse>
        {day.data.map((item: tv) => (
          <Box key={item.id} className="keen-slider__slide number-slide1">
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
              <TvBody item={item} />
            </Suspense>
          </Box>
        ))}
      </Reuse>

      {/* air */}
      <Air />
    </Container>
  );
};

export default Tv;
