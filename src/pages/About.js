import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="content">
      <h2>About Us</h2>
      <p>
        The big cheese croque monsieur melted cheese. Say cheese bavarian
        bergkase cheddar pepper jack airedale queso danish fontina taleggio.
        Cheesecake queso dolcelatte smelly cheese parmesan cheese on toast
        cheese triangles boursin. Blue castello bavarian bergkase macaroni
        cheese pepper jack cheesecake cheese on toast stilton gouda. Swiss
        everyone loves mozzarella when the cheese comes out everybody's happy
        everyone loves st. agur blue cheese cheese and wine cream cheese.
        Caerphilly cut the cheese manchego taleggio cow.
      </p>

      <p>
        Stinking bishop halloumi cheese on toast. Bocconcini monterey jack
        cheese and biscuits say cheese cheese slices fromage frais hard cheese
        cheesy feet. Airedale blue castello cheddar swiss cheese and wine cream
        cheese caerphilly caerphilly. Squirty cheese airedale cheese on toast
        fromage croque monsieur port-salut lancashire brie. Dolcelatte stinking
        bishop cheese strings bavarian bergkase rubber cheese fondue gouda
        cheesy feet. Jarlsberg cheese triangles bocconcini.
      </p>
      <p>
        Who moved my cheese babybel queso. Blue castello cheese and wine blue
        castello boursin taleggio stilton cheesy feet cheesy feet. Caerphilly
        cauliflower cheese the big cheese cheese triangles halloumi red
        leicester croque monsieur fromage. Lancashire parmesan squirty cheese
        hard cheese mozzarella jarlsberg feta port-salut. Cow swiss croque
        monsieur cheese strings croque monsieur cheese and biscuits feta
        caerphilly. Roquefort mozzarella dolcelatte cheeseburger red leicester
        parmesan macaroni cheese melted cheese. Lancashire caerphilly.
      </p>

      <button onClick={() => navigate("/products")}>See our photo boards</button>
    </div>
  );
}
