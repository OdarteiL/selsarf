import img1 from "../../assets/images/blurred-pub.jpg";
import img2 from "../../assets/images/blackman.jpg";

export default function Services() {
  return (
    <>
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Item 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={img1}
              alt="Service 1"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-4">Service 1</h3>
            <p className="text-gray-700 mb-4">
              Description of Service 1. You can add more details here about the service offered.
            </p>
            <a href="#" className="inline-block text-blue-600 hover:underline">Learn more</a>
          </div>

          {/* Service Item 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={img2}
              alt="Service 2"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-4">Service 2</h3>
            <p className="text-gray-700 mb-4">
              Description of Service 2. You can add more details here about the service offered.
            </p>
            <a href="#" className="inline-block text-blue-600 hover:underline">Learn more</a>
          </div>

          {/* Service Item 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={img1}
              alt="Service 3"
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold mb-4">Service 3</h3>
            <p className="text-gray-700 mb-4">
              Description of Service 3. You can add more details here about the service offered.
            </p>
            <a href="#" className="inline-block text-blue-600 hover:underline">Learn more</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
