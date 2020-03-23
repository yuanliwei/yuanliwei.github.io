<script>
  /*
Usage:


*/

  // import elementResizeDetectorMaker from "element-resize-detector";
  import { onMount, afterUpdate } from "svelte";

  export let language = "javascript";
  export let value = "";
  export let onChange = v => {};
  let editor;
  let root;

  const erd = elementResizeDetectorMaker();

  onMount(() => {
    (async () => {
      const sleep = timeout =>
        new Promise(resolve => setTimeout(resolve, timeout));
      while (!window["require"]) {
        await sleep(100);
      }
      window["require"].config({
        paths: { vs: "/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs" }
      });
      window["require"](["vs/editor/editor.main"], function() {
        /** @type{import('monaco-editor')*/
        const monaco = window["monaco"];
        editor = monaco.editor.create(root, {
          language: language,
          roundedSelection: true,
          scrollBeyondLastLine: false,
          readOnly: false,
          theme: "vs",
          fontSize: 20
        });
        editor.setValue(value);
        editor.onDidChangeModelContent(e => {
          onChange(editor.getValue());
        });
        erd.listenTo(root, element => {
          editor.layout();
        });
      });
    })();
  });

  afterUpdate(() => {
    if (!editor) return;
    if (!value) value = "";
    if (editor.getValue() == value) return;
    try {
      editor.setValue(value);
    } catch (error) {
      console.error(value);
    }
  });
</script>

<style>
  .editor-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
</style>

<div class="editor-container" bind:this={root} />
