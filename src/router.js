const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

const RESUME_TABLE = process.env.RESUME_TABLE;
const dynamoDb = new AWS.DynamoDB.DocumentClient();

router.route('/test/:id').get( (req, res) => {
  let id = req.params.id;
  console.log(id);

  res.set('Content-Type', 'application/json');
  res.send({"id":id});
});

router.route('/resume').post( (req, res) => {
  console.log(req.body);
  const { resumeId, name, skills } = req.body;

  const params = {
    TableName: RESUME_TABLE,
    Item: {
      resumeId: resumeId,
      name: name,
      skills: skills
    },
  };

  dynamoDb.put(params, (error) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not create resume' });
    }
    res.json({ resumeId, name, skills });
  });
});

router.route('/resume/:resumeId').get( (req, res) => {
  const params = {
    TableName: RESUME_TABLE,
    Key: {
      resumeId: req.params.resumeId,
    },
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: 'Could not get resume' });
    }
    if (result.Item) {
      const {resumeId, name, skills} = result.Item;
      res.json({ resumeId, name, skills});
    } else {
      res.status(404).json({ error: "Resume not found" });
    }
  });
});

module.exports = router;
