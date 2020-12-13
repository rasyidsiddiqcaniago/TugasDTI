import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ProductCard = ({ data }) => {
  return (
    <div className="col-sm">
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-body">
          <Link to={`/product/${data.id}`}>
            <h5 className="card-title">{data.name}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-muted">
            {data.in_stock ? (
              <span className="badge badge-secondary">Tersedia</span>
            ) : (
              <span className="badge badge-primary">Habis</span>
            )}
          </h6>
          <p className="card-text">{data.description}</p>
          <div
            className="priceInfo"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              className="mybadges"
              style={{
                marginRight: '10px',
                color: 'red',
                backgroundColor: '#ffcccc',
                padding: '2px 8px',
                borderRadius: '5px',
              }}
            >
              {data.display_promo_price_percentage}
            </div>
            <div style={{ color: '#999999', textDecoration: 'line-through' }}>
              {data.display_normal_price}
            </div>
          </div>
          <h5 style={{ fontWeight: 'bold' }}>{data.display_price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
