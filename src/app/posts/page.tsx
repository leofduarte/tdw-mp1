"use client";

import { useEffect, useState } from "react";
import { client } from "../../lib/contentful/client";
import Link from "next/link";
import PostCard from "../components/post-card";
import { Post } from "../interfaces/post";
import { Button } from "../components/ui/button";
import { ContentfulPostItem } from "../interfaces/contentful-api";

const mapApiResponseToPost = (item: ContentfulPostItem): Post => {
  return {
    sys: {
      id: item.sys.id,
    },
    fields: {
      title: item.fields.title,
      description: item.fields.description,
      image_url: item.fields.image?.fields?.file?.url ?? "",
      date: item.fields.date || "",
      slug: item.fields.slug,
    },
  };
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({ content_type: "post" });
        console.log("response", response.items);
        const mappedPosts = (response.items as unknown as ContentfulPostItem[]).map(mapApiResponseToPost);
        console.log("mappedPosts", mappedPosts);
        setPosts(mappedPosts);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="my-16">
      <div className="w-5/6 mx-auto mb-4">
        <Link href="/">
          <Button>Voltar</Button>
        </Link>
      </div>
      <div className="flex flex-col justify-center text-center w-3/5 mx-auto">
        <h1 className="font-bold text-4xl my-4">Notícias</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
          {posts.map((post) => (
            <Link
              href={`/posts/${post.fields.slug}`}
              aria-label={"title"}
              key={post.sys.id}
            >
              <PostCard post={post} key={post.sys.id} />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
