// .home .home_img img {
//     transform: scaleX(-1);
//     height: 400px;
//     /* border: 1px solid rgb(69, 69, 69); */
//     box-shadow: -20px 14px 20px 7px #403f3f42;
//     border-radius: 90px;
//     background: linear-gradient(#1d1c1c8f, #2d2d2d);
//     margin: auto;
// }
 // = document.getElementsByClassName("portfolio_item");
 const projectVideos = [
  "url_for_project_1_video.mp4",
  "url_for_project_2_video.mp4",
  "url_for_project_3_video.mp4"
  // Add more video URLs as needed
];
 // Function to open modal and load video
 function openModal(projectIndex) {
  const modal = document.getElementById("projectModal");
  const videoContainer = document.getElementById("videoContainer");

  // Create video element
  const video = document.createElement("video");
  video.src = projectVideos[projectIndex];
  video.controls = true;
  video.autoplay = true;

  // Clear existing content
  videoContainer.innerHTML = "";

  // Append video to modal
  videoContainer.appendChild(video);

  // Display modal
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.style.display = "none";
}

// Close modal if user clicks outside the modal
window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event === modal) {
      modal.style.display = "none";
  }
};