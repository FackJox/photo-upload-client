import React from 'react';
import "./App.css";


const App = () => {

function photosSelected() {
  const files = document.querySelector("[type=file]").files;
  console.log(files)
}

function submitFiles(event) {
    const url = "https://api.cloudinary.com/v1_1/jandjtravels/image/upload";
    console.log("url1" + url);
    event.preventDefault();

    const files = document.querySelector("[type=file]").files;
    const formData = new FormData();

    console.log("form Data 1" + formData)

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      
      formData.append("file", file);
      formData.append("upload_preset", "stkv5cah");
      formData.append("cloud_name", "jandjtravels");
      console.log("form Data 2" + formData);
      console.log("url2" + url);

      fetch("https://api.cloudinary.com/v1_1/jandjtravels/image/upload", {
        method: "POST",
        body: formData
      })
        .then((response) => {
          return response.text();
        })
        // .then((data) => {
        //   document.getElementById("data").innerHTML += data;
        // })
        ;
    }

  };


  return (
    <>
      <div>
        <form method="post" encType="multipart/form-data">
          <input type="file" name="files[]" multiple  onChange={photosSelected}/>
          <input type="submit" value="Upload Files" name="submit" onSubmit={submitFiles} />
        </form>
      </div>
      <div>
        <p id="data"></p>

      </div>
    </>
  );
}

export default App;