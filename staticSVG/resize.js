// Attach the resize event to the window
window.addEventListener("resize", resizeWindow);
console.log("running3");
const ASPECT = 16 / 9; // Define the aspect ratio

// Function to resize the window
function resizeWindow() {
    console.log("running");
    // Get window width and height
    var w = window.innerWidth; // Use plain JavaScript to get window width
    var h = window.innerHeight; // Use plain JavaScript to get window height

    var stageWidth, stageHeight, stageLeft, stageTop;
    var coverTop, coverBottom, coverLeft, coverRight;

    // Calculate stage dimensions based on aspect ratio
    if ((w / h) >= ASPECT) {
        stageHeight = h;
        stageWidth = ASPECT * h;
        stageLeft = (w - stageWidth) / 2;
        stageTop = 0;
        coverTop = 0;
        coverBottom = 0;
        coverLeft = stageLeft;
        coverRight = stageLeft;
    } else {
        stageWidth = w;
        stageHeight = (1 / ASPECT) * w;
        stageTop = (h - stageHeight) / 2;
        stageLeft = 0;
        coverTop = stageTop;
        coverBottom = stageTop;
        coverLeft = 0;
        coverRight = 0;
    }

    // Update "screen" object properties using plain JavaScript
    var screen = document.querySelector("#screen");
    if (screen) {
        screen.style.width = stageWidth*0.9 + "px";
        screen.style.height = stageHeight*0.9 + "px";
        screen.style.left = stageLeft + "px";
    }

    // Resize text based on stage height
    document.documentElement.style.fontSize = (stageHeight / 20) + "px";
    // console.log(stageHeight)

    // document.getElementsByTagName("input")[0].style="transform: scale(stageHeight/10)"

    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        console.log(`scale(${stageHeight/200})`)
        checkbox.style.transform = `scale(${stageHeight/200})`;
    });
        // Example of updating borders (if needed)
    // var fillInAnswer = document.getElementById("fillInAnswer");
    // if (fillInAnswer) {
    //     var borderSize = stageHeight * 0.003;
    //     fillInAnswer.style.border = borderSize + "px solid white";
    // }
}
