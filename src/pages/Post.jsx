import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { ThumbsUp , ThumbsDown } from "lucide-react";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    const likePost = ()=>{
    appwriteService.likePost(slug,{userId:userData?.$id}).then((status)=>{
    if(status){
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }
      })
    }

    const dislikePost = ()=>{
        appwriteService.dislikePost(slug,{userId:userData?.$id}).then((status)=>{
        if(status){
            if (slug) {
                appwriteService.getPost(slug).then((post) => {
                    if (post) setPost(post);
                    else navigate("/");
                });
            } else navigate("/");
        }
          })
        }

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post?.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                <div className="">
                    <button className="flex justify-center items-center gap-1" onClick={()=>{
                        if(post.likes.includes(userData?.$id)){
                            dislikePost()
                        }else{
                            likePost()
                        }
                    }}>
                        <ThumbsUp size={30} className={`${post.likes.includes(userData?.$id)?"fill-red-500 stroke-none " : ""}`} /> <p>{post?.likes?.length}</p>
                    </button>
                   
                </div>

                
                <div className="w-full mb-6">
                    <h2 className="text-3xl text-white font-bold">Title: {post.title}</h2>
                </div>
                <div className="w-full mb-6">
                    <h3 className="text-base font-bold text-white">Posted on: {post.date},{post.time}</h3>
                </div>
                <div className="w-full mb-6">
                    <h3 className="text-base font-bold text-white">Posted by: {post.author}</h3>
                </div>
                <div className="browser-css">
                    <p className="text-white text-lg text-justify">{parse(post.content)}</p>
                </div>
             
            </Container>
         
        </div>
    ) : null;
}
