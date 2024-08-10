const multer = require('multer');
const ContactDocumentDetails = require('../models/contactDocument');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const saveContactDocumentDetails = async (req, res) => {
  console.log("hey there")
  upload.fields([{ name: 'photo' }, { name: 'aadhar' }])(req, res, async function (err) {
    if (err) {
      return res.status(400).send({ message: 'Error uploading files', err });
    }

    const { files } = req;
    if (!files || !files.photo || !files.aadhar) {
      return res.status(400).send({ message: 'Profile image and Aadhar image are required' });
    }

    try {
      const newContactDocumentDetails = new ContactDocumentDetails({
        photo: {
          data: files.photo[0].filename,
          contentType: files.photo[0].mimetype,
        },
        aadhar: {
          data: files.aadhar[0].filename,
          contentType: files.aadhar[0].mimetype,
        },
      });

      await newContactDocumentDetails.save();
      res.status(200).send({ message: 'Successfully uploaded and saved document details' });
    } catch (error) {
      res.status(500).send({ message: 'Error saving contact document details', error });
    }
  });
};

const findContactDocumentDetails = async (req, res) => {
  try {
    const contactDocumentDetails = await ContactDocumentDetails.find();
    res.status(200).send(contactDocumentDetails);
  } catch (error) {
    res.status(400).send({ message: 'Error retrieving contact document details', error });
  }
};

module.exports = { saveContactDocumentDetails, findContactDocumentDetails };










// const multer=require("multer");
// const ContactDocumentDetails = require('../models/contactDocument');


// const storage=multer.diskStorage({
//   destination:function(req,file,cb){
//     return cb(null,"./upload")
//   },
//   filename:function(req,file,cb){
//     return cb(null,`${Date.now()}-${file.originalname}`)
//   }
// });
// const upload=multer({storage})


// const saveContactDocumentDetails = async ()=>{

// await saveContactDocumentDetails.post("/upload",upload.fields([{name:"photo"},{name:"aadhar"}]), (req,res )=>{
//   console.log(req.body)
//   const newImage=new ImageModel({
//     image:{data:req.files.filename,
//       contentType:'image/png'
//     }
//   })
//   newImage.save()
//   .then(()=>res.send("successfully uploaded")).catch((err)=>console.log(err))
//   return res.redirect("/jet/documents");
//   })
// }


// const findContactDocumentDetails = async (req, res) => {
//   try {
//     const contactDocumentDetails = await ContactDocumentDetails.find();
//     res.status(200).send(contactDocumentDetails);
//   } catch (error) {
//     res.status(400).send({ message: 'Error retrieving contact document details', error });
//   }
// };

// module.exports = { saveContactDocumentDetails, findContactDocumentDetails };


// const saveContactDocumentDetails = async (req, res) => {
//   const { photo, adhaarPhoto } = req.body;

//   try {
//     const newContactDocumentDetails = new ContactDocumentDetails({
//       photo,
//       adhaarPhoto,
//     });

//     await newContactDocumentDetails.save();
//     res.status(201).send({ message: 'Contact document details saved successfully' });
//   } catch (error) {
//     res.status(400).send({ message: 'Error saving contact document details', error });
//   }
// };

