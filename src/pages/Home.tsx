import NavBarComponent from "../component/NavbarComponent";
import PostComponent from "../component/PostComponent";
import SidebarComponent from "../component/SidebarComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/slices/PostSlice";
import { Spinner } from "flowbite-react";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="h-full w-full">
      <NavBarComponent />
      <div className="flex h-full gap-4">
        <SidebarComponent />
        <div className=" ml-72 mt-12 flex flex-wrap gap-12 overflow-y-auto h-fit">
          {posts.isLoading ? (
            <Spinner />
          ) : (
            posts.data.map((post, index) => (
              <PostComponent key={index} {...post} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
