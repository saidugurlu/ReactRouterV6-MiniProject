import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="content">
      <h3>Specific</h3>
      <div className="products">
        {[1, 2, 3, 4].map((p) => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src={`https://picsum.photos/id/1${p}/250/150`} alt="img" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Static</h3>
      <div className="products">
        {[5, 6, 7, 8].map((p) => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src={`https://picsum.photos/id/2${p}/250/150`} alt="img" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Grayscale</h3>
      <div className="products">
        {[9, 10, 11, 12].map((p) => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src={`https://picsum.photos/id/3${p}/250/150`} alt="img" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
