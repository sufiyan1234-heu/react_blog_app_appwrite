"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import { Client, Databases, ID, Query } from "appwrite";
import { useState } from 'react'

export default function Page({ params }) {
    const [blog, setBlog] = useState();

    const client = new Client();

    client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("65bfe70681b15bfd4089");

    const databases = new Databases(client);

    let promise = databases.listDocuments(
        "65bfec2aa8fde70aa98e",
        "65bfec3307600ba7a7ec",
        [
            Query.equal('slug', params.slug)
        ]
    );

    promise.then(
        function (response) {
            // console.log(response);
            setBlog(response.documents[0]);
        },
        function (error) {
            console.log(error);
        }
    );

    return (
        <>
            <Navbar />
            <div clasname="mt-8">
                <h1 className="text-3xl font-bold mb-6 text-center mt-5">{blog?.title}</h1>
                <div className="flex flex-col justify-center items-center gap-6">
                    {!blog && "Loading..."}
                    <div className='text-2xl font-bold'>{"Author:"} {blog?.author}</div>
                    <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
                </div>
            </div>
        </>
    )
}