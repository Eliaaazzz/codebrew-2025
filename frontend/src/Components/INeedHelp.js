
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Heart, Utensils, MapPin, Search } from "lucide-react"

export default function INeedHelpPage() {
  const [helpType, setHelpType] = useState("")
  const [location, setLocation] = useState("")
  const [helpOffers, setHelpOffers] = useState([])
  const [filteredOffers, setFilteredOffers] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  // Help type options
  const helpTypes = [
    { value: "", label: "Select type of help" },
    { value: "food", label: "Food Supplies" },
    { value: "water", label: "Water" },
    { value: "transportation", label: "Transportation" },
    { value: "funds", label: "Financial Support" },
    { value: "medical", label: "Medical Aid" },
    { value: "shelter", label: "Shelter" },
    { value: "clothing", label: "Clothing" },
    { value: "volunteer", label: "Volunteer Time" },
    { value: "other", label: "Other" },
  ]

  // Load help offers from localStorage on component mount
  useEffect(() => {
    try {
      const storedOffers = localStorage.getItem("helpOffers")
      if (storedOffers) {
        const parsedOffers = JSON.parse(storedOffers)
        setHelpOffers(parsedOffers)
      }
    } catch (error) {
      console.error("Error loading help offers:", error)
    }
  }, [])

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault()

    let filtered = [...helpOffers]

    if (helpType) {
      filtered = filtered.filter((offer) => offer.helpType.toLowerCase() === helpType.toLowerCase())
    }

    if (location) {
      filtered = filtered.filter((offer) => offer.location.toLowerCase().includes(location.toLowerCase()))
    }

    setFilteredOffers(filtered)
    setHasSearched(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-lg font-semibold mb-4">
            <Heart className="h-6 w-6 text-rose-500" />
            <span>Community Connect</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Find Help</h1>
          <p className="mt-3 text-xl text-gray-500">Search for available resources in your area</p>
        </div>

        {/* Form Navigation */}
        <div className="flex rounded-md shadow-sm mb-8" role="group">
          <Link
            to="/INeedHelp"
            className="flex-1 py-4 px-4 text-sm font-medium rounded-l-lg border bg-rose-600 text-white border-rose-600 flex justify-center items-center"
          >
            <Utensils className="mr-2 h-5 w-5" />I Need Help
          </Link>
          <Link
            to="/ICanHelp"
            className="flex-1 py-4 px-4 text-sm font-medium rounded-r-lg border bg-white text-gray-700 border-gray-300 hover:bg-gray-50 flex justify-center items-center"
          >
            <Heart className="mr-2 h-5 w-5" />I Can Help
          </Link>
        </div>

        {/* Search Container */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Search className="mr-2 h-6 w-6 text-rose-600" />
              Search for Help
            </h2>

            <form onSubmit={handleSearch} className="space-y-6">
              {/* Help Type Filter */}
              <div>
                <label htmlFor="help-type" className="block text-sm font-medium text-gray-700">
                  What type of help do you need?
                </label>
                <select
                  id="help-type"
                  value={helpType}
                  onChange={(e) => setHelpType(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2 border"
                >
                  {helpTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Your Location
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <div className="relative flex items-stretch flex-grow focus-within:z-10">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="block w-full rounded-md border-gray-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2 border"
                      placeholder="Enter your location to find nearby help"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Search for Help
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Results Section - Only show after search */}
        {hasSearched && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Help ({filteredOffers.length})</h2>

            {filteredOffers.length === 0 ? (
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <p className="text-gray-600">No matching help offers available at the moment.</p>
                <p className="mt-2 text-sm text-gray-500">Try adjusting your search criteria or check back later.</p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                {filteredOffers.map((offer, index) => (
                  <div
                    key={index}
                    className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{offer.name}</h3>
                      <div className="space-y-2 text-sm">
                        <p className="flex items-start">
                          <MapPin className="h-5 w-5 text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{offer.location}</span>
                        </p>
                        <p>
                          <span className="font-medium text-gray-700">Offering:</span>{" "}
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                            {offer.helpType}
                          </span>
                        </p>
                        <p>
                          <span className="font-medium text-gray-700">Available:</span> {offer.capacity}
                        </p>
                        <p>
                          <span className="font-medium text-gray-700">When:</span> {offer.timeframe}
                        </p>
                        <div className="pt-3 mt-3 border-t border-gray-200">
                          <p className="font-medium text-rose-600">Contact via {offer.contactMethod}:</p>
                          <p className="font-semibold">{offer.contactDetails}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

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
