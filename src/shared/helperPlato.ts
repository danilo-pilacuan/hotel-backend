export class Helper {
    static customFileName(req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e6);
      let fileExtension = "";
      if(file.mimetype.indexOf("jpeg") > -1){
          fileExtension = "jpg"
      }else if(file.mimetype.indexOf("png") > -1){
          fileExtension = "png";
      }
      //const originalName = file.originalname.split(".")[0];
      cb(null, uniqueSuffix+"."+fileExtension);
    }
   
    static destinationPath(req, file, cb) {
      cb(null, './images/platos/')
    }
  }