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

  // import Split from "split.js";
  import { onMount } from "svelte";

  export let key = location.href;
  export let option = {};
  let container = "container";
  let gutterClassName = "gutter";

  let root;
  let left;
  let right;
  let gutter;

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
    Split(
      [left, right],
      Object.assign(
        {
          sizes: sizes,
          gutter: (index, direction) => {
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

<div class={container} bind:this={root}>
  <div bind:this={left}>
    <slot name="one" />
  </div>
  <div class={gutterClassName} bind:this={gutter}>
    {#if option['direction'] == 'horizontal'}┇{:else}┅{/if}
  </div>
  <div bind:this={right}>
    <slot name="two" />
  </div>
</div>
