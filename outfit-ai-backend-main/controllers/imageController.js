const { spawn } = require("child_process");

exports.imageUpload = async (req, res) => {
  const image = req.file.path;
  console.log(image);
  res.json({ msg: "Image Uploaded!" });

  const pythonProcess = spawn("python", ["controllers/test.py"]);

  pythonProcess.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  pythonProcess.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};
