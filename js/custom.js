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
      time: '2022-04-11',
      header: 'Fullstack Developer (CLT)',
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
          content: 'Desenvolvimento e manutenção de aplicações em PHP com o Zend Framework.' +
            'Integração Contínua com Jenkins, GitLab e SVN. Utilização de metodologias ágeis Scrum e Kanban. Análise de Dados com Oracle.<br />' +
            'Trabalhos Realizados:<br/>' +
            '<ul>' +
            '<li>Manutenção e Desenvolvimento de evolutivas para o <a href="https://sinar.mec.gov.br/" target="_blank">SINAR - Sistema Nacional de Residências em Saúde</a>;</li>' +
            '<li>Manutenção e Desenvolvimento de evolutivas para a <a href="https://plataformacarolinabori.mec.gov.br/" target="_blank">Plataforma Carolina Bori - Revalidação/Reconhecimento de Diplomas Estrangeiros</a>.</li>' +
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
      footer: '<span class="badge badge-dark"><b>Início: </b>11/04/2022</span> - <span class="badge badge-success">Atualmente</span>'
    },
    {
      time: '2022-01-17',
      header: 'Fullstack Developer (CLT)',
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
          content: 'Atuação na área de tecnologia do RC.<br/>' +
            'Trabalhos Realizados:<br/>' +
            '<ul>' +
            '<li>Desenvolvimento de componentes em React com integração ao Salesforce;</li>' +
            '<li>Desenvolvimento de rotinas automatizadas com Python via Cronjob e Apache Airflow;</li>' +
            '<li>Análise e modelagem de dados com PortgreSQL;</li>' +
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
      footer: '<span  class="badge badge-dark"><b>Início: </b>17/01/2022</span> - <span class="badge badge-success">17/04/2023</span>'
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
      footer: '<span  class="badge badge-dark"><b>Início: </b>18/03/2020</span> - <span class="badge badge-dark"><b>Fim: </b> 14/01/2022</span>'
    },
    {
      time: '2016-04-01',
      header: 'Fullstack Developer (CLT + PJ)',
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
      footer: '<span  class="badge badge-dark"><b>Início: </b>01/04/2016</span> - <span class="badge badge-dark"><b>Fim: </b> 14/07/2019</span>'
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

  $('#copyright-year').text(new Date().getFullYear());

  $('#wallet-btn').on('click', () => {
    navigator.clipboard.writeText($('#wallet-hash').val())
  })
});
