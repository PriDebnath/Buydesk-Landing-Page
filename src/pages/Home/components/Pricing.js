function PricingCard(props) {
  let { cardStyle, popular, price, priceColor, purchaseStyle,userCount,projectCount,monthCount } = props;
  return (
    <div className={cardStyle + " px-24 py-12    rounded-xl flex  flex-col justify-between  items-center"}>
      <p className="font-semibold ">STARTING FROM</p>
      <button className="text-xl text-blue-600 bg-white px-6 py-0 rounded-2xl m-2">
        {popular}
      </button>
    <h2 className={`text-4xl ${priceColor}`}>{price}</h2>
     <ul className="my-4">
      <li className="my-2">All UI components</li>
      <li className="my-2">Lifetime access</li>
      <li>Free updates</li>
      <li className="my-2">{userCount}</li>
      <li className="my-2">{projectCount}</li>
      <li className="my-2">{monthCount}</li>
     </ul>
      <button className={`px-4 py-2 rounded-[8rem] text-semibold ${purchaseStyle}`}>Purchase Now</button>
    </div>
  );
}

function Pricing() {
  return (
    <div className="text-center p-12">
      <div className="px-72">
        <h2 className="text-sky-600  font-bold text-xl my-2">Pricing Table</h2>
        <h1 className="text-5xl font-semibold">Our Pricing Plan</h1>
        <p className="text-xl text-gray-500 my-6 pb-8">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

      <div className="pricingCard flex ">
        <PricingCard
          cardStyle={"border-2 border-sky-600 h-100"}
          price={"$12.99/mo"}
          priceColor={' font-semibold text-sky-600'}
          
          purchaseStyle={"text-blue-600 border-2 border-sky-600"}
          userCount={'1 User'}
          projectCount={'1  project'}
          monthCount={'1 months support'}
        />

        <PricingCard
          cardStyle={"bg-blue-600 text-white mx-8 scale-110"}
          popular={"POPULAR"}
          price={"$ 19.99/mo"}
          userCount={'5 User'}
          projectCount={' 5 project'}
          monthCount={'6 months support'}
          purchaseStyle="bg-white text-blue-600"
        />
        <PricingCard
          cardStyle={"border-2 border-sky-600 "}
          price={"$ 70.99/y"}
          priceColor={' font-semibold text-sky-600'}
          
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
