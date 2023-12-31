import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help Children get better education ",
    createdAt: "2023-01-28T15:00:00.607+000",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help Children get better education ",
    createdAt: "2023-01-28T15:00:00.607+000",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help Children get better education ",
    createdAt: "2023-01-28T15:00:00.607+000",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Help Children get better education ",
    createdAt: "2023-01-28T15:00:00.607+000",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailsPage = () => {
  return (
    <>
      <MainLayout>
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap:x-5 lg:items-start">
          <article className="flex-1">
            <BreadCrumbs data={breadCrumbsData} />
            <img className="rounded-xl w-full" src={images.Post1Image} alt="" />
            <Link
              to="/blog?category=selectedCategory"
              className="text-dark-hard text-sm font-roboto inline-block mt-4 md:text-base"
            >
              EDUCATION
            </Link>
            <h1 className="text-xl font-medium font-roboto mt-4 text-primary md:text-[26px]">
              Help childeren get better education
            </h1>
            <div className="mt-4 text-dark-soft">
              <p className="leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                tristique senectus et netus. Mattis pellentesque id nibh tortor
                id aliquet lectus proin.
              </p>
            </div>
          </article>
          <SuggestedPosts
            header="Latest Article"
            posts={postsData}
            tags={tagsData}
            className="mt-8 lg:mt-0 lg:max-w-xs lg:text-primary"
          />
        </section>
      </MainLayout>
    </>
  );
};

export default ArticleDetailsPage;
