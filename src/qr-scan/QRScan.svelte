<script>
  import jsQR from "jsqr";
  import "@material/mwc-formfield";
  import "@material/mwc-checkbox";
  import "@material/mwc-top-app-bar";

  let checked = localStorage["scan-autoJump"] == "true";
  let toggleChecked = () => {
    checked = !checked;
    localStorage["scan-autoJump"] = checked;
  };

  setTimeout(() => {
    let video = document.createElement("video");
    let canvasElement = document.getElementById("canvas");
    let canvas = canvasElement.getContext("2d");
    let outputContainer = document.getElementById("output");
    let outputMessage = document.getElementById("outputMessage");
    let outputData = document.getElementById("outputData");
    let autoJump = document.getElementById("autoJump");

    function drawLine(begin, end, color) {
      canvas.beginPath();
      canvas.moveTo(begin.x, begin.y);
      canvas.lineTo(end.x, end.y);
      canvas.lineWidth = 4;
      canvas.strokeStyle = color;
      canvas.stroke();
    }

    // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then(function(stream) {
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
        video.play();
        requestAnimationFrame(tick);
      });

    function tick() {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvasElement.hidden = false;
        outputContainer.hidden = false;

        canvasElement.height = video.videoHeight;
        canvasElement.width = video.videoWidth;
        canvas.drawImage(
          video,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        );
        var imageData = canvas.getImageData(
          0,
          0,
          canvasElement.width,
          canvasElement.height
        );
        var code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert"
        });
        if (code) {
          drawLine(
            code.location.topLeftCorner,
            code.location.topRightCorner,
            "#FF3B58"
          );
          drawLine(
            code.location.topRightCorner,
            code.location.bottomRightCorner,
            "#FF3B58"
          );
          drawLine(
            code.location.bottomRightCorner,
            code.location.bottomLeftCorner,
            "#FF3B58"
          );
          drawLine(
            code.location.bottomLeftCorner,
            code.location.topLeftCorner,
            "#FF3B58"
          );
          outputMessage.hidden = true;
          outputData.parentElement.hidden = false;
          outputData.innerText = code.data;
          if (checked) {
            location.href = code.data;
          }
        } else {
          outputMessage.hidden = false;
          outputData.parentElement.hidden = true;
        }
      }
      requestAnimationFrame(tick);
    }
  }, 0);
</script>

<style>
  canvas {
    width: 100%;
  }
</style>

<!-- 二维码解码 -->
<mwc-top-app-bar>
  <div slot="title">扫一扫</div>
  <div>
    <mwc-formfield id="autoJump" label="网址自动跳转">
      <mwc-checkbox on:click={toggleChecked} {checked} />
    </mwc-formfield>
    <canvas id="canvas" hidden />
    <div id="output" hidden>
      <div id="outputMessage">No QR code detected.</div>
      <div hidden>
        <b>Data:</b>
        <span id="outputData" />
      </div>
    </div>
  </div>
</mwc-top-app-bar>
