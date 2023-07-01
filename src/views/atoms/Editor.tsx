import { Editor as TinymceEditor }  from "@tinymce/tinymce-react";

function Editor({ editorValue, onChange, ref }:EditorProps) {
    return (
        <TinymceEditor
            ref={ref}
            onChange={onChange}
            apiKey='your-api-key'
            initialValue={editorValue}
            init={{
                height: "100%",
                menubar: false,
                // skin: "oxide-dark", // Set the dark mode skin
                // content_css: "dark", // Apply the dark mode CSS
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
        />
    )
}

export default Editor;

interface EditorProps {
    editorValue: string;
    onChange?: () => void;
    ref?: React.RefObject<TinymceEditor>;
}
