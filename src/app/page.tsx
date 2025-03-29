import Image from "next/image";
import Link from "next/link";
import Header from "./component/header";
import Footer from "./component/footer";
import YandexMap from "./component/maps";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <section className="w-full bg-red-600 text-white py-12 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Բարի գալուստ մեր երշիկեղենի առցանց խանութ
        </h1>
        <p className="text-base sm:text-lg">
          Թարմ և որակյալ երշիկներ ու կիսաֆաբրիկատներ՝ ուղիղ արտադրողից
        </p>
        <div className="mt-6">
          <Link href="/products">
            <button className="bg-white text-red-600 px-4 sm:px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition">
              Դիտել Արտադրանքը
            </button>
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
          Մեր Հատուկ Արտադրանքները
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              name: "Երշիկ 'Գավառի'",
              price: "1500 ֏",
              image: "/3301983030.jpg",
            },
            {
              name: "Ապխտած 'Դիլիջան'",
              price: "1800 ֏",
              image: "/3301983030.jpg",
            },
            {
              name: "Երշիկ 'Երևան'",
              price: "1200 ֏",
              image: "/3301983030.jpg",
            },
          ].map((product, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-4 shadow hover:shadow-md transition flex flex-col items-center text-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-auto"
              />
              <h3 className="mt-4 font-semibold text-lg sm:text-xl">
                {product.name}
              </h3>
              <p className="text-red-600 font-bold mt-1">{product.price}</p>
              <button className="mt-3 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
                Ավելացնել Զամբյուղ
              </button>
            </div>
          ))}
        </div>
      </section>
      <YandexMap />
      <Footer />
    </main>
  );
}
