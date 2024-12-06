export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      {/* Banner Section */}
      <div
        className="banner relative  h-64 md:h-96 flex items-center justify-center"
        style={{ backgroundColor: "#EDE8E2" }}
      >
        <p
          className="text-4xl md:text-6xl font-ragilac"
          style={{ color: "#C95C5C" }}
        >
          Privacy Policy
        </p>
      </div>

      {/* Content Section */}
      <div className="content-container max-w-4xl mx-auto px-6 md:px-8 py-10 text-gray-800">
        <p className="font-redHat text-lg md:text-xl leading-7 mb-6">
          <strong>Effective Date: December 6, 2024</strong>
        </p>
        <p className="font-redHat text-sm md:text-base leading-6 mb-6">
          Welcome to GalTravel! This Privacy Policy explains how we collect,
          use, and protect your personal information. By using this site, you
          agree to the practices outlined here.
        </p>

        {/* Content Sections */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="mb-8">
            <h2 className="font-redHat text-lg md:text-xl font-semibold mb-4">
              Privacy Policy Section {index + 1}
            </h2>
            <p className="font-redHat text-sm md:text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              luctus urna sed urna ultricies ac tempor dui sagittis. In
              condimentum facilisis porta.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
