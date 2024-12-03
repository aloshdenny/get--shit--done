import Image from 'next/image'

export default function Banner() {
  return (
    <div className="mb-8">
      <Image
        src="/getshitdone.jpeg?height=200&width=800"
        alt="Get Shit Done Banner"
        width={800}
        height={200}
        className="w-full rounded-lg shadow-md"
      />
    </div>
  )
}

