import React, { useState, useRef, useContext } from "react";
import { useSubmit, Form } from "@remix-run/react";
import { Editor } from "@tinymce/tinymce-react";
import type { ZodIssue } from "zod";
import { RootContext } from "~/root";
import Input from "~/components/Input";
import { Button } from "~/components/Button";

interface Props {
  errors: ZodIssue[];
}
const CreateArticle = ({ errors = [] }: Props) => {
  const { TINY_MCE_API_KEY } = useContext(RootContext);
  const editorImageInput = useRef<HTMLInputElement>(null);
  const postImageInput = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [body, setBody] = useState("");
  const [articleImage, setArticleImage] = useState("");
  const submit = useSubmit();
  const errorInputs = errors.map((error) => error.path[0]);

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
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className=" items-center rounded-lg border-2 border-green-800 bg-gray-100 p-4">
            <Input
              className="w-full rounded-lg p-4"
              placeholder="Please enter the name of your article"
              name="postTitle"
              type="text"
              required={true}
              isError={errorInputs.includes("postTitle")}
              errorMessage="The name should include at least 5 characters"
            />
          </div>
          <div className=" flex  items-center rounded-lg border-2 border-green-800 bg-gray-100 p-4">
            <label htmlFor="category">Choose your category:</label>
            <select
              name="category"
              className="ml-2 rounded-lg border-2 border-green-800 p-1"
            >
              <option
                selected
                value="review"
                className="border-2 border-green-800"
              >
                Review
              </option>
              <option value="guides">Guides</option>
              <option value="news">News</option>
              <option value="ranking">Ranking</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex items-center rounded-lg border-2 border-green-800 bg-gray-100 p-4">
            <Input
              type="checkbox"
              name="featured"
              defaultValue="false"
              label="Should your article be featured?"
              className="ml-4"
              wrapperStyles="flex  items-center"
            />
          </div>
          <div className="rounded-lg border-2 border-green-800 bg-gray-100 p-4">
            <Input
              name="postImage"
              type="file"
              isError={errorInputs.includes("postImage")}
              onChange={handleImageSelect}
              ref={postImageInput}
              label="Choose Post Image"
              className="rounded-lg p-4"
              errorMessage="The image must be added"
              required={true}
              wrapperStyles="flex justify-between items-center"
            />
          </div>
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
