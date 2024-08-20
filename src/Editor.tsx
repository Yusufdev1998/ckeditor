import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Paragraph,
  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageResize,
  ImageUpload,
  Base64UploadAdapter,
  Autoformat,
  BlockQuote,
  Heading,
  Indent,
  Link,
  List,
  MediaEmbed,
  PasteFromOffice,
  PictureEditing,
  Table,
  TextTransformation,
  IndentBlock,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

function Editor() {
  return (
    <CKEditor
      onChange={(_, editor) => {
        console.log(editor.getData());
      }}
      data={""}
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "|",
            "link",
            "uploadImage",
            "insertTable",
            "blockQuote",
            "mediaEmbed",
            "|",
            "bulletedList",
            "numberedList",
            "outdent",
            "indent",
          ],
        },

        image: {
          toolbar: [
            "toggleImageCaption",
            "|",
            "imageStyle:inline",
            "imageStyle:wrapText",
            "imageStyle:breakText",
          ],
        },

        plugins: [
          Essentials,
          Autoformat,
          Bold,
          Italic,
          BlockQuote,
          Heading,
          Image,
          ImageCaption,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          ImageResize,
          Indent,
          IndentBlock,
          Link,
          List,
          MediaEmbed,
          Paragraph,
          PasteFromOffice,
          PictureEditing,
          Table,
          TextTransformation,
          Base64UploadAdapter,
        ],

        initialData: "<p>Hello from CKEditor 5 in React!</p>",
      }}
    />
  );
}

export default Editor;
