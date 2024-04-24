import React from "react";

function Select(props) {
  const [uf, setUf] = React.useState("AC");
  const [listUf, setListUf] = React.useState([]);
  const [city, setCity] = React.useState("");
  const [listCity, setListCity] = React.useState([]);
  function loadUf() {
    let url = "https://servicodados.ibge.gov.br/";
    url = url + "api/v1/localidades/estados";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListUf([...data]);
      });
  }
  function loadCity(id) {
    let url = "https://servicodados.ibge.gov.br/api/v1/";
    url = url + `localidades/estados/${id}/municipios`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListCity([...data]);
      });
  }
  React.useEffect(() => {
    loadUf();
  }, []);
  React.useEffect(() => {
    if (uf) {
      loadCity(uf);
    }
  }, [uf]);

  function UFSet (value) {
    setUf(value)
    props.FU(value)
  }
  function CitySet (value) {
    setCity(value)
    props.City(value)
  }
  return (
    <div className="flex flex-row gap-[0.35rem] justify-between mt-5">
      <div className="flex flex-col items-start">
        <p className="mb-4 font-Title text-sm">Estado</p>
        <select
          className="w-[100%] border-0 border-b-2 border-gray-400 bg-transparent h-9"
          value={uf}
          onChange={(e) => UFSet(e.target.value)}
        >
          {listUf.map((a, b) => (
            <option value={a.sigla}>
              {a.sigla} - {a.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-start">
        <p className="mb-4 font-Title text-sm">Cidade</p>
        <select
          className="w-[100%] border-0 border-b-2 border-gray-400 bg-transparent h-9"
          value={city}
          onChange={(e) => CitySet(e.target.value)}
        >
          {listCity.map((a, b) => (
            <option value={a.sigla}>{a.nome}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export { Select };
