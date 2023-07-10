import React, { useState } from "react";
import { Box, IconButton, TextField, Button, Card, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Loader from "../common/Loader";

const ImageUpload = ({}) => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [recommendedImages,setRecommendedImages] = useState();
  const [loading, setLoading] = useState(false);
  const [reUpload,setReUpload] = useState(false);
  let dist = 0

  const theme = useTheme();

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    // chaning the name of the image 
    formData.append("image", image, "image.jpg");
    console.log(formData);

    if (file) {
      setLoading(true);
      axios
        .post("http://localhost:3000/image/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data)
          const response = res.data;
          const imagesArray = response.images;
          const imageArray = imagesArray
          const imageSrcArray = imageArray.map((data) => `data:image/jpeg;base64,${data}`);
          dist =  response.distance


          console.log(dist)
          console.log(imageSrcArray);
          setRecommendedImages(imageSrcArray);
          setReUpload(true);
          setLoading(false);

          toast.success("See the Recommended Images");
        })
        .catch((err) => toast.error("Error uploading image"));
    } else {
      alert("Please upload an image!");
    }
  };

  return (
    <>
    {
      loading ? (
        <Loader load={loading} />
      ) : (
        <>
        <ToastContainer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          padding: "2rem",
          maxWidth: "60rem",
          maxHeight: "30rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "40rem",
            border: "1px dashed",
            borderRadius: "5px",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 724px)": {
              height: "20rem",
            },
          }}
        >
          {!file && (
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleChange}
              />
              <CloudUploadIcon />
            </IconButton>
          )}
          {file && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={file}
                alt=""
                style={{
                  width:400,
                  height:400,
                }}
              />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              margin: "1rem",
              padding: "1rem 2rem",
              fontSize: ".76rem",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "GrayText",
              "&:hover": {
                backgroundColor: "brown",
              },
            }}
            onClick={handleUpload}
          >
            Recommend
          </Button>
          {
            reUpload && (
              <Button
              variant="contained"
              sx={{
                margin: "1rem",
                padding: "1rem 2rem",
                fontSize: ".76rem",
                fontWeight: "bold",
                marginBottom:"2rem",
                color: "white",
                backgroundColor: "GrayText",
                "&:hover": {
                  backgroundColor: "brown",
                },
              }}
            onClick = {() => { setReUpload(false); setRecommendedImages(null); setFile('')}}
            >
             Upload again
            </Button>
            )
          }
        </Box>
      </Box>
        <Box>
        {recommendedImages && (
          <Box sx={
            {
              display:'flex',
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"center",
              flexWrap:"wrap",
              margin:'1rem',
              gap:'2rem'

            }
          }>
            {recommendedImages.slice(0, 5).map((data, index) => (
              <Card key={index} sx={{
                padding: '16px', 
                borderRadius: '8px', 
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#FFFFFF',
              }}>
            <img key={index} src={data} alt={`Image ${index}`} width={400} height={400}/>
            </Card>
         ))
         }

            </Box>
            )}
        </Box>
        </>
        )
    }
    </>
  );
};

export default ImageUpload;