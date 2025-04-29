import { Link } from "react-router-dom"
import { Heart, Utensils,  Clock, MapPin } from "lucide-react"

export default function ICanHelp() {
function handleHelpOfferSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    
    const data = {
        name: form['helper-name'].value,
        location: form['helper-location'].value,
        helpType: form['help-offer'].value,
        capacity: form['capacity'].value,
        timeframe: form['timeframe'].value,
        contactMethod: form['helper-contact-method'].value,
        contactDetails: form['helper-contact-details'].value,
        message: form['helper-message'].value,
    };
    
    const existing = JSON.parse(localStorage.getItem('helpOffers') || '[]');
    localStorage.setItem('helpOffers', JSON.stringify([...existing, data]));
    console.log(JSON.stringify([...existing, data]));
    alert('Your offer has been submitted!');
    form.reset();
    }
      
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-lg font-semibold mb-4">
            <Heart className="h-6 w-6 text-rose-500" />
            <span>Community Connect</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Offer Help</h1>
          <p className="mt-3 text-xl text-gray-500">Share resources with those in need</p>
        </div>

        {/* Form Navigation */}
        <div className="flex rounded-md shadow-sm mb-8" role="group">
          <Link
            to="/INeedHelp"
            className="flex-1 py-4 px-4 text-sm font-medium rounded-l-lg border bg-white text-gray-700 border-gray-300 hover:bg-gray-50 flex justify-center items-center"
          >
            <Utensils className="mr-2 h-5 w-5" />I Need Help
          </Link>
          <Link
            to="/ICanHelp"
            className="flex-1 py-4 px-4 text-sm font-medium rounded-r-lg border bg-rose-600 text-white border-rose-600 flex justify-center items-center"
          >
            <Heart className="mr-2 h-5 w-5" />I Can Help
          </Link>
        </div>

        {/* Form Container */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="mr-2 h-6 w-6 text-rose-600" />
              Offer Help
            </h2>

            <form className="space-y-6" onSubmit={handleHelpOfferSubmit}>
              {/* Name / Organization */}
              <div>
                <label htmlFor="helper-name" className="block text-sm font-medium text-gray-700">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  name="helper-name"
                  id="helper-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2 border"
                  placeholder="Enter your name or organization"
                  required
                />
              </div>

              {/* Location / Areas you can reach */}
              <div>
                <label htmlFor="helper-location" className="block text-sm font-medium text-gray-700">
                  Your Location / Areas You Can Reach
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <div className="relative flex items-stretch flex-grow focus-within:z-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="helper-location"
                      id="helper-location"
                      className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2 border"
                      placeholder="Enter locations you can provide help to"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Type of help you can offer */}
              <div>
                <label htmlFor="help-offer" className="block text-sm font-medium text-gray-700">
                  Type of Help You Can Offer
                </label>
                <select
                  id="help-offer"
                  name="help-offer"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2 border"
                  required
                >
                  <option value="">Select type of help</option>
                  <option value="food">Food Supplies</option>
                  <option value="water">Water</option>
                  <option value="transportation">Transportation</option>
                  <option value="funds">Financial Support</option>
                  <option value="medical">Medical Aid</option>
                  <option value="shelter">Shelter</option>
                  <option value="clothing">Clothing</option>
                  <option value="volunteer">Volunteer Time</option>
                  <option value="other">Other (please specify)</option>
                </select>
              </div>

              {/* Quantity / Capacity */}
              <div>
                <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
                  Quantity / Capacity
                </label>
                <input
                  type="text"
                  name="capacity"
                  id="capacity"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2 border"
                  placeholder="How much help can you provide? (e.g., 20 meals, 5 people, etc.)"
                  required
                />
              </div>

              {/* Available time frame */}
              <div>
                <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700">
                  Available Time Frame
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <div className="relative flex items-stretch flex-grow focus-within:z-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="timeframe"
                      id="timeframe"
                      className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2 border"
                      placeholder="When are you available to help? (e.g., weekends, evenings, etc.)"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact method */}
              <div>
                <label htmlFor="helper-contact-method" className="block text-sm font-medium text-gray-700">
                  Preferred Contact Method
                </label>
                <select
                  id="helper-contact-method"
                  name="helper-contact-method"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2 border"
                  required
                >
                  <option value="">Select contact method</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="email">Email</option>
                </select>
              </div>

              {/* Contact details */}
              <div>
                <label htmlFor="helper-contact-details" className="block text-sm font-medium text-gray-700">
                  Contact Details
                </label>
                <input
                  type="text"
                  name="helper-contact-details"
                  id="helper-contact-details"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2 border"
                  placeholder="Enter your contact information"
                  required
                />
              </div>

              {/* Additional message */}
              <div>
                <label htmlFor="helper-message" className="block text-sm font-medium text-gray-700">
                  Additional Details (Optional)
                </label>
                <div className="mt-1">
                  <textarea
                    id="helper-message"
                    name="helper-message"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2 border"
                    placeholder="Please provide any additional details about the help you can offer"
                  />
                </div>
              </div>


              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Submit Offer
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-8 text-center">
          <Link to="/" className="text-sm font-medium text-rose-600 hover:text-rose-500">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
