
const AboutUs = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-500">Learn more about our mission, vision, and team.</p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                At MCQ Test App, our mission is to provide high-quality, engaging, and accessible multiple-choice questions for learners worldwide.
                We believe in the power of education and strive to make learning fun and effective for everyone.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-gray-600">
                Our vision is to become the leading platform for online multiple-choice questions, empowering learners of all ages to achieve their educational goals.
                We aim to continuously innovate and improve our platform to meet the evolving needs of our users.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">Meet Our Team</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member 1" />
                <h3 className="mt-4 text-xl font-medium text-gray-900">John Doe</h3>
                <p className="mt-2 text-gray-600">CEO & Founder</p>
                <p className="mt-2 text-gray-500">John is the visionary behind MCQ Test App, with a passion for education and technology.</p>
              </div>
              {/* Team Member 2 */}
              <div className="text-center">
                <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member 2" />
                <h3 className="mt-4 text-xl font-medium text-gray-900">Jane Smith</h3>
                <p className="mt-2 text-gray-600">Chief Technology Officer</p>
                <p className="mt-2 text-gray-500">Jane leads our tech team, ensuring our platform is reliable, secure, and user-friendly.</p>
              </div>
              {/* Team Member 3 */}
              <div className="text-center">
                <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member 3" />
                <h3 className="mt-4 text-xl font-medium text-gray-900">Emily Johnson</h3>
                <p className="mt-2 text-gray-600">Head of Content</p>
                <p className="mt-2 text-gray-500">Emily oversees the creation of our high-quality MCQs, ensuring they are accurate and engaging.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
