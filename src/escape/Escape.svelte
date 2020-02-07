<script>
  import "@material/mwc-radio";
  import "@material/mwc-formfield";
  import "@material/mwc-textfield";
  import "@material/mwc-textarea";
  import "@material/mwc-drawer";
  import "@material/mwc-top-app-bar";
  import Split from "../component/Split.svelte";
  import Editor from "../component/Editor.svelte";
  import { onMount } from "svelte";
  import insertCSS from "./style.scss";
  import handles from "./Handles";

  export let load;
  (async () => {
    await load("crypto", "pako", "jszip", "beautify");
    await load("/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/loader.js");
  })();

  let data = {
    input: "",
    ouput: "",
    // outputType: "javascript" "xml" "sql" "img"
    outputType: "img",
    img: "https://tse4-mm.cn.bing.net/th/id/OIP.DWQEL8U-S49Nwb22l7BLXwHaHZ"
  };

  try {
    data = JSON.parse(localStorage.getItem("generate-datas")) || data;
  } catch (e) {}

  function saveData() {
    localStorage.setItem("generate-datas", JSON.stringify(data));
  }

  onMount(() => {
    insertCSS();
  });
</script>

<style>
  .overhide {
    overflow: hidden;
  }
  .overscroll {
    overflow: auto;
  }
  .h100 {
    height: 100%;
  }
  .img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<Split option={{ direction: 'horizontal' }} key="1">
  <div slot="one" class="overscroll h100">
    <h1>Escape</h1>
    <hr />
    {#each handles as item}
      <mwc-formfield label={item.name}>
        <mwc-radio
          class="option"
          name="option"
          on:click={async () => {
            let handle = item.handle;
            try {
              data = Object.assign(data, await handle(data.input));
            } catch (e) {
              data = Object.assign(data, {
                outputType: 'javascript',
                output: e.stack
              });
            }
          }}
          checked={false} />
      </mwc-formfield>
    {/each}
  </div>
  <div slot="two" class="h100 overhide">
    <Split option={{ direction: 'vertical' }} key="2">
      <div slot="one" class="h100 overhide">
        <Editor
          value={data.input}
          onChange={value => {
            data.input = value;
            saveData();
          }} />
      </div>
      <div slot="two" class="h100 overhide">
        {#if data.outputType == 'img'}
          <div class="img-container h100 overscroll">
            <img src={data.img} alt="output" />
          </div>
        {:else}
          <Editor
            value={data.output}
            language={data.outputType}
            onChange={value => {
              console.log('value', value);
              data.output = value;
              saveData();
            }} />
        {/if}
      </div>
    </Split>
  </div>
</Split>
