import { useState } from "react";

import { useForm } from "@refinedev/react-hook-form";

import { useNavigate } from "react-router-dom";

import Form from "components/common/Form";

const CreatePosts = () => {
  const navigate = useNavigate();

  const [postImage, setPostImage] = useState({ name: "", url: "" });

  const [postVideo, setPostVideo] = useState({
    name: "",
    url: "",
    description: "",
  });

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
  } = useForm();

  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.readAsDataURL(readFile);
    });
    reader(file).then((result: string) => setPostImage({ name: file?.name, url: result }));
  };
  const onFinishHandler = () => {}

  return (
    <Form
    type='create'
    register={register}
    onFinish={onFinish}
    formLoading={formLoading}
    handleSubmit={handleSubmit}
    postImage={postImage}
    handleImageChange={handleImageChange}
    onFinishHandler={onFinishHandler}
    postVideo={postVideo}

     />
  )
};

export default CreatePosts;
