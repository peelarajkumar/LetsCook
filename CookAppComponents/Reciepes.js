import { List } from "antd";

const Reciepes = () => {

  let famousRecipes = [
    {
      name: "Beef Wellington",
      restaurant: "Gordon Ramsay's Restaurants",
      description: "Filet steak coated with pâté and duxelles, wrapped in puff pastry, and baked."
    },
    {
      name: "Oysters Rockefeller",
      restaurant: "Antoine's Restaurant (New Orleans, USA)",
      description: "Oysters on the half-shell topped with a rich sauce of butter, parsley, and green herbs, then baked."
    },
    {
      name: "Coq au Vin",
      restaurant: "Paul Bocuse (France)",
      description: "A traditional French dish made with chicken braised with wine, lardons, mushrooms, and garlic."
    },
    {
      name: "Peking Duck",
      restaurant: "Quanjude (Beijing, China)",
      description: "Crispy roasted duck served with thin pancakes, hoisin sauce, and scallions."
    },
    {
      name: "Caesar Salad",
      restaurant: "Caesar's Restaurant (Tijuana, Mexico)",
      description: "Romaine lettuce, croutons, and Parmesan cheese dressed with a lemon-garlic vinaigrette."
    },
    {
      name: "Black Truffle Pasta",
      restaurant: "Nobu (Various locations worldwide)",
      description: "Fresh pasta served with black truffle sauce, offering an earthy and luxurious flavor."
    }
  ];
  

  return (
    <div>
      <h2>We have our Reciepes Coming Soon !</h2>
      <List 
      header={
      <div>Our Famous Reciepes</div>}
      size="large"
      dataSource={famousRecipes}
      renderItem={(item)=>(<List.Item>{`${item.name} from the ${item.restaurant}` }</List.Item>)}
      ></List>
    </div>
  )
}

export default Reciepes
