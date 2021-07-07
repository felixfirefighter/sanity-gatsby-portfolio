export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e5420fc2f5956ab02a35ed',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-sojxwspp',
                  apiId: '04f358b3-00db-46b1-8d14-9a47eb4684d7'
                },
                {
                  buildHookId: '60e5420fcad5c66cab86ebd6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-r5zt7me8',
                  apiId: 'd4185e72-c7b8-4d88-8889-a4ce83687fd0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yoongti/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-r5zt7me8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
