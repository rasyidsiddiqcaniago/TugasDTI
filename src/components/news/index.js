import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const News = (props) => {
  const { data } = props;

  return (
    <>
      <div className="card">
        <Link to={`/infoCorona/${data.date}`} className="card-header">
          {data.date.slice(8, 10)}
          -
          {data.date.slice(5, 7)}
          -
          {data.date.slice(0, 4)}
        </Link>
        <div className="card-body">
          <div className="row ">
            {data.activity.map((e) => {
              return (
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{e.title}</h5>
                      <p className="card-text">
                        {e.desc && e.desc}
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href={e.url} className="btn btn-outline-primary">
                        Baca Selengkapnya
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
