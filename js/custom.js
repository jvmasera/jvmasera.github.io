$(document).ready(function() {

  //Partículas
  // $('#particles').particleground({
  //   minSpeedX: 0.1,
  //   maxSpeedX: 0.7,
  //   minSpeedY: 0.1,
  //   maxSpeedY: 0.7,
  //   directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
  //   directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
  //   density: 10000, // How many particles will be generated: one particle every n pixels
  //   dotColor: 'rgba(255,255,255,.3)',
  //   lineColor: 'rgba(255,255,255,.3)',
  //   particleRadius: 4, // Dot size
  //   lineWidth: .5,
  //   curvedLines: false,
  //   proximity: 100, // How close two dots need to be before they join
  //   parallax: true,
  //   parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
  //   onInit: function() {},
  //   onDestroy: function() {}
  // });

  //parallax
  $('#particles').parallax({
    imageSrc: 'img/bg_1.jpg',
    overScrollFix: true,
    bleed:500,
    speed: 0.2
  });

  var data = [
    {
      time: '2024-02-05',
      header: 'Engenheiro de Software Sênior (CLT)',
      body: [
        {
          tag: 'h2',
          content: "G4F",
          attr: {
            class: 'd-inline pr-1'
          }
        },
        {
          tag: 'a',
          content: '<i class="fa fa-link"></i>',
          attr: {
            href: 'https://www.g4f.com.br/',
            target: '_blank',
            title: 'Visitar Site',
            class: 'btn-link'
          }
        },
        {
          tag: 'h6',
          content: 'MRE – Ministério das Relações Exteriores (Itamaraty)',
          attr: {
            class: 'mt-3'
          }
        },
        {
          tag: 'p',
          content: 'Construção e evolução do sistema de comunicação oficial entre a Secretaria de Estado e os postos no Brasil e no exterior. ' +
            'Desenvolvimento de back-end e front-end, com criação de novas funcionalidades e correção de falhas. ' +
            'Projetei e desenvolvi microsserviço de sincronização de documentos com arquitetura orientada a eventos e mensageria. ' +
            'Integração com soluções corporativas de segurança e criptografia, serviço de indexação de dados, e implementação de observabilidade com Elastic Stack (ELK). ' +
            'CI/CD, Kubernetes e sustentação de aplicações.<br />' +
            'Trabalhos Realizados:<br/>' +
            '<ul>' +
            '<li>Desenvolvimento e Implantação DevOps do CAE Repositório Digital das teses do CAE com DSpace;</li>' +
            '<li>Desenvolvimento do SICOM e microserviços relacionados;</li>' +
            '<li>Sustentação das aplicações do Itamaraty;</li>' +
            '<li>Migração de sistemas legados para atuais.</li>' +
            '</ul>',
        },
        {
          tag: 'span',
          content: '<i class="devicon-linux-plain tech-icon m-1" title="Linux"></i>' +
            '<i class="devicon-elasticsearch-plain tech-icon m-1" title="Elasticsearch"></i>' +
            '<i class="devicon-php-plain tech-icon m-1" title="PHP"></i>' +
            '<i class="devicon-zend-plain tech-icon m-1" title="Zend"></i>' +
            '<i class="devicon-postgresql-plain tech-icon m-1" title="PostgreSQL"></i>' +
            '<i class="devicon-kubernetes-plain tech-icon m-1" title="Kubernetes"></i>' +
            '<i class="fab fa-node fa-2x m-1" title="Node.js"></i>' +
            '<i class="devicon-angular-plain tech-icon m-1" title="Angular"></i>' +
            '<i class="devicon-react-original tech-icon m-1" title="React"></i>' +
            '<i class="devicon-apachekafka-original tech-icon m-1" title="Kafka"></i>' +
            '<i class="devicon-figma-plain tech-icon m-1" title="Figma"></i>' +
            '<i class="devicon-docker-plain tech-icon m-1" title="Docker"></i>',
          attr: {
            class: 'mt-5 d-block'
          }
        }
      ],
      footer: '<span class="badge badge-dark"><b>Início: </b>02/2024</span> - <span class="badge badge-success">Atualmente</span>'
    },
    {
      time: '2022-04-11',
      header: 'Engenheiro de Software Sênior (CLT)',
      body: [
        {
          tag: 'h2',
          content: "Digisystem",
          attr: {
            class: 'd-inline pr-1'
          }
        },
        {
          tag: 'a',
          content: '<i class="fa fa-link"></i>',
          attr: {
            href: 'https://www.digisystem.com.br/',
            target: '_blank',
            title: 'Visitar Site',
            class: 'btn-link'
          }
        },
        {
          tag: 'h6',
          content: 'MEC - Ministério da Educação',
          attr: {
            class: 'mt-3'
          }
        },
        {
          tag: 'p',
          content: 'Desenvolvimento e manutenção de aplicações corporativas em PHP com Zend Framework, em projetos estratégicos de educação e saúde. ' +
            'Integração Contínua com Jenkins, GitLab e SVN. Metodologias ágeis Scrum e Kanban. Análise de Dados com Oracle.<br />' +
            'Trabalhos Realizados:<br/>' +
            '<ul>' +
            '<li>Manutenção e Desenvolvimento de evolutivas para o <a href="https://sinar.mec.gov.br/" target="_blank">SINAR - Sistema Nacional de Residências em Saúde</a>;</li>' +
            '<li>Manutenção e Desenvolvimento de evolutivas para a Educação em Saúde – Preceptoria;</li>' +
            '<li>Manutenção e Desenvolvimento de evolutivas para a <a href="https://plataformacarolinabori.mec.gov.br/" target="_blank">Plataforma Carolina Bori - Revalidação/Reconhecimento de Diplomas Estrangeiros</a>;</li>' +
            '<li>Manutenção e Desenvolvimento de evolutivas para a SisCNRM - Sistema da Comissão Nacional de Residência Médica.</li>' +
            '</ul>',
        },
        {
          tag: 'span',
          content: '<i class="fab fa-php fa-2x m-1" title="Php"></i>' +
            '<i class="fab fa-docker fa-2x m-1" title="Docker"></i>' +
            '<i class="fab fa-jenkins fa-2x m-1" title="Jenkins"></i>' +
            '<i class="fab fa-gitlab fa-2x m-1" title="Gitlab"></i>',
          attr: {
            class: 'mt-5 d-block'
          }
        }
      ],
      footer: '<span class="badge badge-dark"><b>Início: </b>04/2022</span> - <span class="badge badge-success">Atualmente</span>'
    },
    {
      time: '2022-01-17',
      header: 'Full Stack Developer (CLT)',
      body: [
        {
          tag: 'h2',
          content: "Stone Co.",
          attr: {
            class: 'd-inline pr-1'
          }
        },
        {
          tag: 'a',
          content: '<i class="fa fa-link"></i>',
          attr: {
            href: 'https://www.stone.com.br/',
            target: '_blank',
            title: 'Visitar Site',
            class: 'btn-link'
          }
        },
        {
          tag: 'p',
          content: 'Desenvolvimento de soluções voltadas à integração de sistemas, automação de processos e aprimoramento de aplicações corporativas.<br/>' +
            'Trabalhos Realizados:<br/>' +
            '<ul>' +
            '<li>Desenvolvimento de componentes em React com integração ao Salesforce;</li>' +
            '<li>Desenvolvimento de rotinas automatizadas com Python via Cronjob e Apache Airflow;</li>' +
            '<li>Integração da API do Reclame Aqui ao Salesforce.</li>' +
            '</ul>',
          attr: {
            class: 'mt-3'
          }
        },
        {
          tag: 'span',
          content: '<i class="fab fa-python fa-2x m-1" title="Python"></i>' +
            '<i class="fab fa-react fa-2x m-1" title="React"></i>' +
            '<i class="fab fa-node fa-2x m-1" title="Node"></i>' +
            '<i class="fab fa-docker fa-2x m-1" title="Docker"></i>' +
            '<i class="fab fa-github fa-2x m-1" title="Github"></i>' +
            '<i class="fab fa-figma fa-2x m-1" title="Figma"></i>',
          attr: {
            class: 'mt-5 d-block'
          }
        }
      ],
      footer: '<span class="badge badge-dark"><b>Início: </b>01/2022</span> - <span class="badge badge-dark"><b>Fim: </b>04/2023</span>'
    },
    {
      time: '2020-03-18',
      header: 'Fullstack Developer (CLT)',
      body: [
        {
          tag: 'h2',
          content: "Basis",
          attr: {
            class: 'd-inline pr-1'
          }
        },
        {
          tag: 'a',
          content: '<i class="fa fa-link"></i>',
          attr: {
            href: 'https://www.basis.com.br/',
            target: '_blank',
            title: 'Visitar Site',
            class: 'btn-link'
          }
        },
        {
          tag: 'h6',
          content: 'PR - Presidência da República',
          attr: {
            class: 'mt-3'
          }
        },
        {
          tag: 'p',
          content: 'Desenvolvimento de aplicações com Laravel, React e Vue.js. Integração contínua e automatização de processos com Jenkins, Docker, Rancher, ' +
            'Sonarqube e Harbor. Análise e Modelagem de Dados com Oracle. Prototipagem com Adobe XD.<br />' +
            'Trabalhos Realizados:<br/>' +
            '<ul>' +
            '<li>Desenvolvimento do Módulo Administrativo e do Módulo DISC - Desclassificação de Informação por Solicitação do Cidadão para o sistema SECIC - Sistema Eletrônico de Controle de Informações Classificadas (CMRInforma).</li>' +
            '</ul>',
        },
        {
          tag: 'h6',
          content: 'MEC - Ministério da Educação',
          attr: {
            class: 'mt-3'
          }
        },
        {
          tag: 'p',
          content: 'Desenvolvimento de softwares em PHP com o Zend Framework. Desenvolvimento do frontend com Javascript, Mootools, MochaUI, JQuery e Bootstrap. ' +
            'Integração Contínua com Jenkins, GitLab e SVN. Utilização de metodologias ágeis Scrum e Kanban. Análise e Modelagem de Dados com PostgreSQL.<br />' +
            'Trabalhos Realizados:<br/>' +
            '<ul>' +
            '<li>Desenvolvimento do Módulo "Novos Caminhos" para o <a href="https://sistec.mec.gov.br/" target="_blank">SISTEC - Sistema Nacional de Informações da Educação Profissional e Tecnológica</a>.</li>' +
            '</ul>',
        },
        {
          tag: 'span',
          content: '<i class="fab fa-php fa-2x m-1" title="Php"></i>' +
            '<i class="fab fa-laravel fa-2x m-1" title="Laravel"></i>' +
            '<i class="fab fa-react fa-2x m-1" title="React"></i>' +
            '<i class="fab fa-vuejs fa-2x m-1" title="Vue.js"></i>' +
            '<i class="fab fa-node fa-2x m-1" title="Node"></i>' +
            '<i class="fab fa-docker fa-2x m-1" title="Docker"></i>' +
            '<i class="fab fa-jenkins fa-2x m-1" title="Jenkins"></i>' +
            '<i class="fab fa-gitlab fa-2x m-1" title="Gitlab"></i>' +
            '<i class="fab fa-adobe fa-2x m-1" title="Adobe XD"></i>',
          attr: {
            class: 'mt-5 d-block'
          }
        }
      ],
      footer: '<span class="badge badge-dark"><b>Início: </b>03/2020</span> - <span class="badge badge-dark"><b>Fim: </b>01/2022</span>'
    },
    {
      time: '2016-04-01',
      header: 'Full Stack Developer (CLT + PJ)',
      body: [
        {
          tag: 'h2',
          content: "Conectando Pessoas",
          attr: {
            class: 'd-inline pr-1'
          }
        },
        {
          tag: 'a',
          content: '<i class="fa fa-link"></i>',
          attr: {
            href: 'https://www.conectandopessoas.com.br/',
            target: '_blank',
            title: 'Visitar Site',
            class: 'btn-link'
          }
        },
        {
          tag: 'p',
          content: 'Desenvolvimento e Manutenção de Sites, Portais, Lading Pages e Hotsites com Joomla e Wordpress. Criação de Templates, Plugins, ' +
            'Componentes e Extensões para Joomla e Wordpress. Construção de E-commerce com Tray e-commerce. Desenvolvimento de Aplicações com Laravel e Vue.js.<br/>' +
            'Trabalhos Realizados:<br/>' +
            '<ul>' +
            '<li>Desenvolvimento do portal da SBD - Sociedade Brasileira de Diabetes;</li>' +
            '<li>Desenvolvimento do portal da SBRV - Sociedade Brasileira de Retina e Vítreo;</li>' +
            '<li>Desenvolvimento de +80 Sites, Landing Pages e Portais;</li>' +
            '<li>Desenvolvimento do CPTask - Sistema de Gerenciamento de Tarefas Integrado ao Basecamp.</li>' +
            '</ul>',
          attr: {
            class: 'mt-3'
          }
        },
        {
          tag: 'span',
          content: '<i class="fab fa-php fa-2x m-1" title="Php"></i>' +
            '<i class="fab fa-laravel fa-2x m-1" title="Laravel"></i>' +
            '<i class="fab fa-vuejs fa-2x m-1" title="Vue.js"></i>' +
            '<i class="fab fa-node fa-2x m-1" title="Node"></i>' +
            '<i class="fab fa-docker fa-2x m-1" title="Docker"></i>' +
            '<i class="fab fa-github fa-2x m-1" title="Github"></i>' +
            '<i class="fab fa-wordpress fa-2x m-1" title="Wordpress"></i>' +
            '<i class="fab fa-joomla fa-2x m-1" title="Joomla"></i>',
          attr: {
            class: 'mt-5 d-block'
          }
        }
      ],
      footer: '<span class="badge badge-dark"><b>Início: </b>04/2016</span> - <span class="badge badge-dark"><b>Fim: </b>03/2020</span>'
    }
  ];

  // Timeline
  $("#myTimeline").albeTimeline(data,{
    effect: "fadeInUp",
    formatDate: 'dd MMM',
    show: true,
    showGroup: true,
    language: "pt-br",
    sortDesc: true
  });

  // Tooltip e animação nos ícones de tecnologias
  $('#myTimeline i[title].fa-2x, #myTimeline i[title].tech-icon')
    .addClass('tech-hover')
    .attr('data-toggle', 'tooltip')
    .tooltip({ placement: 'top', container: 'body', trigger: 'hover' });

  $('#copyright-year').text(new Date().getFullYear());

  $('#wallet-btn').on('click', () => {
    navigator.clipboard.writeText($('#wallet-hash').val())
  })
});
