// const multer = require('multer');
// const JetForm = require('../models/jetForm');
// const fs = require('fs');
// const path = require('path');

// const uploadDir = './uploads';
// if (!fs.existsSync(uploadDir)){
//   fs.mkdirSync(uploadDir);
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// const createJetForm = async (req, res) => {

//   console.log("hey")
//   upload.fields([{ name: 'photo' }, { name: 'aadhar' }])(req, res, async function (err) {
//     if (err) {
//       return res.status(400).send({ message: 'Error uploading files', err });
//     }

//     const { body, files } = req;

//     try {
//       const newJetForm = new JetForm({
//         ...body,
//         photo: {
//           data: files.photo[0].filename,
//           contentType: files.photo[0].mimetype,
//         },
//         adhaarPhoto: {
//           data: files.aadhar[0].filename,
//           contentType: files.aadhar[0].mimetype,
//         },
//       });

//       await newJetForm.save();
//       res.status(201).json({ message: "Form data saved successfully" });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   });
// };

// module.exports = { createJetForm };


// const multer = require('multer');
// const JetForm = require('../models/jetForm');
// const fs = require('fs');
// const path = require('path');

// const uploadDir = './uploads';
// if (!fs.existsSync(uploadDir)){
//   fs.mkdirSync(uploadDir);
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// const createJetForm = async (req, res) => {
//   try {
//     const { body, files } = req;

//     const newJetForm = new JetForm({
//       ...body,
//       photo: {
//         data: files.photo[0].filename,
//         contentType: files.photo[0].mimetype,
//       },
//       adhaarPhoto: {
//         data: files.aadhar[0].filename,
//         contentType: files.aadhar[0].mimetype,
//       },
//     });

//     await newJetForm.save();
//     res.status(201).json({ message: "Form data saved successfully" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = { createJetForm, upload };


const multer = require('multer');
const JetForm = require('../models/jetForm');
const fs = require('fs');
const path = require('path');

const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const createJetForm = async (req, res) => {
  try {
    console.log("Request received at /jetform endpoint");
    const { body, files } = req;

    console.log("Request body:", body);
    console.log("Uploaded files:", files);

    const newJetForm = new JetForm({
      ...body,
      photo: {
        data: files.photo[0].filename,
        contentType: files.photo[0].mimetype,
      },
      adhaarPhoto: {
        data: files.aadhar[0].filename,
        contentType: files.aadhar[0].mimetype,
      },
    });

    await newJetForm.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createJetForm, upload };
