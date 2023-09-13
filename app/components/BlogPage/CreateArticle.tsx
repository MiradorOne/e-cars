import React, { useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { Button } from "~/components/Button";

const CreateArticle = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [articleName, setArticleName] = useState("");
  const [articleImage, setArticleImage] = useState({});

  const setArticleNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticleName(e.target.value);
  };
  const createArticleHandler = () => {
    return {
      title: articleName,
      body: text,
      createdAt: new Date(),
      image: {
        type: null,
        data: articleImage,
      },
    };
  };

  return (
    <>
      <form className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Please enter the name of your article"
          className="mb-2  w-5/12"
          onChange={setArticleNameHandler}
        />
        <div className="flex items-center">
          <label htmlFor="pet-select">Choose your category: </label>
          <select name="categories" className="ml-2">
            <option selected value="review">
              Review
            </option>
            <option value="guides">Guides</option>
            <option value="news">News</option>
            <option value="ranking">Ranking</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="vehicle1">Should your article be featured?</label>
          <input
            type="checkbox"
            id="isFeatured"
            name="isFeatured"
            value="true"
            className="ml-2"
          />
        </div>
      </form>
      <input id="my-file" type="file" name="my-file" className="hidden" />
      <Editor
        apiKey="8p6bsh1xotb95og1gywoydi84227tp147zdrj7u83d3tv6ne"
        init={{
          branding: false,
          height: 400,
          menubar: true,
          plugins:
            "preview  searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap pagebreak nonbreaking anchor  insertdatetime advlist lists wordcount ",
          toolbar:
            "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
          image_advtab: true,
          images_file_types: "jpg,svg,webp",
          file_picker_types: "file image media",
          file_browser_callback_types: "image",
          file_picker_callback: function (callback, value, meta) {
            if (meta.filetype == "image") {
              const input = document.getElementById("my-file");
              input.click();
              input.onchange = function () {
                var file = input.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                  setArticleImage(e.target.result);
                  console.log("name", e.target.result);
                  callback(e.target.result, {
                    alt: file.name,
                  });
                };
                reader.readAsDataURL(file);
              };
            }
          },
          paste_data_images: true,
        }}
        onEditorChange={(newValue, editor) => {
          setValue(newValue);
          setText(editor.getContent({ format: "text" }));
          console.log("value", value);
        }}
      />
      <Button className="mt-2">Post an Article</Button>
    </>
  );
};

export default CreateArticle;
