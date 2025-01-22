'use client'

import Link from 'next/link'
import Image from 'next/image'

interface CategoryCardProps {
  title: string
  href: string
  imageUrl: string
}

function CategoryCard({ title, href, imageUrl }: CategoryCardProps) {
  return (
    <Link 
      href={href}
      className="group relative block h-[350px] w-full sm:w-[80%] md:w-[90%] lg:w-full overflow-hidden"
    >
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{title}</h2>
      </div>
    </Link>
  )
}

export default function Home() {
  const categories = [
    {
      title: "Men's Fashion",
      href: '/men',
      imageUrl: '/men.webp?height=400&width=300'
    },
    {
      title: "Women's Fashion",
      href: '/women',
      imageUrl: '/glas.webp?height=400&width=300'
    },
    {
      title: 'Baby Fashion',
      href: '/baby',
      imageUrl: '/bag.webp?height=400&width=300'
    }
  ]

  return (
    <main className="container mx-auto py-10">
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            href={category.href}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </main>
  )
}
