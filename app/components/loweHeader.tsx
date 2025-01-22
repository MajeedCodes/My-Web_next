import Link from "next/link"

export default function LowerHeader() {
  return (
    <>
      <div className="bg-[#16161A] px-4 py-2 text-center text-sm text-white sm:px-6 md:px-8 lg:px-[70px]">
        <p className="text-xs sm:text-sm md:text-base">
          Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer{' '}
          <Link href="/shop" className="underline hover:text-gray-200">
            Shop Now
          </Link>
        </p>
      </div>
    </>
  )
}
