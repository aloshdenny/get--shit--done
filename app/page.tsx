import Banner from './components/Banner'
import Description from './components/Description'
import InputForm from './components/InputForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Get Shit Done</h1>
        <Banner />
        <Description />
        <InputForm />
      </div>
    </div>
  )
}