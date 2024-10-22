"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const FormAction = async (formdata: FormData) => {
  const title = formdata.get("title");
  const description = formdata.get("description");

  try {
    const router= useRouter()
    const res = await fetch("http://localhost:3000/Api/topics", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    
    if (res.status === 201) {
      router.refresh()
      return "Topic created successfully";
    } else {
      return "Unable to create topic";
    }
  } catch (error: any) {
    console.log(error);
  }
};

const Page = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const result = await FormAction(formData);

    if (result === "Topic created successfully") {
      router.push('/http:localhost:3000');
    } else {
      console.log(result);
    }
  };

  return (
    <div className='flex justify-center items-center flex-col w-[300px] gap-10 mt-4'>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center items-start flex-col w-[300px] gap-4'>
          <h1 className='font-bold text-black flex justify-center items-center w-full'>
            ADD TOPIC AND DESCRIPTION
          </h1>
          <label htmlFor="topic" className='font-bold text-black'>Topic Title</label>
          <input 
            className='p-4 w-full h-[30px] outline-2-black'
            onChange={(e) => setTopic(e.target.value)}
            value={topic}
            type="text"
            name="title"
            id="topic"
            placeholder='Topic title'
          />
          <label htmlFor="description" className='font-bold text-black'>Topic Description</label>
          <input 
            className='p-4 w-full h-[30px] outline-2-black'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            name="description"
            id="description"
            placeholder='Topic description'
          />
          <button type='submit' className='bg-green-400 text-black w-full h-[40px]'>Add Topic</button>
        </div>
      </form>
    </div>
  );
};

export default Page;
