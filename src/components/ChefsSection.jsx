const ChefsSection = () => {
  return (
    <>
      <h2>Meet Our Master Chefs</h2>

      
      <div class="img-container">
          <img
            src="/images/chef1.jpg"
            alt="Head Chef"
            width="200"
            height="180"
          />
          <img
            src="/images/chef2.jpg"
            alt="Sous Chef"
            width="200"
            height="180"
          />
          <img
            src="/images/chef3.jpg"
            alt="Pastry Chef"
            width="200"
            height="180"
          />
        </div>

      <p>
        Our talented chefs come from diverse culinary backgrounds but share a
        single vision — to serve the <b>best desi food</b> in town using
        authentic recipes and ingredients.
      </p>

      <ul>
        <li>Chef Ahmed – Specializes in traditional Karahi and BBQ dishes.</li>
        <li>Chef Fatima – Expert in Mughlai and vegetarian cuisine.</li>
        <li>Chef Ali – Known for his delicious desserts and fusion experiments.</li>
      </ul>

      <hr />
    </>
  );
};

export default ChefsSection;
