import { Box, Skeleton } from "@mantine/core";
import { useRecommend } from "../../api";
import { RecommendProp } from "../../type/type";
import Reuse from "../reuseable";
import { lazy, Suspense } from "react";
import { useMediaQuery } from "@mantine/hooks";
const RecommendBody = lazy(() => import("./RecommendBody"));
const Recommend = ({ id }: { id: number }) => {
  const { data, isLoading } = useRecommend(id);
  const matches = useMediaQuery("(max-width: 800px)");
  

  if (isLoading) {
    return null;
  }

  const fix = data.find((item : RecommendProp) => item.backdrop_path !== null);
  
  return (
    <Box component="div" px={matches ? 30 : 90}>
      <Box component="div">
        <Box
          component="h2"
          mb={15}
          sx={{
            color: "white",
            textDecorationStyle: "double",
            textDecorationLine: "underline",
          }}
        >
          Recommendations
        </Box>

        {data.length && fix ? (
          <Reuse key={data[0].id}>
            {data?.map((item: RecommendProp) => (
              <Box key={item.id}>
                {item.backdrop_path && (
                  <div
                    key={item.id}
                    className="keen-slider__slide number-slide1"
                  >
                    <Suspense
                      fallback={
                        <>
                          <Skeleton
                            height={150}
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
                      <RecommendBody item={item} />
                    </Suspense>
                  </div>
                )}
              </Box>
            ))}
          </Reuse>
        ) : (
          <Box
            component="p"
            sx={{ color: "white", textDecorationLine: "line-through" , opacity : 0.5   }}
          >
            Not recommended yet
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Recommend;
