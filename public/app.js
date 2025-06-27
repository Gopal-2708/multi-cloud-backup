async function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const status = document.getElementById("status");

  if (!fileInput.files.length) {
    status.innerText = "Please select a file.";
    return;
  }

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);

  status.innerText = "Uploading...";

  try {
    const res = await fetch("/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    status.innerText = data.message;
  } catch (err) {
    status.innerText = "Upload failed.";
    console.error(err);
  }
}
