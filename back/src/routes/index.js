const { Router } = require("express");
const router = Router();

const { readdirSync } = require("fs");

const PATH_ROUTER = `${__dirname}`;

const clearFileName = (fileName) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = clearFileName(fileName);

  if (cleanName !== "index") {
    const moduleRouter = require(`./${cleanName}`);
    router.use(`/${cleanName}`, moduleRouter.router);
  }
})

module.exports = router;