import type { NextPage } from "next";
import { Container, CircularProgress, Button, Typography } from "@mui/material";

import SafeEnvironment from "ui/components/feedbacks/safeEnviroment/safeEnvironment";
// detalhe: deve começar com letra maiuscula pq depois ele não reconhece como componente e sim como tag HTML.

//abaixo as importações dos componentes
import PageTitle from "ui/components/dataDisplay/pageTitle/pageTitle";
import { UserInformation } from "ui/components/dataDisplay/userInformation/userInformation";
import TextFieldMask from "ui/components/inputs/textFieldMask/textFieldMask";
import { FormContainer, ProfissionaisPaper } from "@styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    restDiaristas,
  } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"conheça os profissionais"}
        subTitle={
          "preencha seu endereço e conheça todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormContainer>
          <TextFieldMask
            mask="99.999.999"
            label="Digite se CEP"
            fullWidth
            variant="outlined"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {erro && <Typography color="error"> {erro}</Typography>}
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <section>
                {diaristas.map((diarista, i) => {
                  return (
                    <UserInformation
                      key={i}
                      picture={diarista.foto_usuario}
                      name={diarista.nome_completo}
                      rating={diarista.avaliacao}
                      description={diarista.descricao}
                    />
                  );
                })}
              </section>

              <Container sx={{ textAlign: "center" }}>
                {restDiaristas > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {restDiaristas}{" "}
                    {restDiaristas > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    nessa região.
                  </Typography>
                )}
                <Button variant="contained" sx={{ mt: 5 }} color="secondary">
                  Contratar Profissionais
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align="center" color="textPrimary">
              Ainda não temos diaristas disponivel em sua região.
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
