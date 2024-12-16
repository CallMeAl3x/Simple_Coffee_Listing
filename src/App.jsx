import { useEffect, useState } from "react";
import star from "./assets/img/Star.svg";
import starfill from "./assets/img/Star_fill.svg";
import circles from "./assets/img/vector.svg";

function App() {
  // État pour stocker tous les articles
  const [posts, setPosts] = useState([]);
  // État pour stocker les articles filtrés
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);

  // Effet pour charger les données de l'API
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
        setFilteredPosts(result); // Initialiser avec tous les articles
      });
  }, []);

  // Fonction pour filtrer les articles disponibles
  const showAvailablePosts = () => {
    setFilteredPosts(posts.filter((post) => post.available));
    setShowAvailable(true);
  };

  // Fonction pour afficher tous les articles
  const showAllPosts = () => {
    setFilteredPosts(posts);
    setShowAvailable(false);
  };

  return (
    <>
      <main className="bg-almost_black pb-20 min-h-screen">
        <div className="h-[40vh] bg-cafe bg-cover bg-center -z-1"></div>
        <section className="pagewrapper bg-black_pearl rounded-xl sm:max-w-[670px] lg:max-w-[1050px] max-w-[690px] sm:min-w-[60vw] flex ml-auto mr-auto mt-[-12.55rem] z-1 pb-20 max-sm:-mt-[12.55rem] max-sm:m-[0.975rem] ">
          <div className="flex flex-col justify-center items-center	 text-almost_white w-full sectionwrapper overflow-hidden">
            <div className="relative">
              <h1 className="text-[32px] text-center font-semibold mt-10 flex justify-center items-center max-sm:text-[28px] z-10 relative">
                Our Collection
              </h1>
              <img src={circles} alt="" className="absolute top-[17%] left-[52%] -z-1" draggable="false" />
            </div>
            <p className="text-center ml-auto mr-auto sm:max-w-[483px] text-almost_grey mt-2 text-[16px] max-sm:text-[15px] font-semibold z-10 relative max-sm:max-w-[279px]">
              Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins,
              expertly roasted in small batches and shipped fresh weekly.
            </p>
            <div className="flex justify-center items-center	 mt-4">
              <label
                htmlFor="AllProducts"
                className={`px-3 py-1 select-none cursor-pointer rounded-lg ${
                  !showAvailable ? "bg-almost_grey" : "text-almost_white"
                }`}
                onClick={showAllPosts}
              >
                All Products
              </label>
              <input type="checkbox" id="AllProducts" className="appearance-none" value="AllProducts" />
              <label
                htmlFor="Available Now"
                className={`px-3 py-1 select-none cursor-pointer rounded-lg ml-6 ${
                  showAvailable ? "bg-almost_grey" : "text-almost_white"
                }`}
                onClick={showAvailablePosts}
              >
                Available Now
              </label>
              <input type="checkbox" id="Available Now" className="appearance-none" value="Available Now" />
            </div>

            <div className="product_wrapper_grid gap-x-8 gap-y-16 mt-8 grid ml-auto mr-auto grid-cols-1 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <div key={post.id}>
                  <div className="product_wrapper_single">
                    <div className="bg-cover bg-no-repeat bg-center relative">
                      <img
                        src={post.image}
                        className="object-cover h-[165px] rounded-lg max-sm:h-[140px]"
                        alt=""
                        draggable="false"
                      />
                      {post.popular ? (
                        <button className="bg-yellow rounded-full text-[12px] px-3 py-[2px] font-semibold text-almost_black absolute top-2 left-2 cursor-default">
                          Popular
                        </button>
                      ) : null}
                    </div>
                    <div className="flex justify-between mt-3 text-base font-semibold">
                      <h4>{post.name}</h4>
                      <button className="bg-almost_green rounded-[0.35rem] font-bold text-almost_black text-[12px] px-[10px] py-[1px] cursor-default">
                        {post.price}
                      </button>
                    </div>
                    <div className="flex justify-between mt-1 items-center">
                      <div className="flex items-center	">
                        {post.rating ? <img src={starfill} alt="" /> : <img src={star} alt="" />}
                        {post.rating ? (
                          <div className="flex font-semibold text-sm">
                            <p className="ml-1 text-almost_white font-semibold">{post.rating}</p>
                            <p className="ml-1 text-almost_grey font-bold">({post.votes} votes)</p>
                          </div>
                        ) : (
                          <p className="ml-1 text-almost_grey font-semibold">No ratings</p>
                        )}
                      </div>
                      {!post.available ? (
                        <div className="flex text-almost_red font-semibold text-sm align-center">Sold out</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
