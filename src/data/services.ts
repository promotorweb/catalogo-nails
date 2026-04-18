import manicure from "@/assets/svc-manicure.jpg";
import pedicure from "@/assets/svc-pedicure.jpg";
import peemao from "@/assets/svc-peemao.jpg";
import esmaltacao from "@/assets/svc-esmaltacao.jpg";
import gel from "@/assets/svc-gel.jpg";
import remocao from "@/assets/svc-remocao.jpg";
import alongGel from "@/assets/svc-along-gel.jpg";
import fibra from "@/assets/svc-fibra.jpg";
import manutencao from "@/assets/svc-manutencao.jpg";
import banho from "@/assets/svc-banho.jpg";
import blindagem from "@/assets/svc-blindagem.jpg";
import spaMaos from "@/assets/svc-spa-maos.jpg";
import spaPes from "@/assets/svc-spa-pes.jpg";
import francesinha from "@/assets/svc-francesinha.jpg";
import filha from "@/assets/svc-filha.jpg";
import artSimples from "@/assets/svc-art-simples.jpg";
import artPremium from "@/assets/svc-art-premium.jpg";

export type Service = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  technique: string;
  duration: string;
  benefits: string[];
};

export type Category = {
  id: string;
  emoji: string;
  title: string;
  services: Service[];
};

export const CATEGORIES: Category[] = [
  {
    id: "basicos",
    emoji: "🖐️",
    title: "Serviços Básicos",
    services: [
      {
        id: "manicure",
        name: "Manicure",
        price: "R$ 35,00",
        image: manicure,
        description: "Cuidado completo das suas unhas das mãos: cutilagem, lixamento, hidratação e esmaltação à sua escolha.",
        technique: "Técnica clássica com cutilagem precisa e acabamento impecável.",
        duration: "Aprox. 45 minutos",
        benefits: ["Unhas saudáveis", "Cutículas hidratadas", "Acabamento profissional"],
      },
      {
        id: "pedicure",
        name: "Pedicure",
        price: "R$ 40,00",
        image: pedicure,
        description: "Tratamento completo dos pés com escalda-pés relaxante, esfoliação e esmaltação.",
        technique: "Cutilagem suave e remoção de calosidades.",
        duration: "Aprox. 50 minutos",
        benefits: ["Pés macios", "Relaxamento", "Visual impecável"],
      },
      {
        id: "pe-mao",
        name: "Pé e Mão",
        price: "R$ 70,00",
        image: peemao,
        description: "Combo completo: manicure + pedicure com cuidado integral para mãos e pés.",
        technique: "Atendimento sequencial otimizando seu tempo.",
        duration: "Aprox. 1h30",
        benefits: ["Economia", "Visual completo", "Mais tempo para você"],
      },
      {
        id: "esmaltacao",
        name: "Esmaltação Simples",
        price: "R$ 25,00",
        image: esmaltacao,
        description: "Aplicação de esmalte tradicional com base e top coat para maior durabilidade.",
        technique: "Aplicação em camadas finas e uniformes.",
        duration: "Aprox. 25 minutos",
        benefits: ["Rapidez", "Cores variadas", "Brilho intenso"],
      },
    ],
  },
  {
    id: "gel",
    emoji: "💅",
    title: "Esmaltação em Gel",
    services: [
      {
        id: "gel",
        name: "Esmaltação em Gel",
        price: "R$ 80,00",
        image: gel,
        description: "Esmaltação em gel com cura em LED, durando até 3 semanas com brilho intacto.",
        technique: "Aplicação em camadas com cura UV/LED a cada passo.",
        duration: "Aprox. 1h",
        benefits: ["Dura até 21 dias", "Brilho permanente", "Não lasca"],
      },
      {
        id: "remocao-gel",
        name: "Remoção de Gel",
        price: "R$ 40,00",
        image: remocao,
        description: "Remoção segura do esmalte em gel, preservando a saúde da unha natural.",
        technique: "Lixamento controlado e hidratação intensiva final.",
        duration: "Aprox. 30 minutos",
        benefits: ["Sem danos", "Unhas hidratadas", "Preparo perfeito"],
      },
    ],
  },
  {
    id: "alongamentos",
    emoji: "✨",
    title: "Alongamentos",
    services: [
      {
        id: "along-gel",
        name: "Alongamento em Gel",
        price: "R$ 180,00",
        image: alongGel,
        description: "Alongamento estrutural em gel com modelagem personalizada no formato desejado.",
        technique: "Construção em molde com gel construtor de alta resistência.",
        duration: "Aprox. 2h30",
        benefits: ["Resistência", "Formato sob medida", "Durabilidade"],
      },
      {
        id: "fibra",
        name: "Fibra de Vidro",
        price: "R$ 220,00",
        image: fibra,
        description: "Alongamento ultraleve em fibra de vidro, perfeito para unhas naturais finas.",
        technique: "Aplicação de fibra com selagem em gel construtor.",
        duration: "Aprox. 3h",
        benefits: ["Leveza", "Naturalidade", "Alta durabilidade"],
      },
      {
        id: "manutencao",
        name: "Manutenção",
        price: "R$ 120,00",
        image: manutencao,
        description: "Manutenção do alongamento a cada 20-25 dias para preservar o resultado.",
        technique: "Refil de crescimento e renovação do esmalte.",
        duration: "Aprox. 2h",
        benefits: ["Continuidade", "Economia", "Visual sempre novo"],
      },
    ],
  },
  {
    id: "premium",
    emoji: "💎",
    title: "Serviços Premium",
    services: [
      {
        id: "banho-gel",
        name: "Banho de Gel",
        price: "R$ 100,00",
        image: banho,
        description: "Cobertura de gel sobre a unha natural para mais resistência e brilho prolongado.",
        technique: "Aplicação de gel construtor finalizado com top coat.",
        duration: "Aprox. 1h15",
        benefits: ["Fortalecimento", "Brilho intenso", "Dura semanas"],
      },
      {
        id: "blindagem",
        name: "Blindagem",
        price: "R$ 70,00",
        image: blindagem,
        description: "Tratamento fortalecedor que cria uma proteção extra na unha natural.",
        technique: "Aplicação de produto blindante com selagem.",
        duration: "Aprox. 50 minutos",
        benefits: ["Unhas mais fortes", "Anti-quebra", "Crescimento saudável"],
      },
      {
        id: "spa-maos",
        name: "Spa das Mãos",
        price: "R$ 60,00",
        image: spaMaos,
        description: "Ritual de cuidado: esfoliação, máscara hidratante e massagem relaxante.",
        technique: "Produtos premium com aromaterapia.",
        duration: "Aprox. 50 minutos",
        benefits: ["Hidratação profunda", "Relaxamento", "Pele renovada"],
      },
      {
        id: "spa-pes",
        name: "Spa dos Pés",
        price: "R$ 70,00",
        image: spaPes,
        description: "Escalda-pés aromático, esfoliação, máscara e massagem revitalizante.",
        technique: "Imersão com sais e óleos essenciais.",
        duration: "Aprox. 1h",
        benefits: ["Alívio do cansaço", "Pés macios", "Bem-estar"],
      },
    ],
  },
  {
    id: "decoracoes",
    emoji: "🎨",
    title: "Decorações",
    services: [
      {
        id: "francesinha",
        name: "Francesinha",
        price: "R$ 15,00",
        image: francesinha,
        description: "O clássico atemporal: ponta branca elegante sobre base nude ou rosa.",
        technique: "Pincel fino para linhas precisas.",
        duration: "+ 15 minutos no serviço base",
        benefits: ["Atemporal", "Elegante", "Combina com tudo"],
      },
      {
        id: "filha-unica",
        name: "Filha Única",
        price: "R$ 10,00",
        image: filha,
        description: "Uma unha decorada em destaque entre as demais com cor única.",
        technique: "Decoração focada em uma unha de cada mão.",
        duration: "+ 10 minutos",
        benefits: ["Discreto", "Charmoso", "Tendência"],
      },
      {
        id: "art-simples",
        name: "Nail Art Simples",
        price: "R$ 5 / unha",
        image: artSimples,
        description: "Desenhos delicados, pontos, listras ou pequenos detalhes por unha.",
        technique: "Pincéis e ferramentas de detalhe.",
        duration: "Variável",
        benefits: ["Personalizado", "Acessível", "Criativo"],
      },
      {
        id: "art-premium",
        name: "Nail Art Premium",
        price: "R$ 15 / unha",
        image: artPremium,
        description: "Arte detalhada com pedrarias, foil, 3D e técnicas avançadas.",
        technique: "Aplicação de pedrarias, foils e modelagem 3D.",
        duration: "Variável",
        benefits: ["Exclusividade", "Alto impacto", "Arte autoral"],
      },
    ],
  },
];
