import { useState, useMemo } from "react";
import { UserShortInterface } from "data/@types/userInterface";
import { ValidationService } from "data/services/validationServices";
import { ApiService } from "data/services/apiService";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [restDiaristas, setRestDiaristas] = useState(0);

  async function buscarProfissionais(cep: string) {
    //função que eu acho que deveria estar em validationService para a estrutura SOLID
    setBuscaFeita(false);
    setCarregando(true);
    setErro("");

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, "")}`);
      setDiaristas(data.diaristas);
      setRestDiaristas(data.quantidade_diaristas);
      setBuscaFeita(true);
      setCarregando(false);
    } catch (e) {
      setErro("CEP não encontrado!");
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    restDiaristas,
  };
}
