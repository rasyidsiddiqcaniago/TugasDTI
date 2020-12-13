import React, { useEffect, useState } from 'react';
import { productService } from '../../services';
import { ProductCard, Loading } from '../../components';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [userDataLoading, setUserDataLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [limit, setLimit] = useState(50);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setUserDataLoading(true);
    productService
      .getProduct(search, limit, offset)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(inputSearch);
    console.log(search, ' & inp :', inputSearch);
  };

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

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
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              value={inputSearch}
              onChange={handleChange}
              placeholder="Search. . . (ex: bango)"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <h1 className="display-4">Rasyeed Store</h1>
        <p className="lead">Yuk Berbelanja</p>
        <div className="row">
          {products.map((e, index) => {
            return <ProductCard data={e} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
