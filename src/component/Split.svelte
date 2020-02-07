<script>
  /*
Usage:

import Split from "./Split.svelte";

  let options = {
    direction: "vertical" // "horizontal"
  };

<Split option={options} key=1>
  <p slot="left">aaaaa</p>
  <p slot="right">abbbbb</p>
</Split>
*/

  import Split from "split.js";
  import { onMount } from "svelte";

  export let key = location.href;
  export let option = {};
  let uuid = () => `unique-${Math.random()}`.replace(".", "");
  let rootClass = uuid();
  let leftClass = uuid();
  let rightClass = uuid();
  let gutterClass = uuid();
  let container = "container";
  let gutterClassName = "gutter";

  onMount(() => {
    if (option["direction"] == "vertical") {
      container = "container-col";
      gutterClassName = "gutter-col";
    }
    var sizes = [40, 60];
    try {
      sizes = JSON.parse(
        localStorage.getItem("split-sizes" + location.href + key)
      );
    } catch (e) {}
    let root = document.querySelector("." + rootClass);
    Split(
      [
        root.querySelector("." + leftClass),
        root.querySelector("." + rightClass)
      ],
      Object.assign(
        {
          sizes: sizes,
          gutter: (index, direction) => {
            const gutter = root.querySelector("." + gutterClass);
            gutter.classList.add = `gutter gutter-${direction}`;
            return gutter;
          },
          onDragEnd: function(sizes) {
            localStorage.setItem(
              "split-sizes" + location.href + key,
              JSON.stringify(sizes)
            );
          }
        },
        option
      )
    );
  });
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
  .container-col {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .gutter {
    cursor: col-resize;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    background-color: aliceblue;
    color: brown;
    user-select: none;
  }
  .gutter-col {
    cursor: row-resize;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    background-color: aliceblue;
    color: brown;
    user-select: none;
  }
</style>

<div class="{container} {rootClass}">
  <div class={leftClass}>
    <slot name="one" />
  </div>
  <div class="{gutterClassName} {gutterClass}">
    {#if option['direction'] == 'horizontal'}┇{:else}┅{/if}
  </div>
  <div class={rightClass}>
    <slot name="two" />
  </div>
</div>
