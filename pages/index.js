import Box from "@/components/Box";
import Pagina from "@/components/Pagina";

export default function Home() {
  return (
    <Pagina>
      <Box name="Teste" title="Hello World!">
        <p>Este é um paragrafo...</p>
        <p>Este é mais um paragrafo...</p>
      </Box>
      <Box name="Teste" title="Outro Box">
        <p>Este é um paragrafo...</p>
        <p>Este é mais um paragrafo...</p>
        <button>Detalhes</button>
      </Box>
      <Box name="Teste" title="Terceiro Box">
        <p>Este é um paragrafo...</p>
        <p>Este é mais um paragrafo...</p>
        <button>Detalhes</button>
        <p>Mais detalhes</p>
        <button>Detalhes</button>
      </Box>
    </Pagina>
  );
}
