import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import DifferentialsSection from './components/DifferentialsSection'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

const heroHighlights = [
  { iconClassName: 'fa-solid fa-shield-halved', label: 'Ambiente Seguro' },
  { iconClassName: 'fa-solid fa-user-graduate', label: 'Profissionais Qualificados' },
  { iconClassName: 'fa-solid fa-apple-whole', label: 'Alimentação Balanceada' },
]

const differentialCards = [
  {
    iconClassName: 'fa-solid fa-leaf',
    title: 'Educação com Amor',
    description: 'Ambiente acolhedor que estimula o bem-estar e o desenvolvimento das crianças.',
  },
  {
    iconClassName: 'fa-regular fa-sun',
    title: 'Aprendizado Significativo',
    description: 'Metodologias que incentivam a curiosidade, a autonomia e o pensamento crítico.',
  },
  {
    iconClassName: 'fa-solid fa-shapes',
    title: 'Formação para a Vida',
    description: 'Desenvolvemos habilidades emocionais, sociais e cognitivas para o futuro de sucesso.',
  },
  {
    iconClassName: 'fa-solid fa-spa',
    title: 'Infantil e Fundamental',
    description: 'Do Infantil ao Fundamental, um caminho de descobertas e conquistas em cada fase da infância.',
  },
]

const featuresItems = [
  { iconClassName: 'fa-solid fa-people-group', label: 'Turmas reduzidas', accentClassName: 'feature-item-icon--green' },
  { iconClassName: 'fa-solid fa-star', label: 'Professores especializados', accentClassName: 'feature-item-icon--orange' },
  { iconClassName: 'fa-solid fa-heart', label: 'Projeto socioemocional', accentClassName: 'feature-item-icon--green' },
  { iconClassName: 'fa-solid fa-book-open', label: 'Inglês no dia a dia', accentClassName: 'feature-item-icon--purple' },
  { iconClassName: 'fa-solid fa-shield-halved', label: 'Ambiente seguro e acolhedor', accentClassName: 'feature-item-icon--orange' },
  { iconClassName: 'fa-solid fa-apple-whole', label: 'Alimentação balanceada', accentClassName: 'feature-item-icon--green' },
]

const footerColumns = [
  {
    title: 'Institucional',
    links: [
      { href: '#escola', label: 'Sobre a Escola' },
      { href: '#educacao', label: 'Proposta Pedagógica' },
      { href: '#equipe', label: 'Equipe' },
    ],
  },
  {
    title: 'Ensino',
    links: [
      { href: '#educacao-infantil', label: 'Educação Infantil' },
      { href: '#ensino-fundamental', label: 'Ensino Fundamental' },
      { href: '#atividades-extras', label: 'Atividades Extras' },
    ],
  },
  {
    title: 'Informações',
    links: [
      { href: '#blog', label: 'Blog' },
      { href: '#galeria', label: 'Galeria' },
      { href: '#perguntas-frequentes', label: 'Perguntas Frequentes' },
    ],
  },
]

const footerContactItems = [
  { iconClassName: 'fa-solid fa-phone', lines: ['(11) 99999-9999'] },
  { iconClassName: 'fa-regular fa-envelope', lines: ['contato@vilacamaleao.com.br'] },
  { iconClassName: 'fa-solid fa-location-dot', lines: ['Rua das Cores, 123', 'Vila Feliz - SP'] },
]

const footerSocialLinks = [
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
    iconClassName: 'fa-brands fa-instagram',
    className: 'footer-social-link--instagram',
  },
  {
    href: 'https://www.facebook.com',
    label: 'Facebook',
    iconClassName: 'fa-brands fa-facebook-f',
    className: 'footer-social-link--facebook',
  },
  {
    href: '#contato',
    label: 'WhatsApp',
    iconClassName: 'fa-brands fa-whatsapp',
    className: 'footer-social-link--whatsapp',
  },
]

function App() {
  return (
    <>
      <Header logoSrc="/logo.jpg" logoAlt="Logo Escola Vila Camaleão" />

      <main>
        <Hero
          title={
            <>
              Um ensino que
              <br />
              <span className="text-orange">acolhe, transforma</span>
              <br />
              <span className="text-green">e prepara para a vida.</span>
            </>
          }
          description="Na Vila Camaleão, aprender vai muito além da sala de aula. Aqui, cada criança é única, respeitada e incentivada a explorar seu melhor."
          whatsappHref="#contato"
          moreHref="#escola"
          imageSrc="/kids.png"
          imageAlt="Três crianças sorrindo e abraçadas na Escola Vila Camaleão"
          highlights={heroHighlights}
        />

        <DifferentialsSection items={differentialCards} />

        <AboutSection
          kicker="Sobre a"
          title="Escola Vila Camaleão"
          description="A Escola Vila Camaleão nasceu com o propósito de oferecer uma educação humana, criativa e de qualidade. Valorizamos o respeito, a empatia e a individualidade de cada aluno, promovendo um ambiente seguro e inspirador."
          buttonLabel="Conheça nossa história"
          buttonHref="#educacao"
          imageSrc="/escola.png"
          imageAlt="Fachada colorida da Escola Vila Camaleão"
        />

        <FeaturesSection
          title="Nossos diferenciais"
          items={featuresItems}
          buttonLabel="Ver todos os diferenciais"
          buttonHref="#diferenciais"
        />

        <CtaSection
          logoSrc="/logo.jpg"
          logoAlt="Logo Escola Vila Camaleão"
          title="Agende uma visita e venha conhecer nosso espaço!"
          description="Será um prazer receber você e sua família."
          whatsappHref="#contato"
          whatsappLabel="Falar no WhatsApp"
        />
      </main>

      <Footer
        logoSrc="/logo.jpg"
        logoAlt="Logo Escola Vila Camaleão"
        columns={footerColumns}
        contactTitle="Contato"
        contactItems={footerContactItems}
        socialLinks={footerSocialLinks}
        copyrightText="© 2024 Escola Vila Camaleão - Todos os direitos reservados."
      />
    </>
  )
}

export default App
