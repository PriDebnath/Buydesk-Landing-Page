function PricingCard(props) {
  let { cardStyle, popular, price, priceColor, purchaseStyle,userCount,projectCount,monthCount } = props;
  return (
    <div className={cardStyle + " p-28   rounded-xl"}>
      <p className="font-semibold ">STARTING FROM</p>
      <button className="text-xl text-sky-600 bg-white px-6 py-0 rounded-2xl m-2">
        {popular}
      </button>
    <h2 className={priceColor}>{price}</h2>
     <ul>
      <li>{userCount}</li>
      <li>All UI components</li>
      <li>Lifetime access</li>
      <li>Free updates</li>
      <li>{projectCount}</li>
      <li>{monthCount}</li>
     </ul>
      <button className={purchaseStyle}>Purchase Now</button>
    </div>
  );
}

function Pricing() {
  return (
    <div className="text-center p-12">
      <div className="px-72">
        <h2 className="text-sky-600  font-bold text-xl my-2">Pricing Table</h2>
        <h1 className="text-5xl font-semibold">Our Pricing Plan</h1>
        <p className="text-xl text-gray-500 my-6">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

      <div className="pricingCard flex ">
        <PricingCard
          cardStyle={"border-2 border-sky-600 h-100"}
          price={"$12.99/mo"}
          priceColor={'text-4xl font-semibold text-sky-600'}
          
          purchaseStyle={"text-blue-600 border-2 border-sky-600"}
          userCount={'1 User'}
          projectCount={'1  project'}
          monthCount={'1 months support'}
        />

        <PricingCard
          cardStyle={"bg-sky-600 text-white "}
          popular={"POPULAR"}
          price={"$ 19.99/mo"}
          userCount={'5 User'}
          projectCount={' 5 project'}
          monthCount={'6 months support'}
        />
        <PricingCard
          cardStyle={"border-2 border-sky-600 "}
          price={"$ 70.99/y"}
          priceColor={'text-4xl font-semibold text-sky-600'}
          
          purchaseStyle={"text-blue-600 border-2 border-sky-600"}
          userCount={'100 User'}
          projectCount={'use on unlimited project'}
          monthCount={'2 years support'}
        />
      </div>
    </div>
  );
}

export default Pricing;
