<script>
  // import "@material/mwc-formfield";
  // import "@material/mwc-checkbox";
  // import "@material/mwc-top-app-bar";
  // import "@material/mwc-drawer";
  // import "@material/mwc-icon-button";
  // import "@material/mwc-textarea";
  // import "@material/mwc-textfield";
  // import "@material/mwc-button";
  // import "@material/mwc-radio";
  import { onMount } from "svelte";
  import handles from "./Handles";
  import Split from "../component/Split.svelte";
  import Editor from "../component/Editor.svelte";
  import insertCSS from "./style.scss";

  export let load;

  let classInfo = {
    packageName: "",
    className: "",
    genSetter: false,
    genGetter: false,
    genInnerClass: false,
    GenJavaTemplateSimple: false,
    inputData: "",
    outputData: ""
  };

  try {
    classInfo = JSON.parse(localStorage["generate_datas"]);
  } catch (error) {
    console.error(error);
  }
  (async () => {
    await load("jquery", "popper", "beautify", "highlight");
    await load("/cdn/cdn.bootcss.com/monaco-editor/0.18.0/min/vs/loader.js");
  })();

  function savePageData() {
    setTimeout(() => {
      localStorage["generate_datas"] = JSON.stringify(classInfo);
    }, 10);
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
</style>

<Split option={{ direction: 'horizontal' }} key="1">
  <div slot="one" class="overscroll h100">
    <h1>生成代码</h1>
    <hr />
    <mwc-formfield label="genSetter">
      <mwc-checkbox
        on:change={e => (classInfo.genSetter = e.target.checked)}
        checked={classInfo.genSetter} />
    </mwc-formfield>
    <mwc-formfield label="genGetter">
      <mwc-checkbox
        on:change={e => (classInfo.genGetter = e.target.checked)}
        checked={classInfo.genGetter} />
    </mwc-formfield>
    <mwc-formfield label="genInnerClass">
      <mwc-checkbox
        on:change={e => (classInfo.genInnerClass = e.target.checked)}
        checked={classInfo.genInnerClass} />
    </mwc-formfield>
    <mwc-formfield label="GenJavaTemplateSimple">
      <mwc-checkbox
        on:change={e => (classInfo.GenJavaTemplateSimple = e.target.checked)}
        checked={classInfo.GenJavaTemplateSimple} />
    </mwc-formfield>
    <hr />
    {#each handles as item}
      <mwc-formfield label={item.name}>
        <mwc-radio
          name="option"
          on:click={() => {
            let Handle = item.handle;
            classInfo.outputData = new Handle().toJava(classInfo.inputData, classInfo);
            savePageData();
          }}
          checked={false} />
      </mwc-formfield>
    {/each}
  </div>
  <div slot="two" class="h100 overhide">
    <Split option={{ direction: 'vertical' }} key="2">
      <div slot="one" class="h100 overhide">
        <mwc-textfield
          label="packageName"
          type="text"
          value={classInfo.packageName}
          on:keyup={e => (classInfo.packageName = e.target.value)}
          on:change={e => (classInfo.packageName = e.target.value)} />
        <mwc-textfield
          label="className"
          type="text"
          value={classInfo.className}
          on:keyup={e => (classInfo.className = e.target.value)}
          on:change={e => (classInfo.className = e.target.value)} />
        <Editor
          value={classInfo.inputData}
          onChange={value => {
            classInfo.inputData = value;
          }} />
      </div>
      <div slot="two" class="h100 overhide">
        <Editor value={classInfo.outputData} language="java" />
      </div>
    </Split>
  </div>
</Split>
