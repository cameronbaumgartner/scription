const express = require('express');
const feed = require('../controllers/feedController');
const router = express.Router();

router.get('/',
  feed.getScriptions,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

router.put('/',
  feed.getSong,
  feed.addScription,
  (req, res) => res.status(200).json({ status: 'okay' })
);

router.put('/comments',
  feed.addComment,
  (req, res) => res.status(200).json({ status: 'okay' })
)

router.get('/comments',
  feed.getComments,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

router.get('/likes',
  feed.getLikes,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);

router.put('/likes',
  feed.addLike,
  (req, res) => res.status(200).json({ status: 'okay' })
)

module.exports = router;