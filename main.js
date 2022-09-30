function setup() {
    canvas = createCanvas(400, 380);
    canvas.parent();
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    video.parent("video")
}