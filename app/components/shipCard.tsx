import { Truck, CreditCard, Banknote, Clock } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Fast & Free Delivery",
    description: "Free delivery on all orders"
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Free delivery on all orders"
  },
  {
    icon: Banknote,
    title: "Money Back Guarantee",
    description: "Free delivery on all orders"
  },
  {
    icon: Clock,
    title: "Online Support",
    description: "Free delivery on all orders"
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <Icon className="h-8 w-8 stroke-1" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

