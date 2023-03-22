import { Page, Container, ContainerWithImg, ContainerWithImg2 } from "./style.js";
import { Footer } from '../../Components/Footer';
import { Grid, Typography, Button, Box, Fab } from "@mui/material";
import ArrowsDownIcon from '../../assets/arrowsDown.png';
import { useState, useEffect } from 'react';
import RestaurantIcon from '../../assets/icon1.png';
import CodeIcon from '../../assets/icon2.png';
import BellIcon from '../../assets/icon3.png';
import ComputerIcon from '../../assets/icon4.png';
import GraphIcon from '../../assets/icon5.png';
import CircleIcon from '../../assets/icon6.png';
import YellowCodeIcon from '../../assets/icon7.png';
import PersonIcon from '../../assets/icon8.png';
import BurgerIcon from '../../assets/icon9.png';
import BrushIcon from '../../assets/icon10.png';
import NetworkIcon from '../../assets/icon11.png';
import LockIcon from '../../assets/icon12.png';
import WppIcon from '../../assets/wpp.png';
import AddIcon from '@mui/icons-material/Add';
import Navbar from "../../Components/navbar";


const PolicyPage = (props) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });


  const style = {
    backgroundColor: "red",
    width: "100%",
    height: "100%"
  };

  const fabStyle = {
    position: 'fixed',
    bottom: 32,
    right: 64,
  };

  const fabStyleSmall = {
    position: 'fixed',
    bottom: 100,
    right: 32,
    width: 45,
    height: 10,
  };


  return(
    <Box>
      <Navbar isHomepage={true} />
      <Typography variant={"subtitle2" } color="primary" style={{ marginTop: "2%", margin: "4%", textAlign: "justify", textJustify: "inter-word", fontSize: "80%" }}>
      Política de privacidade

1. Introdução
A entidade prestadora dos serviços é a TABIN SOLUCOES EM TECNOLOGIA
LTDA, CNPJ 48.555.873/0001-97, uma empresa que opera com sede em Rua
Agenor, 25. Sala 1002 Edf. Empresarial Itamarati, CEP: 51021-110, Boa Viagem,
Recife – PE.
Esta Política de Privacidade descreve os dados pessoais que coletamos, como
eles são usados, armazenados e compartilhados e os seus direitos em relação a
esses dados.
Esta política de privacidade é aplicável a todos os Clientes e/ou Parceiros que se
cadastram na “Plataforma” Tabin composta pelo websites e aplicativos para
celulares de titularidade da Tabin, por meio dos quais, dentre outras
funcionalidades, o Parceiro, de um lado, pode ofertar os produtos do seu cardápio
digital aos Consumidores Finais/Usuários, e (b) os Consumidores Finais/Usuários,
de outro lado, podem fazer pedidos de tais produtos aos Parceiros.
Essa política de privacidade também é aplicável a todos Usuários, mesmo sem
cadastro, que utilizam nossa Plataforma Tabin.
O sócio, administrador, diretor, representante ou qualquer agente que represente
um Parceiro é chamado de “Responsável Legal”.

“Clientes” são todas pessoas física e jurídica cadastradas em nossas plataformas.
“Parceiros” são as Pessoas Jurídicas como lanchonetes, padarias, docerias,
cafeterias, bares e outros tipos de restaurantes que fornecem alimentos e bebidas
preparadas e foram cadastrados como tal, em nossa plataforma.
“Colaboradores” são pessoas físicas, funcionários dos Parceiros, são cadastrados
como cliente e foram autorizados pelo Parceiro a utilizar nossos serviços.
“Usuários” são aquelas pessoas físicas que utilizam nossas plataformas sem
cadastro.
“Cardápio digital” é a funcionalidade que oferecemos onde a pessoa tem acesso
ao cardápio do Parceiro via QR Code.
“Serviço” significa o software para Clientes Tabin.
“Pedidos” significa os pedidos do gênero de comidas e bebidas comercializados
pelo Parceiro.
2. O que é o tratamento de dados pessoais?
O tratamento de dados pessoais, significa qualquer operação realizada com esses
dados, por exemplo: coleta, utilização, acesso, processamento, armazenamento,
eliminação, comunicação e transferência.
O dado pessoal é uma informação relacionada a uma pessoa humana identificada
ou identificável. O dado relativo a uma pessoa natural, como é o caso do
Responsável Legal, é um dado pessoal.
3. Quem controla o tratamento?
A TABIN exerce o papel de tratador dos dados pessoais em nossa Plataforma,
atuando conforme a legislação aplicável e conforme descrito na presente política.
O controlador é a pessoa física ou jurídica que decide sobre o tratamento de seus
dados pessoais.
4. Quais dados são coletados?
4.1 Cadastro na Plataforma
a) Dados de perfil
Cliente: Coletamos os seguintes dados: Nome completo, CPF, RG, data de
nascimento, endereço de residencial, sexo, número de telefone, email e
preferências de contato.
Parceiro: Coletamos os seguintes dados: razão social, nome fantasia (se houver),
número de inscrição no CNPJ, endereço eletrônico, endereço de correspondência,
foto da sua logomarca empresarial, fotos dos pratos, refeições ou outros produtos

do parceiro, número de telefone, email, preferências de contato e celebração de
contrato.
Colaborador: Coletamos os seguintes dados: Endereço, nome e CNPJ da empresa
a qual trabalha assim como sua respectiva função na empresa e celebração de
contrato.
b) Dados de pagamento
Para fins de cumprimento contratual da assinatura, quando optado pelos planos
pagos, podemos coletar do parceiro dados do cartão de débito e crédito, pix ou
boleto quando escolhido algum como forma de pagamento. Poderemos também
coletar o endereço de cobrança;
c) Dados de localização e câmera
O Parceiro deve inserir, manualmente na Plataforma, o endereço correspondente
ao local de atendimento presencial dos pedidos feitos pelo usuário.
Atenção: Para fins da Lei n° 12.965 de 2014 (Marco Civil da Internet), ou qualquer
lei que venha substituí-la, a localização fornecida será considerada como dado
cadastral.
Parceiro: A câmera será usada para enviar fotos dos pratos, enviar foto da
logomarca empresarial, refeições, produtos do parceiro.
Outras informações que podem ser coletadas: Cópias de documentos enviados
por você como comprovante de residência, dados bancários ou cópia de um
documento de identidade, cadastro nacional de pessoa jurídica geralmente
utilizados para comprovação de seu cadastro ou validação de sua identidade.
d) Dados operacionais
Parceiro: Número de mesas do seu estabelecimento, nome e descrição de pratos,
quantidade de pessoas que um prato serve, preço, desconto, promoções e
premiações de pratos.
4.2 Sem cadastro na Plataforma
Usuário: Coletamos os seguintes dados: Nome completo, CPF, o acesso a câmera
e a avaliação do Parceiro. Podemos coletar também os dados dos pedidos
realizados dentro do estabelecimento do parceiro como: preço, tipo, quantidade,
campainha eletrônica, abertura e fechamento de comanda e observações dos
pratos.
5. Como nós utilizamos os seus dados pessoais?
Nós utilizamos os dados pessoais para garantir um atendimento de qualidade e
uma melhor experiência. Listamos abaixo as finalidades que poderemos utilizar
seus dados pessoais:

5.1 Dados cadastrais
Para viabilizar a prestação de diferentes serviços disponíveis em nossa empresa.
Para realizar o atendimento de solicitações e dúvidas em nossa Central de
Atendimento.
Para entrar em contato com o Cliente ou Parceiro, quando necessário. Esse
contato pode contemplar diversos assuntos, como comunicação sobre promoções
e ofertas, respostas a dúvidas, respostas de reclamações e solicitações.
Para auxiliar no diagnóstico e solução de problemas técnicos.
Para desenvolver novas funcionalidades e melhorias, melhorando a sua
experiência com os nossos serviços disponíveis.
Para realizar investigações e medidas de prevenção e combate a ilícitos, fraudes,
crimes financeiros e crimes de lavagem de dinheiro e/ou de financiamento ao
terrorismo.
Para garantir o cumprimento de obrigação legal ou regulatória ou garantir o
exercício regular de direitos da TABIN. Nesses casos, podemos, inclusive, utilizar
e apresentar as informações em processos judiciais e administrativos, se
necessário.
Para colaborar com o cumprimento de ordem judicial, de autoridade competente
ou de órgão fiscalizador.
5.2 Dados não cadastrais
Para identificar corretamente o Usuário, suas preferências de pedidos e sua
avaliação do Parceiro.
5.3 Lista de Contato e Câmera:
A câmera será usada para disponibilizar as funcionalidades e recursos do
Cardápio Digital.
Parceiro: para enviar fotos dos pratos, enviar foto da logomarca empresarial,
refeições e seus produtos. Enviar documentos se necessário.
5.4 Dados de Navegação:
Para auxiliar no diagnóstico e solução de problemas técnicos.
Para desenvolver novas funcionalidades e melhorias, melhorando a sua
experiência com os nossos serviços disponíveis.
5.5 Para enviar comunicações importantes

Periodicamente, poderemos usar os dados dos Clientes para enviar avisos e
notificações importantes, como comunicados sobre compras, alterações em
prazos, condições, políticas e promoções.
Nossas comunicações são direcionadas por e-mail, WhatsApp e pop-up no Portal
do Cliente.
5.6 Para avaliação de Parceiros
Ao responder comentários das avaliações dos Usuários na Plataforma, o Parceiro
nos autoriza a publicar e utilizar tais respostas em websites, em todas plataformas
da TABIN e em quaisquer materiais de marketing ou publicidade. Nesses casos, o
nome do Parceiro será identificado.
5.6 Para fins publicitários
Nós poderemos usar as informações do Parceiro ou Cliente para enviar e preparar
material de publicidade, bem como outros materiais promocionais voltados ao
marketing de nossos serviços e de novidades, o que inclui campanhas digitais (tais
como marketing direcionado em redes sociais e notificações push) e não digitais
(como divulgação em radiodifusão, outdoors, panfletos, entre outros).
5.7 Para realizarmos pesquisas diversas
Podemos utilizar os dados do Parceiro ou Cliente para entrar em contato e coletar
opinião para aprimoramento de nossos serviços.
Nesta hipótese, perguntaremos se o indivíduo participante concorda em participar
da pesquisa em questão, sempre podendo recusar.
6. Com quem nós podemos compartilhar os dados pessoais?
Autoridades judiciais, policiais ou governamentais: nós devemos fornecer dados
pessoais de Clientes, Parceiros e/ou Usuários, em atendimento à ordem judicial,
solicitações de autoridades administrativas, obrigação legal ou regulatória, bem
como para agir de forma colaborativa com autoridades governamentais, em geral
em investigações envolvendo atos ilícitos.
7. Armazenamento e segurança dos dados pessoais
Nós armazenamos seus dados de forma segura em data centers localizados no
Brasil, bem como no exterior. Neste caso de armazenamento no exterior, são
adotadas todas as medidas legais aplicáveis, em conformidade com a Lei Geral de
Proteção de Dados e suas futuras regulamentações, garantindo a proteção e
privacidade dos seus dados pessoais.
Nós adotamos as melhores técnicas para proteger os dados pessoais coletados de
acessos não autorizados, destruição, perda, alteração, comunicação ou qualquer
forma de tratamento inadequado ou ilícito, inclusive mecanismos de criptografia.
Ressaltamos, contudo, que nenhuma plataforma é completamente segura. Se

você tiver qualquer preocupação ou suspeita de que os seus dados estejam em
risco, por favor, entre em contato conosco por meio dos nossos canais de
atendimento que ficaremos felizes em te auxiliar prontamente.
Seus dados pessoais serão mantidos durante todo o período que for um cliente
ativo da TABIN. Após esse período, podemos armazenar os seus dados pessoais
por um período adicional para fins de auditoria, para possibilitar o cumprimento de
obrigações legais ou regulatórias. Faremos a retenção dos seus dados pelo prazo
necessário, respeitando os prazos estabelecidos na legislação aplicável.
8. COOKIES E OUTRAS TECNOLOGIAS
Os cookies e outras tecnologias usadas para questões de funcionalidade permitem
que você acesse recursos fundamentais de um serviço. Os recursos considerados
fundamentais incluem preferências (como o idioma), informações relacionadas à
sessão (como o conteúdo de um carrinho de compras) e otimização de produtos
que ajudam a manter e melhorar um serviço.
Podemos utilizar certas tecnologias de monitoramento para coletar as informações
das atividades realizadas nas nossas plataformas ou App TABIN de forma
automatizada. As informações coletadas por meio de tais tecnologias são
utilizadas para realizar métricas de performance do aplicativo, identificar problemas
no uso, captar o comportamento dos Usuários e Clientes de forma geral e coletar
dados de impressão de conteúdos.
Veja abaixo algumas das tecnologias que poderão estar presentes na TABIN:
Cookies: São pequenos arquivos armazenados no seu navegador, celular ou outro
dispositivo para fornecer uma experiência personalizada de acesso à plataforma.
Os cookies ajudam a analisar o tráfego de internet e nos permite saber quando o
Usuário ou Cliente visitou um site específico. Um cookie não dá acesso a um
computador ou revelar informações além dos dados que o usuário escolhe
compartilhar conosco.
Pixels: pixels são partes do código JavaScript instalados adicionados em nossas
aplicações, websites ou no corpo de um e-mail, com a finalidade de rastrear
coletar informações sobre as atividades dos usuários, permitindo a identificação
dos seus padrões de acesso, navegação, interesse e compras de produtos,
utilizados para otimizar o direcionamento de conteúdo.
Web beacon: web beacon é uma técnica que permite mapear quem está visitando
uma determinada página da web, identificando o comportamento do usuário com
diferentes sites ou servidores da web.
Ferramentas de analytics: essas ferramentas podem coletar informações sobre a
forma como os usuários visitam nosso site. Ferramentas de análise usadas:
Google analytics e facebook.
8.1 . Como gerenciar suas preferências de cookies

Cookies do navegador
Você pode retirar ou alterar o seu consentimento sobre o uso de cookies a
qualquer momento. Se você não quiser mais receber cookies, use as
configurações do navegador da Web para aceitar, recusar e excluir cookies. Para
fazer isso, siga as instruções de seu navegador (geralmente dentro das
configurações de &quot;Ajuda&quot;, &quot;Ferramentas&quot; ou &quot;Editar&quot;).
9. Transferência Internacional De Dados Pessoais
Alguns de seus dados pessoais poderão ser transferidos para outros países, por
exemplo, quando utilizarmos serviços computacionais em nuvem para
processamento ou armazenamento de dados, localizados fora do Brasil. Mas não
se preocupe, a TABIN observa também nestas situações todos os requisitos
estabelecidos na legislação vigente, e adota as melhores práticas de mercado a
fim de garantir a proteção e privacidade dos seus dados pessoais.
10. Seus Direitos Como Titular Dos Dados Pessoais
A transparência sobre o tratamento dos seus dados pessoais é prioridade para a
TABIN. Além das informações disponibilizadas nesta Política de Privacidade, você
pode também exercer os direitos previstos na Lei Geral de Proteção de Dados,
entre eles:
Confirmação da existência de tratamento de dados pessoais.
Acesso aos dados pessoais.
Correção de dados pessoais incompletos, inexatos ou desatualizados.
Eliminação dos dados pessoais tratados com o consentimento ou desnecessários,
excessivos ou quando entender que algum ponto da LGPD não foi atendido.
Informação sobre as hipóteses e com quais empresas, parceiros e outras
instituições podemos compartilhar, ou receber dados pessoais referentes a você.
Informação sobre a possibilidade de não fornecer consentimento e sobre as
consequências da negativa, quando aplicável.
Todas as solicitações serão tratadas de forma gratuita, e serão submetidas a uma
prévia avaliação da sua identidade e da viabilidade do atendimento, a fim de
cumprir com eventuais obrigações que impeçam o completo atendimento das
requisições dos titulares de direito.
11. Retenção E Exclusão Dos Seus Dados Pessoais
Nós trataremos seus dados pessoais com elevados níveis de proteção e
garantindo sua privacidade, durante todo o período que você for nosso Cliente,
navegando em nossas plataformas e utilizando nossos serviços, ou potencial
cliente com quem dividimos nossas ofertas de produtos e serviços.

Quando aplicável, e mesmo se você optar por excluir seus dados pessoais da
nossa base de cadastro, a TABIN poderá reter alguns ou todos os seus dados
pessoais por períodos adicionais para cumprimento de obrigações legais ou
regulatórias, para o exercício regular de direitos da TABIN, eventuais ações
judiciais, fins de auditoria de diversas naturezas, ou outros prazos definidos e
fundamentados por bases legais que justifiquem a retenção destes dados.
12. Alterações Desta Política De Privacidade
Estamos constantemente buscando aprimorar a experiência de nossos clientes.
Assim, nossas práticas de tratamento de dados pessoais poderão sofrer alterações
com a inclusão de novas funcionalidades e serviços. Quando efetuarmos grandes
alterações a esta Política, forneceremos a você um aviso proeminente, por
exemplo um email. Podemos notificá-lo com antecedência.
Valorizamos a transparência no modo em que tratamos seus dados pessoais.
Toda vez que alguma condição relevante desta Política de Privacidade for
alterada, essas alterações serão válidas, eficazes e vinculantes após a nova
versão ser publicada em nosso site.
Para verificar a data da versão em vigor, verifique a “Data de atualização” no início
deste documento.
FALE CONOSCO
Sempre que você tiver alguma dúvida sobre esta Política de Privacidade, mesmo
após sua leitura, ou precisar interagir conosco sobre assuntos envolvendo os seus
dados pessoais, poderá fazê-lo:
Por meio dos nossos canais de atendimento disponíveis em nosso e-mail:
relacionamento@tabin.com.br
Contem conosco para mantê-los informados!
      </Typography>
    </Box>
  );
}

export { PolicyPage };

