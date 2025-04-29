import { Link } from "react-router-dom"
import { Heart, Utensils } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function CommunityConnect() {
 const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <Heart className="h-6 w-6 text-rose-500" />
            <span>Community Connect</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:underline">
              About
            </a>
            <a href="#howitworks" className="text-sm font-medium hover:underline">
              How it works
            </a>

          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-rose-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Connecting Our Community During Crisis
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  A platform for our community to share resources, support each other, and overcome challenges together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button onClick={() => {navigate("/INeedHelp")}}  className="inline-flex items-center justify-center rounded-md bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2">
                  <Utensils className="mr-2 h-5 w-5" />I Need Help
                </button>
                <button onClick={() => {navigate("/ICanHelp")}} className="inline-flex items-center justify-center rounded-md border border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2">
                  <Heart className="mr-2 h-5 w-5" />I Can Help
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-rose-100 p-4">
                  <Utensils className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold">Request Resources</h3>
                <p className="text-gray-500">
                  Let the community know what you need, whether it's food, water, medicine, or other essential supplies.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-rose-100 p-4">
                  <Heart className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold">Offer Support</h3>
                <p className="text-gray-500">
                  Share what resources you can provide to help others in our community during this difficult time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-rose-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-rose-600"
                  >
                    <path d="M16 22h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-2v5Z" />
                    <path d="M14 15v2a2 2 0 0 0 2 2h2" />
                    <path d="M7 8v11a3 3 0 0 1-6 0V8a3 3 0 0 1 6 0Z" />
                    <path d="M18 8V6a3 3 0 0 0-3-3H7" />
                    <path d="M18 8a3 3 0 0 1 6 0v1a3 3 0 0 1-6 0V8Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Connect Directly</h3>
                <p className="text-gray-500">
                  Our platform helps match those in need with those who can help, creating direct connections within our
                  community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="howitworks" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Our platform directly connects those who need resources with those who can provide them based on
                  specific needs.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2">
                <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Search For What You Need</h3>
                  <p className="text-gray-500">
                    Simply search for specific resources (food, water, medicine) or professional help you need.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Post What You Can Offer</h3>
                  <p className="text-gray-500">
                    Share what resources or professional skills you can provide to others in your community.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Find Matching Resources</h3>
                  <p className="text-gray-500">
                    Browse available resources or find people offering exactly what you're looking for.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    4
                  </div>
                  <h3 className="text-xl font-bold">Connect Directly</h3>
                  <p className="text-gray-500">
                    Get the contact number of the person and reach out directly to coordinate receiving or providing
                    help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-100">
        <div className="container mx-auto flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <Heart className="h-6 w-6 text-rose-500" />
              <span>Community Connect</span>
            </Link>
            <p className="text-sm text-gray-500">
              A community-driven platform to connect and share resources during crisis.
            </p>
          </div>
            </div>
        <div className="border-t py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Community Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
