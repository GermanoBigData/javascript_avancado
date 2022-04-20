import { useEffect, useState } from "react";
import { getDespesas, IDespesa } from "./backend";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import SelecaoAnoMes from "./SelecaoAnoMes";
import ExibicaoTotal from "./ExibicaoTotal";
import TabelaDespesas from "./TabelaDespesas";

import { useNavigate, useParams } from "react-router-dom";

export default function TelaDespesas() {
  const params = useParams<{ anoMes: string }>();
  const anoMes = params.anoMes || "2021-06";
  const navigate = useNavigate();

  const [despesas, setDespesas] = useState<IDespesa[]>([]);

  useEffect(() => {
    getDespesas(anoMes).then(setDespesas);
  }, [anoMes]);

  return (
    <Container>
      <Box display="flex" alignItems="center">
        <SelecaoAnoMes anoMes={anoMes} onChangeAnoMes={onChangeAnoMes} />
        <Box flex="1" />
        <ExibicaoTotal despesas={despesas} />
      </Box>
      <TabelaDespesas despesas={despesas} />
    </Container>
  );

  function onChangeAnoMes(novoAnoMes: string) {
    navigate(`/despesas/${novoAnoMes}`);
  }
}
