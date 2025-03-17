import { FlipWords } from '@/components/ui/flip-words'

const words = ['Ngising', 'Ngudud', 'Ngapusi']

const FlipWordsComponent = () => {
  return (
    <div className="flex h-[40rem] items-center justify-center px-4">
      <div className="mx-auto font-geissant text-4xl font-bold text-zinc-300">
        <h1 className="text-7xl">Brata Muhammad</h1> <br />
        Expert in <FlipWords words={words} className="text-sky-200" />
      </div>
    </div>
  )
}
export default FlipWordsComponent
