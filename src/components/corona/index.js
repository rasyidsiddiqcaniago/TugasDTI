import React, { useEffect, useState } from 'react';
import app from '../../service/firebase';
import 'firebase/database';

const Corona = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const db = app.database().ref('news');
    console.log(db);
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
    });
  }, []);

  return (
    <div>
      <h2>Data corona</h2>
      <p>{news}</p>
    </div>
  );
};

export default Corona;
