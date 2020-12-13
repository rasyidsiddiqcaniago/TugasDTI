import React, { useEffect, useState } from 'react';
import { productService } from '../../services';
import { ProductCard, Loading } from '../../components';
import { useParams } from 'react-router-dom';

const DetailProduct = () => {
  const [products, setProducts] = useState({});
  const [error, setError] = useState(false);
  const [userDataLoading, setUserDataLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(50);
  const [offset, setOffset] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    setUserDataLoading(true);
    productService
      .getProduct(search, limit, offset)
      .then((res) => {
        res.data.filter((e) => {
          if (e.id == id) {
            setProducts(e);
          }
        });
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, [search]);

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        {error && <p>Error bos</p>}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {userDataLoading && <Loading />}
        </div>

        <h1 className="display-4">Data Product</h1>
        <p className="lead">{products.description}</p>
        <div className="row">
          <ProductCard data={products} />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
