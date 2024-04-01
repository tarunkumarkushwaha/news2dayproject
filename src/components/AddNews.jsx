import React, { useState } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import { useContext } from 'react';
import { Context } from '../MyContext';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const AddNews = () => {
    const { signIn, setnewsData, newsData } = useContext(Context);
    const [inputNews, setinputNews] = useState("");
    const [title, settitle] = useState("");
    const [url, seturl] = useState("");
    const [file, setFile] = useState([]);
    const navigate = useNavigate()

    // console.log(postitems)

    function handleChange(e) {
        setFile((olditem) => {
            return [...olditem, URL.createObjectURL(e.target.files[0])]
        })
    }

    const addPost = () => {
        if (inputNews === "") {
            toast.error("empty post is not allowed")
            return
        }
        setnewsData((oldpost) => {
            return [{
                "title": title,
                "url": url,
                "description": inputNews,
                "urlToImage": file
            }, ...oldpost]
        })
        setFile([])
        setinputNews("")
        navigate('/')
        toast.success("post created")
    }

    return (
        <>
            <Navbar />
            <SideBar />
            {signIn ?
                <>
                    <div className=" mt-8 mx-auto bg-white rounded-lg text-left overflow-hidden shadow-xl  sm:max-w-[600px] w-full">
                        <div className="sm:items-start flex h-[28rem] flex-col p-4">
                            <div className="p-3 flex flex-col w-full gap-1">
                                <textarea
                                    type="text"
                                    value={title}
                                    onChange={(e) => settitle(e.target.value)}
                                    className="flex-1 max-h-[12rem] min-h-[5rem] resize-none focus:ring-blue-600 focus:outline-none focus:ring-0 text-tiny"
                                    placeholder="add title"
                                />
                                <textarea
                                    type="text"
                                    value={url}
                                    onChange={(e) => seturl(e.target.value)}
                                    className="flex-1 max-h-[12rem] min-h-[5rem] resize-none focus:ring-blue-600 focus:outline-none focus:ring-0 text-tiny"
                                    placeholder="add url"
                                />
                                <textarea
                                    type="text"
                                    value={inputNews}
                                    onChange={(e) => setinputNews(e.target.value)}
                                    className="flex-1 max-h-[24rem] min-h-[10rem] resize-none focus:ring-blue-600 focus:outline-none focus:ring-0 text-tiny"
                                    placeholder="add post"
                                />
                            </div>

                            <div className="w-full flex gap-3 overflow-auto">
                                {
                                    file.map((item, index) => <div key={"image no - " + index} className="w-28 h-3/4"><button className="relative top-[10%] left-[95%]"
                                        onClick={() => {
                                            setFile([
                                                ...file.slice(0, file.indexOf(item)),

                                                ...file.slice(file.indexOf(item) + 1)
                                            ])
                                            file.splice(file.indexOf(item), 1)
                                        }
                                        }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M5.1999 5.20002H14.7999V14.8H5.1999V5.20002Z" fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.9999 19.6C15.3018 19.6 19.5999 15.302 19.5999 10C19.5999 4.69809 15.3018 0.400024 9.9999 0.400024C4.69797 0.400024 0.399902 4.69809 0.399902 10C0.399902 15.302 4.69797 19.6 9.9999 19.6ZM8.44843 6.7515C7.9798 6.28287 7.22 6.28287 6.75137 6.7515C6.28275 7.22013 6.28275 7.97992 6.75137 8.44855L8.30285 10L6.75137 11.5515C6.28275 12.0201 6.28275 12.7799 6.75137 13.2486C7.22 13.7172 7.9798 13.7172 8.44843 13.2486L9.9999 11.6971L11.5514 13.2486C12.02 13.7172 12.7798 13.7172 13.2484 13.2486C13.7171 12.7799 13.7171 12.0201 13.2484 11.5515L11.697 10L13.2484 8.44855C13.7171 7.97992 13.7171 7.22013 13.2484 6.7515C12.7798 6.28287 12.02 6.28287 11.5514 6.7515L9.9999 8.30297L8.44843 6.7515Z" fill="#EF4444" />
                                        </svg>
                                    </button>
                                        <img src={item} alt="img" />
                                    </div>)
                                }
                            </div>

                            <div className="w-full ">
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-1 px-3 gap-4 items-center">

                                        <label htmlFor="inputs" className="mx-1 cursor-pointer">
                                            <input name="inputs" className="hidden" type="file" onChange={handleChange} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.66645 0.777832C1.68461 0.777832 0.888672 1.57377 0.888672 2.55561V11.4445C0.888672 12.4263 1.68461 13.2223 2.66645 13.2223H13.3331C14.315 13.2223 15.1109 12.4263 15.1109 11.4445V2.55561C15.1109 1.57377 14.315 0.777832 13.3331 0.777832H2.66645ZM13.3331 11.4445H2.66645L6.22201 4.33339L8.88867 9.66672L10.6664 6.11117L13.3331 11.4445Z" fill="#6B7280" />
                                            </svg>
                                        </label>

                                    </div>
                                    {/* <button className="py-2.5 rounded-md px-4 text-xs font-medium text-[#4338CA] active:bg-white hover:bg-[#EEEDFF]">
                                            Save as Draft
                                        </button> */}
                                    <button
                                        onClick={addPost}
                                        className="bg-slate-950 py-2.5 rounded-md px-4 text-white text-xs font-medium">
                                        Create Post
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
                :
                <div>please log in as admin to add post</div>
            }
            <SideBar />
        </>
    )
}

export default AddNews