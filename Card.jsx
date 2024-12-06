import React from "react";
import "./card.css"; // CSS alag file me

const Card = () => {
  const items = [
    { image: "https://preview.colorlib.com/theme/easy/images/flaticon/svg/002-coins.svg", text:<><h3>Cash Collection</h3><p>Manage your invoces from<br/> creation to payment. With <br/>Upflow you'll collect 100% of.</p></> },
    { image: "https://preview.colorlib.com/theme/easy/images/flaticon/svg/001-stats.svg", text: <><h3>Analytics</h3><p>Manage your invoces from<br/>creation to payment. With<br/> Upflow you'll collect 100% of.

        </p></> },
    { image: "https://preview.colorlib.com/theme/easy/images/flaticon/svg/006-garage.svg", text:<><h3>Cash Collection</h3><p>Manage your invoces from<br/> creation to payment. With <br/>Upflow you'll collect 100% of.</p></> },
    { image: "https://preview.colorlib.com/theme/easy/images/flaticon/svg/004-notebook.svg", text:<><h3>Cash Collection</h3><p>Manage your invoces from<br/> creation to payment. With <br/>Upflow you'll collect 100% of.</p></> },
    { image: "https://preview.colorlib.com/theme/easy/images/flaticon/svg/003-gold-ingots.svg", text:<><h3>Cash Collection</h3><p>Manage your invoces from<br/> creation to payment. With <br/>Upflow you'll collect 100% of.</p></> },
    { image: "https://preview.colorlib.com/theme/easy/images/flaticon/svg/005-brochure.svg", text: <><h3>Cash Collection</h3><p>Manage your invoces from<br/> creation to payment. With <br/>Upflow you'll collect 100% of.</p></> },
  ];

  return (
    <div className="gallery-container">
      {items.map((item, index) => (
        <div className="gallery-item" key={index}>
            <div className="imgg">
          <img src={item.image} alt={`Item ${index + 1}`} />
          </div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
