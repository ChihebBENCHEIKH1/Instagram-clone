import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner/Spinner";
import { StoryBar } from "../components/StoryBar/StoryBar";
import { SideNavBar } from "../components/SideBar/SideBar";
import { Posts } from "../components/Posts/Posts";
import { RightBar } from "../components/RightBar/RightBar";

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyapi.io/data/v1/post", {
          headers: {
            "app-id": "65fd41c85e980b3d69ac22dd",
          },
        });
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className="flex">
        <div className="fixed  lg-desktop:left-30% md-tablet:left-10% md:left-22% md-desktop:left-18% left-2% ">
          <StoryBar posts={data} />
        </div>

        <div className="fixed top-0 h-full">
          <SideNavBar />
        </div>
        <div className="absolute left-1% lg-desktop:left-35%  xl:left-26% 2xl:left-3/5 lg:left-1/4 md:left-1/4 sm:left-1/4 sm-tablet:left-14% sm-medium:left-7.2% mt-36 overflow-y-auto">
          <Posts data={data} />
        </div>
        <div className="fixed top-0 left-70% h-full w-full">
          <RightBar data={data} />
        </div>
      </div>
    </>
  );
};
