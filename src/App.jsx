import "./App.css";
import Footer from "./sections/footer";

function App() {
  return (
    <div className="bg-[#0D0D0D]">
      <main className="h-screen pl-4 md:pl-36 flex flex-col justify-center">
        <h1 className="text-5xl font-medium text-[#D98C5F] space-grotesk ">
          Calcula el area de una figura{" "}
          <span className="text-[#F2F2F0] font-semibold underline">
            geometrica
          </span>
        </h1>
        <p className="md:w-3/5 pt-4 text-[#F2F2F0] font-extralight">
          Para calcular el área de diversas figuras geométricas, desde las más
          comunes como el círculo y el cuadrado, hasta figuras más complejas
          como trapecios y elipses. Al seleccionar una figura, el usuario deberá
          ingresar las dimensiones necesarias (como radio, base, altura, etc.),
          y la aplicación calculará el área de acuerdo con la fórmula matemática
          correspondiente.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
