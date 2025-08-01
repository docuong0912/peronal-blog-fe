"use client";
import BlogService from "@/services/BlogService.service";
import { getStringDate } from "@/utils/string-helper";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LastestBlogGrid({blogs}) {
    return (
        <section className="border-t border-[var(--neutral-300)] w-full pt-6">
            <h2 className="text-3xl font-bold font-sans">Latest Articles</h2>
            {/* Add your latest blog grid content here */}
            <div className="grid grid-rows-5 grid-cols-1 gap-4 mt-10">
                {blogs.map((blog) => (
                    <Link key={blog.id} href={`/blogs/${blog.slug}`}>
                        <h2 className="text-lg font-bold">{blog.title}</h2>
                        <p className="text-neutral-400">{getStringDate(blog.updatedDate || blog.createdDate)}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}