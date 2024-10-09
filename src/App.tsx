import InputField from "./components/InputField";

const App: React.FC = () => {

  // let name: string = 'Nick Kang';
  // let age: number = 35;
  // let age: number | string = 35;
  // age = 'thirty five';
  // let isStudent: boolean = true;
  // let hobbies: string[] = ['tennis', 'reading', 'travel'];
  // let role: [number, string];
  // role = [5, 'test'];
  // function printName(name: string) {
  //   console.log(name)
  // }
  // const printName = (name: string):void => {
  //   console.log(name);
  // }
  // type Person = {
  //   name: string;
  //   age?: number;
  // }
  // interface Person {
  //   name: string;
  //   age?: number;
  // }
  // interface Guy extends Person {
  //   profession: string;
  //   yearsExperience?: number;
  // }
  // let person: Person = {
  //   name: 'Nicholas',
  //   // age: 40
  // }
  // printName(person.name);
  // printName('Nick');
  // let people: Person[] = {}

  return (
    <>
      <main className="bg-sky-600 h-screen">
        <header className="flex justify-center p-6 z-10">
          <h1 className="text-3xl text-white">Taskify</h1>
        </header>
        <section className="flex justify-center">
          <InputField />
        </section>
      </main>
    </>
  )
}

export default App
