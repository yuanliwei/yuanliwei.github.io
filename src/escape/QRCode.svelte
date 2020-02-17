<script>
  import { onMount } from "svelte";
  import insertCSS from "./style.scss";
  import Escape from "./escape-api";

  let data = {
    text: location.hash.split("?")[1],
    img: null
  };

  (async () => {
    data.img = await Escape.qrCode(data.text);
  })();

  onMount(() => {
    insertCSS();
  });
</script>

<style>
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
    background-color: antiquewhite;
    padding-top: 100px;
  }
</style>

<div class="img-container h100 overscroll">
  <img src={data.img} alt="output" />
</div>
