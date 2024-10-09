import InputField from "./components/InputField";

const App: React.FC = () => {


  return (
    <>
      <main className="bg-sky-600 h-screen">
        <header className="flex justify-center p-6 z-10">
          <h1 className="text-3xl text-white">Taskify</h1>
        </header>
        <section className="flex justify-center mt-4">
          <InputField />
        </section>
      </main>
    </>
  )
}

export default App
