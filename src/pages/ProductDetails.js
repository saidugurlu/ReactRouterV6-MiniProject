import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  // console.log(id);

  return (
    <div className="content">
      <div className="product">
        <div className="image">
          <img src="https://picsum.photos/520/460" alt="img" />
        </div>
        <div className="details">
          <h2>Photo - {id}</h2>
          <p>
            Cow swiss croque monsieur cheese strings croque monsieur cheese and
            biscuits feta caerphilly. Roquefort mozzarella dolcelatte. Quam
            facere accusamus exercitationem in quidem mollitia eligendi porro
            eos voluptates iure incidunt, laudantium sed harum omnis quasi?
            cheeseburger red leicester parmesan macaroni cheese melted cheese.
            Lancashire caerphilly.
          </p>
          <p>
            Blue castello bavarian bergkase macaroni cheese pepper jack
            cheesecake cheese on toast stilton gouda. Swiss everyone loves
            mozzarella when the cheese comes out everybody's happy everyone
            loves st. agur blue cheese cheese and wine cream cheese. Caerphilly
            cut the cheese manchego taleggio cow.
          </p>
        </div>
      </div>
    </div>
  );
}
