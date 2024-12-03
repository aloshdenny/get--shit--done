import Image from 'next/image'

interface QRCodeProps {
  email: string
  task: string
}

export default function QRCode({ email, task }: QRCodeProps) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Scan to Pay</h2>
      <Image
        src="/qr.jpg?height=300&width=300"
        alt="QR Code for payment"
        width={300}
        height={300}
        className="mx-auto mb-4"
      />
      <p className="text-sm text-gray-600">
        Please scan this QR code to make your payment. Add your email ({email}) in the note as it will be used as a reference for your task: "{task}".
      </p>
    </div>
  )
}

