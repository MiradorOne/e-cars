import React, { useState, useRef, useContext } from "react";
import { RootContext } from "~/root";
import { useSubmit, Form } from "@remix-run/react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "~/components/Button";

const CreateArticle = () => {
  const { TINY_MCE_API_KEY } = useContext(RootContext);
  const editorImageInput = useRef<HTMLInputElement>(null);
  const postImageInput = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [body, setBody] = useState("");
  const [articleImage, setArticleImage] = useState("");
  const submit = useSubmit();

  type FilePickerCallback = (
    callback: (value: string, meta?: Record<string, any>) => void,
    value: string,
    meta: Record<string, any>
  ) => void;
  const fileReaderCallback: FilePickerCallback = (callback, _value, meta) => {
    if (meta.filetype === "image") {
      if (editorImageInput.current) {
        editorImageInput.current.click();

        editorImageInput.current.onchange = function () {
          if (editorImageInput?.current?.files) {
            const file = editorImageInput.current.files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
              callback(e.target!.result! as string, {
                alt: file.name,
              });
            };
            reader.readAsDataURL(file);
          }
        };
      }
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    } else {
      return;
    }

    reader.onload = () => {
      setArticleImage(reader.result as string);
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.set("postImage", articleImage);
    submit(formData, {
      method: "post",
    });
  };
  return (
    <div className="container mx-auto flex min-h-screen flex-col content-center justify-center">
      <Form ref={formRef} className="" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="postTitle"
          placeholder="Please enter the name of your article"
          className="mb-2 w-5/12"
          // onChange={setArticleNameHandler}
        />
        <div className="flex items-center">
          <label htmlFor="category">Choose your category:</label>

          <select name="category" className="ml-2">
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
          <label>Should your article be featured?</label>
          <input
            type="checkbox"
            name="featured"
            defaultValue="false"
            className="ml-2"
          />
        </div>
        <div>
          <label>Choose Post Image</label>
          <input
            type="file"
            name="postImage"
            ref={postImageInput}
            onChange={handleImageSelect}
          />
        </div>
        <input ref={editorImageInput} type="file" className="hidden" readOnly />
        <input name="editorBody" className="hidden" value={body} />
        <Editor
          apiKey={TINY_MCE_API_KEY}
          init={{
            branding: false,
            height: "50vh",
            menubar: true,
            plugins:
              "preview  searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap pagebreak nonbreaking anchor  insertdatetime advlist lists wordcount ",
            toolbar:
              "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
            image_advtab: true,
            images_file_types: "jpg,svg,webp",
            file_picker_types: "file image media",
            file_browser_callback_types: "image",
            file_picker_callback: fileReaderCallback,
            paste_data_images: true,
          }}
          onEditorChange={(newValue, _editor) => {
            setBody(newValue);
          }}
        />
        <Button className="mt-8" type="submit">
          Post an Article
        </Button>
      </Form>
    </div>
  );
};

export default CreateArticle;
