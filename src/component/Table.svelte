<script>
  import { onMount, afterUpdate } from "svelte";

  export let datas = [{ tip: "没有数据" }];

  let container;

  let grid = {};

  onMount(() => {
    /** @type{import('canvas-datagrid')} */
    grid = canvasDatagrid({
      parentNode: container,
      editable: false,
      maxPixelRatio: 2,
      allowColumnResizeFromCell: true,
      allowFreezingColumns: true,
      autoResizeColumns: true,
      multiLine: true,
      data: datas
    });
    grid.style.height = "100%";
    grid.style.width = "100%";
  });

  afterUpdate(() => {
    if (!datas) return;
    grid.data = datas;
    let drawer = document.getElementsByTagName("mwc-drawer")[0];
    if (drawer) {
      grid.style.height = drawer.clientHeight - 100 + "px";
    }
    grid.resize();
    grid.draw(true);
  });
</script>

<style>
  .container {
    background-color: antiquewhite;
  }
</style>

<div class="container" bind:this={container} />
