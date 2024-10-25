"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "../../../lib/contentful/client";
import { Post } from "../../interfaces/post";
import React from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const mapApiResponseToPost = (item: any): Post => {
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

const PostPage: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      const response = await client.getEntries({
        content_type: "post",
        "fields.slug": slug,
      });

      if (response.items.length) {
        const post = mapApiResponseToPost(response.items[0]);
        setPost(post);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="my-16">
        <div className="w-5/6 mx-auto mb-4">
          <Link href="/posts">
            <Button>Voltar</Button>
          </Link>
        </div>
        <div className="flex flex-col justify-center w-3/5 mx-auto">
          <h1 className="font-bold text-3xl">{post.fields.title}</h1>

          <div className="flex w-full flex-col">
            <div className="flex space-x-4 mt-2">
              <p className="underline">ChatGPT</p>
              <span>-</span>
              <p className="text-xs text-left my-1">
                {post.fields.date
                  ? new Date(post.fields.date).toLocaleDateString()
                  : "No date available"}
              </p>
            </div>

            <img
              className="h-full w-3/5 rounded-xl object-cover"
              src={post.fields.image_url}
              alt={`Cover Image for ${post.fields.title}`}
            />
            {slug === "fim-da-aventura-fabio-apanhado" && (
              <audio controls className="mt-4">
                <source src="/assets/lembra_di_mi_verdadeira.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>

          <p className="text-lg mt-4" style={{ whiteSpace: "pre-line" }}>
            {post.fields.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default PostPage;
