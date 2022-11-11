const path = require("path");
const multer = require("multer")
 	
var upload = multer({ dest: "Upload_folder_name" })
	
var storage = multer.diskStorage({
	destination: function (req, file, cb) {

		cb(null, "uploads")
	},
	filename: function (req, file, cb) {
	cb(null, file.fieldname + "-" + Date.now()+".jpg")
	}
})

const maxSize = 1 * 1000 * 1000;
	
var upload = multer({
	storage: storage,
	limits: { fileSize: maxSize },
	fileFilter: function (req, file, cb){
	
		// Set the filetypes, it is optional
		var filetypes = /jpeg|jpg|png/;
		var mimetype = filetypes.test(file.mimetype);

		var extname = filetypes.test(path.extname(
					file.originalname).toLowerCase());
		
		if (mimetype && extname) {
			return cb(null, true);
		}
	
		cb("Error: File upload only supports the "
				+ "following filetypes - " + filetypes);
	}

}).single("mypic");	


const postImage = async (req, res,next) => {

// router.post("/uploadProfilePicture",function (req, res, next) {
	
	upload(req,res,function(err) {

		if(err) {

			
			res.send(err)
		}
		else {

			res.send("Success, Image uploaded!")
		}
	})

}

const getImage = async (req, res) => {

	res.render("uploadImage");

}


const getSlideShow = async(req,res) => {
	res.render("slideshow");

}


module.exports = { getImage,postImage, getSlideShow}