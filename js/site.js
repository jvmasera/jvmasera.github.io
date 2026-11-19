(function () {
  'use strict';

  var START_YEAR = 2016;

  var experiences = [
    {
      company: 'G4F',
      url: 'https://www.g4f.com.br/',
      role: 'Engenheiro de Software Sênior (CLT)',
      start: '02/2024',
      end: null,
      clients: [
        {
          name: 'MRE – Ministério das Relações Exteriores (Itamaraty)',
          description: 'Construção e evolução do sistema de comunicação oficial entre a Secretaria de Estado e os postos no Brasil e no exterior. ' +
            'Desenvolvimento de back-end e front-end, com criação de novas funcionalidades e correção de falhas. ' +
            'Projetei e desenvolvi microsserviço de sincronização de documentos com arquitetura orientada a eventos e mensageria. ' +
            'Integração com soluções corporativas de segurança e criptografia, serviço de indexação de dados e implementação de observabilidade com Elastic Stack (ELK). ' +
            'CI/CD, Kubernetes e sustentação de aplicações.',
          works: [
            'Desenvolvimento e implantação DevOps do CAE Repositório Digital das teses do CAE com DSpace;',
            'Desenvolvimento do SICOM e microsserviços relacionados;',
            'Sustentação das aplicações do Itamaraty;',
            'Migração de sistemas legados para atuais.'
          ]
        }
      ],
      tech: [
        ['linux-plain', 'Linux'], ['elasticsearch-plain', 'Elasticsearch'], ['php-plain', 'PHP'], ['zend-plain', 'Zend'],
        ['postgresql-plain', 'PostgreSQL'], ['kubernetes-plain', 'Kubernetes'], ['nodejs-plain', 'Node.js'],
        ['angular-plain', 'Angular'], ['react-original', 'React'], ['apachekafka-original', 'Kafka'],
        ['figma-plain', 'Figma'], ['docker-plain', 'Docker']
      ]
    },
    {
      company: 'Digisystem',
      url: 'https://www.digisystem.com.br/',
      role: 'Engenheiro de Software Sênior (CLT)',
      start: '04/2022',
      end: null,
      clients: [
        {
          name: 'MEC – Ministério da Educação',
          description: 'Desenvolvimento e manutenção de aplicações corporativas em PHP com Zend Framework, em projetos estratégicos de educação e saúde. ' +
            'Integração contínua com Jenkins, GitLab e SVN. Metodologias ágeis Scrum e Kanban. Análise de dados com Oracle.',
          works: [
            'Manutenção e evolutivas do <a href="https://sinar.mec.gov.br/" target="_blank" rel="noopener">SINAR – Sistema Nacional de Residências em Saúde</a>;',
            'Manutenção e evolutivas da Educação em Saúde – Preceptoria;',
            'Manutenção e evolutivas da <a href="https://plataformacarolinabori.mec.gov.br/" target="_blank" rel="noopener">Plataforma Carolina Bori – Revalidação/Reconhecimento de Diplomas Estrangeiros</a>;',
            'Manutenção e evolutivas do SisCNRM – Sistema da Comissão Nacional de Residência Médica.'
          ]
        }
      ],
      tech: [['php-plain', 'PHP'], ['docker-plain', 'Docker'], ['jenkins-plain', 'Jenkins'], ['gitlab-plain', 'GitLab']]
    },
    {
      company: 'Stone Co.',
      url: 'https://www.stone.com.br/',
      role: 'Full Stack Developer (CLT)',
      start: '01/2022',
      end: '04/2023',
      clients: [
        {
          name: null,
          description: 'Desenvolvimento de soluções voltadas à integração de sistemas, automação de processos e aprimoramento de aplicações corporativas.',
          works: [
            'Desenvolvimento de componentes em React com integração ao Salesforce;',
            'Desenvolvimento de rotinas automatizadas com Python via Cronjob e Apache Airflow;',
            'Integração da API do Reclame Aqui ao Salesforce.'
          ]
        }
      ],
      tech: [['python-plain', 'Python'], ['react-original', 'React'], ['nodejs-plain', 'Node.js'], ['docker-plain', 'Docker'],
        ['github-original', 'GitHub'], ['figma-plain', 'Figma']]
    },
    {
      company: 'Basis',
      url: 'https://www.basis.com.br/',
      role: 'Full Stack Developer (CLT)',
      start: '03/2020',
      end: '01/2022',
      clients: [
        {
          name: 'PR – Presidência da República',
          description: 'Desenvolvimento de aplicações com Laravel, React e Vue.js. Integração contínua e automatização de processos com Jenkins, Docker, Rancher, ' +
            'SonarQube e Harbor. Análise e modelagem de dados com Oracle. Prototipagem com Adobe XD.',
          works: [
            'Desenvolvimento do Módulo Administrativo e do Módulo DISC – Desclassificação de Informação por Solicitação do Cidadão para o sistema SECIC – Sistema Eletrônico de Controle de Informações Classificadas (CMRInforma).'
          ]
        },
        {
          name: 'MEC – Ministério da Educação',
          description: 'Desenvolvimento de software em PHP com Zend Framework. Frontend com JavaScript, MooTools, MochaUI, jQuery e Bootstrap. ' +
            'Integração contínua com Jenkins, GitLab e SVN. Metodologias ágeis Scrum e Kanban. Análise e modelagem de dados com PostgreSQL.',
          works: [
            'Desenvolvimento do Módulo "Novos Caminhos" para o <a href="https://sistec.mec.gov.br/" target="_blank" rel="noopener">SISTEC – Sistema Nacional de Informações da Educação Profissional e Tecnológica</a>.'
          ]
        }
      ],
      tech: [['php-plain', 'PHP'], ['laravel-plain', 'Laravel'], ['react-original', 'React'], ['vuejs-plain', 'Vue.js'],
        ['nodejs-plain', 'Node.js'], ['docker-plain', 'Docker'], ['jenkins-plain', 'Jenkins'], ['gitlab-plain', 'GitLab'], ['xd-plain', 'Adobe XD']]
    },
    {
      company: 'Conectando Pessoas',
      url: 'https://www.conectandopessoas.com.br/',
      role: 'Full Stack Developer (CLT + PJ)',
      start: '04/2016',
      end: '03/2020',
      clients: [
        {
          name: null,
          description: 'Desenvolvimento e manutenção de sites, portais, landing pages e hotsites com Joomla e WordPress. Criação de templates, plugins, ' +
            'componentes e extensões para Joomla e WordPress. Construção de e-commerce com Tray. Desenvolvimento de aplicações com Laravel e Vue.js.',
          works: [
            'Desenvolvimento do portal da SBD – Sociedade Brasileira de Diabetes;',
            'Desenvolvimento do portal da SBRV – Sociedade Brasileira de Retina e Vítreo;',
            'Desenvolvimento de +80 sites, landing pages e portais;',
            'Desenvolvimento do CPTask – Sistema de Gerenciamento de Tarefas Integrado ao Basecamp.'
          ]
        }
      ],
      tech: [['php-plain', 'PHP'], ['laravel-plain', 'Laravel'], ['vuejs-plain', 'Vue.js'], ['nodejs-plain', 'Node.js'],
        ['docker-plain', 'Docker'], ['github-original', 'GitHub'], ['wordpress-plain', 'WordPress'], ['fa:fab fa-joomla', 'Joomla']]
    }
  ];

  function techIcon(item) {
    var cls = item[0].indexOf('fa:') === 0 ? item[0].slice(3) : 'devicon-' + item[0];
    return '<span class="tech" data-tip="' + item[1] + '" tabindex="0" aria-label="' + item[1] + '"><i class="' + cls + '"></i></span>';
  }

  function renderExperience(exp) {
    var current = !exp.end;
    var clients = exp.clients.map(function (c) {
      var works = c.works.map(function (w) { return '<li>' + w + '</li>'; }).join('');
      return '<div class="tl-client">' +
        (c.name ? '<h4><i class="fas fa-building"></i>' + c.name + '</h4>' : '') +
        '<p class="tl-desc">' + c.description + '</p>' +
        '<div class="tl-works"><p class="tl-works-title">Principais entregas</p><ul>' + works + '</ul></div>' +
        '</div>';
    }).join('');

    return '<article class="tl-item reveal' + (current ? ' current' : '') + '">' +
      '<div class="tl-card">' +
      '<div class="tl-top">' +
      '<div>' +
      '<h3 class="tl-company">' + exp.company +
      ' <a href="' + exp.url + '" target="_blank" rel="noopener" title="Visitar site" aria-label="Visitar site de ' + exp.company + '"><i class="fas fa-external-link-alt"></i></a></h3>' +
      '<p class="tl-role">' + exp.role + '</p>' +
      '</div>' +
      '<div class="tl-period">' +
      '<span class="tag">' + exp.start + ' – ' + (exp.end || 'Atual') + '</span>' +
      (current ? '<span class="tag live">Atualmente</span>' : '') +
      '</div>' +
      '</div>' +
      clients +
      '<div class="tl-tech">' + exp.tech.map(techIcon).join('') + '</div>' +
      '</div></article>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Linha do tempo
    var tl = document.getElementById('timeline');
    if (tl) { tl.innerHTML = experiences.map(renderExperience).join(''); }

    // Indicadores
    var years = new Date().getFullYear() - START_YEAR;
    var yearsEl = document.getElementById('stat-years');
    if (yearsEl) { yearsEl.textContent = years; }
    var companiesEl = document.getElementById('stat-companies');
    if (companiesEl) { companiesEl.textContent = experiences.length; }
    var yearEl = document.getElementById('copyright-year');
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

    // Navegação
    var nav = document.getElementById('nav');
    var toTop = document.getElementById('to-top');
    var links = document.getElementById('nav-links');
    var toggle = document.getElementById('nav-toggle');
    var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
    var navAnchors = Array.prototype.slice.call(links.querySelectorAll('a[href^="#"]:not(.nav-cta)'));

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      nav.classList.toggle('scrolled', y > 10);
      toTop.classList.toggle('show', y > 600);
      var current = null;
      sections.forEach(function (s) { if (s.offsetTop - 120 <= y) { current = s.id; } });
      navAnchors.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + current); });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });

    // Animação de entrada
    var items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      items.forEach(function (el) { io.observe(el); });
    } else {
      items.forEach(function (el) { el.classList.add('in'); });
    }

    // Baixar currículo: abre a janela de impressão (imprimir ou salvar como PDF)
    Array.prototype.slice.call(document.querySelectorAll('[data-print]')).forEach(function (btn) {
      btn.addEventListener('click', function () { window.print(); });
    });
    if (/[?&]print\b/.test(window.location.search)) {
      window.addEventListener('load', function () {
        var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
        ready.then(function () { setTimeout(function () { window.print(); }, 400); });
      });
    }

    // Carteira
    var walletBtn = document.getElementById('wallet-btn');
    if (walletBtn) {
      walletBtn.addEventListener('click', function () {
        var hash = walletBtn.getAttribute('data-wallet');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(hash).then(function () {
            var label = walletBtn.querySelector('span');
            var old = label.textContent;
            label.textContent = 'Copiado!';
            setTimeout(function () { label.textContent = old; }, 1800);
          });
        }
      });
    }
  });
})();
