# Landing Page Modular

## Sobre o Projeto

Este projeto é uma landing page modular construída com HTML, CSS e JavaScript puro. A arquitetura foi projetada para facilitar a manutenção, permitindo que cada seção da página seja desenvolvida e atualizada independentemente.

O diferencial deste projeto é sua estrutura modular, onde o HTML é fragmentado em componentes que são carregados dinamicamente via JavaScript, e o CSS é organizado em módulos específicos para cada componente.

![Preview do Projeto](/placeholder.jpg)

## Estrutura de Diretórios
projeto/
│
├── index.html                # Arquivo HTML principal
├── app.js                    # JavaScript principal
│
├── components/               # Componentes HTML
│   ├── header.html           # Cabeçalho
│   ├── hero.html             # Seção Hero
│   ├── benefits.html         # Seção Benefícios
│   ├── cta.html              # Seção CTA
│   ├── testimonials.html     # Seção Depoimentos
│   ├── impact.html           # Seção Impacto
│   └── footer.html           # Rodapé
│
├── css/                      # Estilos CSS
│   ├── main.css              # Importa todos os estilos
│   ├── variables.css         # Variáveis CSS
│   ├── base.css              # Estilos base
│   ├── buttons.css           # Estilos de botões
│   ├── header.css            # Estilos do cabeçalho
│   ├── hero.css              # Estilos da seção hero
│   ├── benefits.css          # Estilos da seção benefícios
│   ├── cta.css               # Estilos da seção CTA
│   ├── testimonials.css      # Estilos da seção depoimentos
│   ├── impact.css            # Estilos da seção impacto
│   ├── footer.css            # Estilos do rodapé
│   └── responsive.css        # Estilos responsivos
│
└── js/                       # Scripts JavaScript
├── components-loader.js  # Carregador de componentes
├── testimonials.js       # Funcionalidade do carrossel
└── video-player.js       # Funcionalidade do player de vídeo


## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Variáveis CSS para temas consistentes
  - Layout com Flexbox e Grid
  - Design responsivo
  - Organização modular
- **JavaScript**: 
  - Carregamento dinâmico de componentes
  - Classes ES6
  - Promises e async/await
  - Eventos personalizados

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/landing-page-modular.git