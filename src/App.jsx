import "./App.css";
import { useState } from "react";
import image from "./Profile.jpg";
import { Select } from "./components/select/select";
function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [telefone, settel] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [msg, setmsg] = useState("");


  function Epa(e) {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name,
      email,
      telefone,
      state,
      city,
      msg,
      PainelURL: "https://app2.paineldocorretor.com.br/forms/u/43523b46-1282-487f-8253-55f2ae7c2a54",
      TOKEN: process.env.REACT_APP_KEY
    });
    // console.log({TOKEN: process.env.REACT_APP_KEY})
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      mode: "cors",
    };

    fetch("http://127.0.0.1:3333/set/Contact", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .finally(() => {
        setemail('');
        setmsg('');
        setname('');
        settel('');
        
      })
      .catch((error) => console.error(error));
    window.location = `https://wa.me//5562998144484?text=${msg === '' ? `Nome:${name} Cidade/Estado:${city}-${state}` : msg.replace(/ /g, "%20")}`
  }
  return (
    <div className="App h-full">
      <section className="bg-gradient-to-tl h-fit flex justify-center items-center border from-[#fce7b0] to-[#ffbc70] md:h-screen background">
        <main className="bg-indigo-50 z-20 shadow-2xl w-screen h-full p-6 md:max-w-[600px] md:h-fit sm:overflow-y-auto md:rounded-3xl">
          <div className="flex flex-col items-center justify-center">
            <img
              src={image}
              alt="Foto da Corretora"
              className="rounded-full max-w-52 shadow-xl shadow-[#ffd17c]"
            />
            <h3 className="font-Title mt-6 text-[34px]">
              Camila Oliveira Silva
            </h3>
            <p className="font-Title text-[24px]">Corretora licenciada</p>
            <div className="flex flex-row items-center w-3/4 gap-8 justify-center mt-3">
              <a href="https://www.instagram.com/camilaoliveira_planos/"><svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#0A0A08"
                  d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
                />
              </svg></a>
              <a href="https://wa.me//5562998144484?text=Olá%20quero%20um%20plano!!"><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={28}
                height={28}
                viewBox="0 0 30.667 30.667"
              >
                <path d="M30.667 14.939c0 8.25-6.74 14.938-15.056 14.938a15.1 15.1 0 0 1-7.276-1.857L0 30.667l2.717-8.017a14.787 14.787 0 0 1-2.159-7.712C.559 6.688 7.297 0 15.613 0c8.315.002 15.054 6.689 15.054 14.939zM15.61 2.382c-6.979 0-12.656 5.634-12.656 12.56 0 2.748.896 5.292 2.411 7.362l-1.58 4.663 4.862-1.545c2 1.312 4.393 2.076 6.963 2.076 6.979 0 12.658-5.633 12.658-12.559C28.27 8.016 22.59 2.382 15.61 2.382zm7.604 15.998c-.094-.151-.34-.243-.708-.427-.367-.184-2.184-1.069-2.521-1.189-.34-.123-.586-.185-.832.182-.243.367-.951 1.191-1.168 1.437-.215.245-.43.276-.799.095-.369-.186-1.559-.57-2.969-1.817-1.097-.972-1.838-2.169-2.052-2.536-.217-.366-.022-.564.161-.746.165-.165.369-.428.554-.643.185-.213.246-.364.369-.609.121-.245.06-.458-.031-.643-.092-.184-.829-1.984-1.138-2.717-.307-.732-.614-.611-.83-.611-.215 0-.461-.03-.707-.03s-.646.089-.983.456-1.291 1.252-1.291 3.054c0 1.804 1.321 3.543 1.506 3.787.186.243 2.554 4.062 6.305 5.528 3.753 1.465 3.753.976 4.429.914.678-.062 2.184-.885 2.49-1.739.308-.858.308-1.593.215-1.746z" />
              </svg></a>
            </div>
          </div>
          <div className="flex flex-col items-start md:max-w-[85%] p-6 md:pl-[30px] rounded-xl m-auto top-[24px] mb-[px] relative">
            <h2 className="text-2xl font-Title text-indigo-950 mt-0">
              Quer fazer uma cotação ?
            </h2>
            <p className="text-gray-600 text-sm font-Title">
              preciso de alguma informações...
            </p>
            <div className="w-[100%] mt-[20px]">
              <div className="flex flex-col items-start w-[100%]">
                <label htmlFor="Name" className="text-sm font-Title">
                  Nome
                </label>
                <input
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  value={name}
                  type="text"
                  id="Name"
                  className="w-full border-0 border-b-2 border-gray-400 bg-transparent p-2 h-8"
                />
              </div>
              <div className="flex flex-col items-start mt-8 w-[100%]">
                <label htmlFor="Email" className="text-sm font-Title">
                  E-mail
                </label>
                <input
                  type="email"
                  id="Email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  className="w-full border-0 border-b-2 border-gray-400 bg-transparent p-2 h-8"
                />
              </div>
              <div className="flex flex-col items-start mt-8 w-[100%]">
                <label htmlFor="Telefone" className="text-sm font-Title">
                  Telefone
                </label>
                <input
                  type="number"
                  id="Telefone"
                  value={telefone}
                  onChange={(e) => {
                    settel(e.target.value);
                  }}
                  className="w-full border-0 border-b-2 border-gray-400 bg-transparent p-2 h-8"
                />
              </div>
              <Select FU={setstate} City={setcity}></Select>
              <div className="flex flex-col items-start mt-8 w-[100%]">
                <label htmlFor="MSG" className="text-sm font-Title">
                  Me conte um pouco mais
                </label>
                <textarea
                  id="MSG"
                  value={msg}
                  onChange={(e) => {
                    setmsg(e.target.value);
                  }}
                  className="w-full border-2 mt-3 border-gray-400 bg-transparent p-2 h-16"
                />
              </div>
            </div>
            <button
              onClick={(e) => Epa(e)}
              className="p-5 mt-5 rounded-2xl font-Title hover:scale-110 transition-all bg-gradient-to-tl from-[#fce7b0] to-[#ffbc70]"
            >
              Enviar para cotação
            </button>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
