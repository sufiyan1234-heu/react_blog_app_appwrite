"use client";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { Client, Databases, ID } from "appwrite";
import { useState } from "react";

export default function Home() {
  const client = new Client();
  const [blogs, setBlogs] = useState([]);
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65bfe70681b15bfd4089");

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    "65bfec2aa8fde70aa98e",
    "65bfec3307600ba7a7ec",
    []
  );

  promise.then(
    function (response) {
      // console.log(response);
      setBlogs(response.documents);
    },
    function (error) {
      console.log(error);
    }
  );

  const extractPlainText = (htmlContent) => {
    const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
    return doc.body.textContent || "";
  };
  return (
    <>
      <Navbar />

      <div clasname="mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center mt-5">Latest Blogs</h1>
        <div className="flex justify-center items-start flex-wrap gap-4">
          {blogs.length === 0 && <div className="">Loading...</div>}
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} metaDesc={extractPlainText(blog.content)} />
          ))}
        </div>
      </div>

    </>
  );
}
