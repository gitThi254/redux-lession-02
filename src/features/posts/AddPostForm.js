import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postAdded, selectAllPosts } from "./postSlice";
import { selectAllUsers } from "../uses/usersSlice";

const AddPostForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const usersOptions = users.map((user) => [
    <option key={user.id} value={user.id}>
      {user.name}
    </option>,
  ]);

  const onSubmit = (data) => {
    dispatch(postAdded(data));
    reset();
  };
  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Title'
          {...register("title", { required: true })}
        />
        <input
          type='text'
          placeholder='Context'
          {...register("content", { required: true })}
        />
        <label htmlFor='postAuthor'>Author: </label>
        <select id='postAuthor' {...register("userId")}>
          {usersOptions}
        </select>
        <button>new add</button>
      </form>
    </section>
  );
};

export default AddPostForm;
