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


const TermsPage = (props) => {
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
      Data de atualização 18/02/23
Termos de uso - Tabin
1. Introdução
1.1 A entidade prestadora dos serviços é a Tabin Soluções em Tecnologia Ltda, CNPJ 48.555.873/0001-97, uma empresa que opera com sede em Rua Agenor, 25. Sala 1002 Edf. Empresarial Itamarati, CEP: 51021-110, Boa Viagem, Recife – PE.
1.2 Leia este Contrato com atenção e se assegure que você entende o seu conteúdo. Caso você não entenda ou não aceite alguma parte deste documento, não utilize o Serviço.
Quem pode usar o Serviço?
1.3 Empresas. Você declara que tem autoridade para agir em nome dessa entidade empresarial e que ela aceitou este Contrato. O Empresário deve ter pelo menos 18 anos para assinar o serviço Tabin. Menores de idade somente podem usar o serviço sob a supervisão de um adulto.
1.4 Colaborador. Você declara que tem autoridade para agir em nome dessa pessoa física que aceitou este Contrato e que foi autorizado pela empresa a qual você possui vínculo empregatício.
2. Definições
2.1. Os termos e as expressões abaixo, quando iniciados em letra maiúscula nestes Termos Uso e Condições ou Contrato, no singular ou no plural, no masculino ou no feminino, terão os significados que lhes são indicados ao longo do Contrato ou abaixo:
“Clientes” são aquelas pessoas físicas ou jurídicas que se cadastraram em nossas plataformas.
“Colaboradores” são pessoas físicas, funcionários dos Parceiros e foram autorizados pelo Parceiro a utilizar nossos serviços.
“Representante Legal” significa o sócio, administrador, diretor, representante ou qualquer agente que represente um estabelecimento Parceiro.
“Contas” significa as contas individuais e pessoais de cada um na Plataforma Tabin.
“Autorização” significa a sincronização de ações permitidas entre o Parceiro e o Colaborador.
“Pedidos” significa os pedidos do gênero de comidas e bebidas comercializados pelo Parceiro.
“Plataforma” significa todos e quaisquer websites e aplicativos para celulares de titularidade da Tabin, por meio dos quais, dentre outras funcionalidades, o Parceiro, de um lado, pode ofertar os produtos do seu cardápio aos Consumidores Finais/Usuários, e (b) os Consumidores Finais/Usuários, de outro lado, podem fazer pedidos de tais produtos aos Parceiros.
“Parceiros” são as Pessoas Jurídicas como lanchonetes, padarias, docerias, cafeterias, bares e outros tipos de restaurantes que fornecem alimentos e bebidas preparadas e são cadastrados como tal, em nossa plataforma.
“Cardápio Digital” é a funcionalidade que oferecemos onde a pessoa tem acesso ao cardápio do Parceiro via QR Code.
“Usuários” são aquelas pessoas físicas que utilizam nossas plataformas sem cadastro.
“Serviço” significa o software para o Parceiro Tabin.
“Consumidores finais” são os clientes do Parceiro.
3. Objeto
3.1. O Contrato tem por objeto a prestação e uso do Serviço Tabin para Parceiros e Colaboradores, observado o disposto no formulário de contratação da Tabin.
4. Serviços Tabin
4.1 Oferecemos diversas opções referentes ao Serviços Tabin. Algumas opções dos Serviços Tabin são fornecidas gratuitamente, enquanto outras exigem pagamento antes de serem acessadas (as "Assinaturas pagas"). Também podemos oferecer planos promocionais especiais, testes de Assinaturas pagas por um período específico, associações ou serviços, incluindo ofertas de produtos e serviços de terceiros. Não somos responsáveis pelos produtos e serviços fornecidos por esses terceiros.
4.2. Por meio da prestação dos Serviços e do licenciamento do Software, a Tabin garantirá ao Parceiro os serviços necessários e acesso ao sistema por meio qual o Parceiro poderá Autorizar seus Colaboradores para que, por meio das suas respectivas Contas, os Colaboradores realizem a gestão de Pedidos, editem cardápio, abram e fechem as comandas das mesas e o façam o gerenciamento geral do estabelecimento por meio ferramentas fornecidas pela Tabin. A Tabin também realizará o armazenamento, proteção de dados conforme nossa Política de Privacidade e Suporte para utilização do Software ao Cliente.
4.3 A Tabin poderá alterar os Termos relativos aos Serviços a qualquer momento. Aditamentos entrarão em vigor quando a Tabin fizer a postagem da versão atualizada dos Termos neste local ou das condições atualizadas ou Termos adicionais sobre o respectivo Serviço. O fato de você continuar a acessar ou usar os Serviços após essa postagem representa seu consentimento em vincular-se aos Termos alterados.
4.4 Parceiro, você será o único e exclusivo responsável por solicitar o cadastro de Conta dos Colaboradores, aos seus Colaboradores na Plataforma, Autorizações e restrições entre as Contas Colaborador de acordo com vínculos empregatícios entre vocês, pagamento de nossa assinatura se escolhido a assinatura paga, cadastro e edição dos itens bem como: Cardápio Digital, número de mesas do estabelecimento, solicitação e alteração do QR Code de cada mesa e por qualquer atividade que ocorra na conta.
4.5. Você se compromete a manter o Cadastro atualizado a todo o tempo, sendo certo que caso a empresa Parceira não realize a Autorização de qualquer Colaborador, ele não poderá usufruir do acesso aos serviços Tabin; e caso o Parceiro não exclua a Autorização de um ex-Colaborador, ou seja, um ex-funcionário que não tenha mais vínculo com o Parceiro, a empresa Parceira será responsável por qualquer ação feita com o acesso do referido ex-Colaborador. Você também reconhece que o acesso e o uso de nossos serviços são pessoais não podendo ser compartilhados.
4.6. Você reconhece e concorda que para a utilização do software é condição indispensável que o Parceiro e os Colaboradores: (a) possuam Contas válidas; (b) possuam computador, smartphone ou tablet com acesso à internet; e (c) os Colaboradores sejam Autorizados pela empresa Parceira. O Parceiro deverá orientar os Colaboradores a manter o software sempre atualizado com a última versão disponível caso o acesso seja via aplicativo.
4.7 Parceiro, você reconhece que seus Colaboradores cadastrados estão cientes desses termos de uso e cientes da responsabilidade de cada parte entre Tabin e Parceiro. 
4.8 Você concorda em usar o serviço Tabin, incluindo todos os recursos e funcionalidades associadas de acordo com as leis, regras e regulamentos aplicáveis ou outras restrições de uso do Serviço ou conteúdo previstas nas mesmas. Você também concorda em não arquivar, reproduzir, distribuir, modificar, exibir, executar, publicar, licenciar ou criar trabalhos derivados, colocar à venda ou utilizar (exceto nas formas expressamente autorizadas por estes Termos de uso) o conteúdo e as informações contidas ou obtidas do Serviço Tabin ou por meio deste. Você também concorda em não contornar, remover, alterar, desativar, degradar ou adulterar quaisquer das proteções de conteúdo do Serviço Tabin, usar qualquer robô, spider, scraper ou outros meios automatizados para acessar o Serviço Tabin, descompilar, executar engenharia reversa ou desmembrar qualquer software ou outros produtos ou processos acessíveis pelo Serviço Tabin, inserir qualquer código ou produto ou manipular o conteúdo do Serviço Tabin de qualquer forma ou usar métodos de data mining, coleta de dados ou extração de dados. Além disso, você concorda em não fazer upload, publicar, enviar por e-mail, comunicar ou transmitir de qualquer forma qualquer material designado para interromper, destruir ou limitar a funcionalidade de qualquer software, hardware ou equipamento de telecomunicações associado ao Serviço Tabin, incluindo vírus de software, código, arquivos ou programas. A Tabin poderá cancelar ou restringir seu uso do Serviço se você violar estes Termos de uso ou se envolver no uso ilegal ou fraudulento do serviço. 
4.9. Estes Termos e o uso dos Serviços não lhe outorgam nem lhe conferem qualquer direito: (i) sobre os Serviços, exceto pela licença limitada concedida acima; ou (ii) de usar ou, de qualquer modo, fazer referência a nomes societários, logotipos, nomes de produtos ou de Serviços, marcas comerciais ou marcas de serviço da Tabin ou de qualquer licenciadora da Tabin.  As Partes reconhecem e concordam que nada do disposto neste Contrato implica na alienação, cessão, transferência, a qualquer título ou de qualquer forma, nos direitos de titularidade da Plataforma Tabin e/ou do Software.
4.10. A Tabin não é responsável por quaisquer danos ou prejuízos, de qualquer forma causados ao Parceiro, Colaboradores e Usuários por caso fortuito ou força maior, por falhas devidas a terceiros, nem por quaisquer vírus, cavalos de Troia, ataques hacker, worms, outras rotinas de programação que possam danificar, interferir adversamente ou ser infiltrados nos equipamentos em decorrência do acesso ou da transferência de dados, arquivos, imagens, textos ou conteúdo de áudio contidos no Software.
4.11. A Tabin não garante o acesso e uso ininterrupto ao Serviço de Software, o qual eventualmente poderá não estar disponível por motivos técnicos, manutenções ou qualquer outra circunstância.
4.12. Em caso de manutenção programada, o Parceiro será avisado antecipadamente.
5. Suas informações
5.1. Nossa Política de Privacidade explica como tratamos seus dados pessoais e protegemos sua privacidade ao usar as Plataformas Tabin.
6. Faturamento e Cancelamento
6.1. Parceiro, para versões grátis, não precisa cadastrar cartão de crédito previamente. Para períodos de testes e amostra grátis das assinaturas pagas, você não precisará cadastrar cartão de crédito nem será cobrado automaticamente no fim do período de teste mas você nos concede autorização de cancelar automaticamente o uso do serviço pago ao fim do tempo de teste. 
6.2 Parceiro, você pode adquirir uma Assinatura paga diretamente com a Tabin ou por meio de terceiros autorizados com opção pré-paga que oferece acesso ao Serviço Tabin durante um intervalo de tempo específico. 
6.3. A Tabin ou terceiros autorizados, poderão disponibilizar vouchers, vale-presente ou cupons que poderão ser utilizados no ato de compra de nossas assinaturas como forma de desconto. 
6.4 Você poderá cancelar sua assinatura paga da tabin a qualquer momento e você continuará a ter acesso as funcionalidades do plano pago até o fim do período de faturamento. Após isso, será aplicado o plano gratuito disponível com suas respectivas funcionalidades. Para cancelar a assinatura paga, acesse a página “Perfil” e siga as instruções de cancelamento. Sua Conta não será cancelada.
6.5 Você poderá cancelar sua Conta Tabin a qualquer momento. Para cancelar a Conta, acesse a página “Perfil” e siga as instruções de cancelamento. Se você cancelar sua conta, sua assinatura paga, se houver, e gratuita será cancelada automaticamente. No cancelamento de Conta, todas Autorizações de Colaboradores também serão excluídas.

6.6. Alterações de preços e planos de assinatura. De tempos em tempos, poderemos alterar nossos planos de assinatura pagas e os preços de nosso serviço. Os valores de assinatura poderão ser revisados periodicamente para melhor adequação ao contínuo aprimoramento de nosso serviço. Quaisquer alterações de preço ou alterações em seus planos de assinatura serão aplicadas somente 30 dias após o envio da notificação a você. Se você não concordar com uma alteração de preço, poderá rejeitá-la cancelando a Assinatura paga aplicável antes que a alteração de preço entre em vigor.
6.7. Os tributos são baseados nas taxas aplicáveis no momento da cobrança mensal. Esses valores podem mudar com o tempo, de acordo com os requisitos de impostos locais em seu país, estado, território ou até mesmo cidade. Qualquer alteração tributária será aplicada automaticamente com base nas informações da conta que você fornecer
6.8. A Tabin poderá imediatamente encerrar estes Termos ou quaisquer Serviços Pagos em relação a você ou, de modo geral, deixar de oferecer ou negar acesso aos Serviços pagos ou a qualquer parte deles, se o pagamento da fatura estiver vencido ou atrasado.
6.9. A Tabin poderá imediatamente encerrar estes quaisquer Serviços grátis em relação a você ou, de modo geral, deixar de oferecer ou negar acesso aos Serviços grátis ou a qualquer parte deles, sem motivos.
6.10 Parceiro, após o pagamento de planos/assinaturas pré-pagas, o cancelamento entrará em vigor no dia seguinte ao último dia do período de assinatura atual. Após o final desse período também, você regredirá automaticamente para a versão gratuita do Serviço Tabin. Não fornecemos reembolsos ou créditos por períodos parciais de assinatura, exceto conforme Código do Consumidor.
7. Disposições Gerais
7.1 De acordo com a lei aplicável no Brasil, você tem certos direitos que não podem ser limitados por um contrato. Estes termos não têm como objetivo restringir esses direitos.
7.2. Você não poderá ceder, nem tampouco transferir estes Termos, total ou parcialmente, sem prévia aprovação por escrito da Tabin. Você concorda que a Tabin ceda e transfira estes Termos, total ou parcialmente, inclusive para uma subsidiária ou afiliada; um adquirente das participações acionárias, negócios ou bens da Tabin; ou para um sucessor em razão de qualquer operação societária.
7.3. Enviaremos informações relacionadas à sua Conta (por exemplo, autorizações de pagamento, cobranças, alterações de senha ou Forma de Pagamento, mensagens de confirmação, notificações) somente em formato eletrônico como, por exemplo, por meio de e-mails para o endereço fornecido durante o cadastro.
7.4. Se qualquer disposição ou disposições destes Termos de uso forem consideradas inválidas, ilegais ou não aplicáveis, a validade, legalidade e aplicabilidade das demais disposições devem permanecer em pleno vigor.
7.5. Para obter mais informações sobre o serviço Tabin, suas funcionalidades e recursos, ou caso precise de ajuda com sua conta, por favor, acesse o Suporte em nossas plataformas. No caso de quaisquer conflitos entre estes Termos de uso e informações fornecidas pelo atendimento ao cliente, estes Termos de uso prevalecerão.

      </Typography>
    </Box>
  );
}

export { TermsPage };

