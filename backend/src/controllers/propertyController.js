const Property = require('../models/propertyModel');

const timeElapsed = Date.now(); // get the date now
const today = new Date(timeElapsed); // formated a date today.

// Create a new property
const createProperty = async (req, res, next) => {
  const { address, neighborhood, parking, transportation } = req.body;
  try {
    created_at = today.toISOString();
    updated_at = today.toISOString();

    const workspace = await Property.create({ address, neighborhood, parking, transportation, created_at, updated_at });
    res.status(201).json(workspace);
  } catch (err) {
    next(err);
    console.log('error: ' + err.message);
  }
};

// Get all property
const getAllProperty = async (req, res, next) => {
    try {
      const workspaces = await Property.findAll();
      res.status(200).json(workspaces);
    } catch (err) {
      next(err);
    }
  };

module.exports =  {
    createProperty,
    getAllProperty,
}