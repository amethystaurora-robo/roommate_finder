import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Home, Search, Users, MapPin, ArrowRight } from "lucide-react"
import PropertyCard from "@/components/property-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - Simplified like Rightmove */}
        <section className="bg-rightmove-blue py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Find Your Perfect Space with Homely
              </h1>
              <p className="text-xl text-white/90">Search rooms, roommates, and properties for sale all in one place</p>
            </div>
          </div>
        </section>

        {/* Search Section - Rightmove style */}
        <section className="container relative -mt-8 z-30 mb-12">
          <div className="bg-white rounded-md shadow-md p-6 border border-gray-200">
            <Tabs defaultValue="rooms" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-100">
                <TabsTrigger
                  value="rooms"
                  className="flex items-center gap-2 data-[state=active]:bg-rightmove-purple data-[state=active]:text-white"
                  asChild
                >
                  <Link href="/rooms">
                    <Home className="h-4 w-4" />
                    <span>Find Rooms</span>
                  </Link>
                </TabsTrigger>
                <TabsTrigger
                  value="roommates"
                  className="flex items-center gap-2 data-[state=active]:bg-rightmove-purple data-[state=active]:text-white"
                  asChild
                >
                  <Link href="/roommates">
                    <Users className="h-4 w-4" />
                    <span>Find Roommates</span>
                  </Link>
                </TabsTrigger>
                <TabsTrigger
                  value="properties"
                  className="flex items-center gap-2 data-[state=active]:bg-rightmove-purple data-[state=active]:text-white"
                >
                  <Building className="h-4 w-4" />
                  <span>Buy Property</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="rooms" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="flex items-center border rounded-md pl-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="City, neighborhood, or address"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                  <div>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Price (any)</option>
                      <option value="0-5000">₱0 - ₱5,000</option>
                      <option value="5000-10000">₱5,000 - ₱10,000</option>
                      <option value="10000-20000">₱10,000 - ₱20,000</option>
                      <option value="20000+">₱20,000+</option>
                    </select>
                  </div>
                  <div>
                    <Button className="w-full bg-rightmove-purple hover:bg-rightmove-purple/90" asChild>
                      <Link href="/rooms">
                        <Search className="mr-2 h-4 w-4" /> Search
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="roommates" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="flex items-center border rounded-md pl-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="City, neighborhood, or address"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                  <div>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Budget (any)</option>
                      <option value="0-5000">₱0 - ₱5,000</option>
                      <option value="5000-10000">₱5,000 - ₱10,000</option>
                      <option value="10000-20000">₱10,000 - ₱20,000</option>
                      <option value="20000+">₱20,000+</option>
                    </select>
                  </div>
                  <div>
                    <Button className="w-full bg-rightmove-purple hover:bg-rightmove-purple/90" asChild>
                      <Link href="/roommates">
                        <Search className="mr-2 h-4 w-4" /> Search
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="properties" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="flex items-center border rounded-md pl-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="City, neighborhood, or address"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                  <div>
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Price (any)</option>
                      <option value="0-1m">₱0 - ₱1M</option>
                      <option value="1m-3m">₱1M - ₱3M</option>
                      <option value="3m-5m">₱3M - ₱5M</option>
                      <option value="5m-10m">₱5M - ₱10M</option>
                      <option value="10m+">₱10M+</option>
                    </select>
                  </div>
                  <div>
                    <Button className="w-full bg-rightmove-purple hover:bg-rightmove-purple/90">
                      <Search className="mr-2 h-4 w-4" /> Search
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Rooms Section - Rightmove style */}
        <section className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-rightmove-blue">Featured Rooms</h2>
            <Link href="/rooms" className="text-rightmove-purple flex items-center font-medium">
              View all rooms <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PropertyCard
              type="room"
              title="Cozy Studio in Makati"
              location="Makati, Metro Manila"
              price="₱12,000"
              image="/minimalist-loft.png"
              beds={1}
              baths={1}
              available="Available Now"
            />
            <PropertyCard
              type="room"
              title="Modern Room in BGC Condo"
              location="BGC, Taguig"
              price="₱15,000"
              image="/serene-city-view-suite.png"
              beds={1}
              baths={1}
              available="Available Aug 1"
            />
            <PropertyCard
              type="room"
              title="Student Room near DLSU"
              location="Malate, Manila"
              price="₱8,000"
              image="/vibrant-student-living.png"
              beds={1}
              baths={1}
              available="Available Now"
            />
            <PropertyCard
              type="room"
              title="Furnished Room in Quezon City"
              location="Quezon City"
              price="₱10,000"
              image="/cozy-furnished-bedroom.png"
              beds={1}
              baths={1}
              available="Available Sep 1"
            />
          </div>
        </section>

        {/* Featured Roommates Section - Rightmove style */}
        <section className="container py-8 bg-gray-50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-rightmove-blue">Find Roommates</h2>
            <Link href="/roommates" className="text-rightmove-purple flex items-center font-medium">
              View all roommates <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-md shadow-sm overflow-hidden border border-gray-200">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Maria, 26</h3>
                    <p className="text-sm text-gray-500">Young Professional</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">Looking for a roommate in Makati area</p>
                  <p className="text-sm font-medium">Budget: ₱8,000 - ₱12,000</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" /> Makati, Metro Manila
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-rightmove-purple text-rightmove-purple hover:bg-rightmove-purple/10"
                >
                  View Profile
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-sm overflow-hidden border border-gray-200">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">John, 24</h3>
                    <p className="text-sm text-gray-500">Student</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">Looking for roommates near UP Diliman</p>
                  <p className="text-sm font-medium">Budget: ₱5,000 - ₱7,000</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" /> Quezon City
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-rightmove-purple text-rightmove-purple hover:bg-rightmove-purple/10"
                >
                  View Profile
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-sm overflow-hidden border border-gray-200">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Anna, 28</h3>
                    <p className="text-sm text-gray-500">IT Professional</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">Looking for a roommate in BGC</p>
                  <p className="text-sm font-medium">Budget: ₱15,000 - ₱20,000</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" /> BGC, Taguig
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-rightmove-purple text-rightmove-purple hover:bg-rightmove-purple/10"
                >
                  View Profile
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-sm overflow-hidden border border-gray-200">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Miguel, 25</h3>
                    <p className="text-sm text-gray-500">BPO Employee</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm">Looking for roommates in Eastwood</p>
                  <p className="text-sm font-medium">Budget: ₱7,000 - ₱10,000</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" /> Eastwood, Quezon City
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-rightmove-purple text-rightmove-purple hover:bg-rightmove-purple/10"
                >
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties Section - Rightmove style */}
        <section className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-rightmove-blue">Featured Properties for Sale</h2>
            <Link href="/properties" className="text-rightmove-purple flex items-center font-medium">
              View all properties <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <PropertyCard
              type="property"
              title="3BR Condo in Rockwell"
              location="Rockwell, Makati"
              price="₱25,000,000"
              image="/modern-penthouse-view.png"
              beds={3}
              baths={2}
              size="120 sqm"
            />
            <PropertyCard
              type="property"
              title="2BR Condo in Ortigas"
              location="Ortigas, Pasig"
              price="₱12,500,000"
              image="/sleek-urban-kitchen.png"
              beds={2}
              baths={2}
              size="80 sqm"
            />
            <PropertyCard
              type="property"
              title="House and Lot in Alabang"
              location="Alabang, Muntinlupa"
              price="₱18,000,000"
              image="/sleek-modern-residence.png"
              beds={4}
              baths={3}
              size="250 sqm"
            />
          </div>
        </section>

        {/* Popular Locations - Rightmove style */}
        <section className="container py-8 bg-gray-50">
          <h2 className="text-2xl font-bold tracking-tight text-rightmove-blue mb-6">Popular Locations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative rounded-md overflow-hidden h-40 group border border-gray-200">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all z-10" />
              <div
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/bustling-manila-cityscape.png')" }}
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl">Metro Manila</h3>
              </div>
            </div>
            <div className="relative rounded-md overflow-hidden h-40 group border border-gray-200">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all z-10" />
              <div className="h-full bg-cover bg-center" style={{ backgroundImage: "url('/cebu-city-skyline.png')" }} />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl">Cebu</h3>
              </div>
            </div>
            <div className="relative rounded-md overflow-hidden h-40 group border border-gray-200">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all z-10" />
              <div
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/davao-city-skyline.png')" }}
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl">Davao</h3>
              </div>
            </div>
            <div className="relative rounded-md overflow-hidden h-40 group border border-gray-200">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all z-10" />
              <div className="h-full bg-cover bg-center" style={{ backgroundImage: "url('/baguio-city-view.png')" }} />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl">Baguio</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Rightmove style */}
        <section className="container py-12">
          <div className="bg-rightmove-blue rounded-md p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white">Ready to find your perfect space?</h2>
              <p className="text-lg text-white/90">
                Join thousands of Filipinos who have found their ideal rooms, roommates, and properties with Homely
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="font-medium bg-rightmove-purple hover:bg-rightmove-purple/90">
                  Sign Up Now
                </Button>
                <Button size="lg" variant="outline" className="font-medium text-white border-white hover:bg-white/10">
                  List Your Property
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
