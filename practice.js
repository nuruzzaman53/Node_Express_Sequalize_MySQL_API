const db = require("./models/model");
const multer = require("multer");
const path = require("path");

// file upload controller //

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, Images);
  },
  fileName: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalName));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" }, // max file size 5 MB //
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalName));
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Please upload right file format");
  },
}).single("image");

db.products = productModel;

// findorcreate method //

/*The method findOrCreate can be used to check if a certain element already
 exists in the database. If that is the case the method will result in a 
 respective instance. If the element does not yet exist, it will be created.
 */

const productFind = async (req, res) => {
  const productName = req.params.name;
  try {
    const targetProduct = await Product.findOrCreate({
      where: { name: productName },
      defaults: {
        title: "Apple X10 phone",
        price: 100,
        published: true,
      },
    });
    res.status(200).send(targetProduct);
  } catch (error) {
    res.status(400).send(error.name);
  }
};

const productSearch = async (req, res) => {
  const productId = req.params.id;
  try {
    const targetProduct = await Product.findOrCreate({
      where: { id: productId },
      defaults: {
        name: "Apple 12",
        price: 300,
        published: false,
      },
    });
    res.status(200).send(targetProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

// limit, offset,order,group //

Product.findAll({ limit: 10 }); // only 10 product will be display //

Product.findAll({ offset: 2 }); // first 2 product will be not displayed //

Product.findAll({ limit: 50, offset: 10 });

Product.findAll({
  order: [["title", "DESC"]],
});

// yields ORDER BY title DESC

Product.findAll({ group: "name" });
// yields GROUP BY name

/* Raw queries
Sometimes you might be expecting a massive dataset that you just want to display, 
without manipulation. For each row you select, Sequelize creates 
an instance with functions for update, delete, get associations etc. 
If you have thousands of rows, this might take some time.
 If you only need the raw data and don't want to update anything, 
 you can do like this to get the raw data.
 */

Product.findAll({ where: { title: "Apple X10" }, raw: true });

Product.Count({ where: { id: { [op.gt]: 25 } } });
//Product with an id greater than 25

//max - Get the greatest value of a specific attribute within a specific table

Product.max("price", { where: { price: { [op.lt]: 25 } } }).then((max) => {
  console.log(max);
});

// Find the minimum price product //

Product.min("price", {
  where: {
    price: {
      [op.lt]: 5,
    },
  },
}).then((min) => {
  console.log(min);
});

// SUM the values //

Product.sum("price", {
  where: {
    price: {
      [op.lt]: 5,
    },
  },
}).then((sum) => {
  console.log(sum);
});

Product.findAll({
  where: {
    name: { [op.like]: "%apple%" },
  },
});
/* To select only some attributes, you can use the attributes option.
 Most often, you pass an array:To select only some attributes,
  you can use the attributes option. Most often, you pass an array:
*/

Product.findAll({
  attributes: ["title", "price", "discount"],
});

// SELECT * FROM Product WHERE productId = 12 OR productId = 13;
Product.findAll({
  where: {
    productId: {
      [op.or]: [12, 13],
    },
  },
});

Produc.findAll({
  where: {
    name: {
      ["op.like"]: "%wheel%",
    },
  },
  limit: 10,
  attributes: ["id", "title", "price"],
});

Product.max("price", {
  where: {
    price: {
      ["op.gt"]: 10,
    },
  },
}).then((max) => console.log(max));
