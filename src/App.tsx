import Header from "./componentes/Header"
import HeroList from "./componentes/HeroList"

function App() {

  return (
    <main className="flex flex-col w-screen max-w-full min-h-screen items-center gap-10 bg-slate-900 text-slate-50">
      <Header />

      <HeroList />
    </main>
  )
}

export default App