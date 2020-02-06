<script>
  import "@material/mwc-formfield";
  import "@material/mwc-checkbox";
  import "@material/mwc-top-app-bar";
  import "@material/mwc-drawer";
  import "@material/mwc-icon-button";
  import "@material/mwc-textarea";
  import "@material/mwc-textfield";
  import "@material/mwc-button";
  import "@material/mwc-radio";
  import { onMount } from "svelte";
  import handles from "./Handles";

  export let load;

  let classInfo = {
    package: "",
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

  load("jquery", "popper", "beautify", "highlight");

  function savePageData() {
    setTimeout(() => {
      localStorage["generate_datas"] = JSON.stringify(classInfo);
    }, 10);
  }
</script>

<style>
  mwc-textarea {
    width: 100%;
  }
</style>

<mwc-drawer hasHeader>
  <span slot="title">生成代码</span>
  <div>
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
  <div slot="appContent">
    <mwc-textfield
      label="package"
      type="text"
      value={classInfo.package}
      on:keyup={e => (classInfo.package = e.target.value)}
      on:change={e => (classInfo.package = e.target.value)} />
    <mwc-textfield
      label="className"
      type="text"
      value={classInfo.className}
      on:keyup={e => (classInfo.className = e.target.value)}
      on:change={e => (classInfo.className = e.target.value)} />
    <mwc-textarea
      rows="6"
      label="input"
      type="text"
      on:keyup={e => (classInfo.inputData = e.target.value)}
      on:change={e => (classInfo.inputData = e.target.value)}
      value={classInfo.inputData} />
    <mwc-textarea
      rows="15"
      label="output"
      type="text"
      value={classInfo.outputData} />
  </div>
</mwc-drawer>
