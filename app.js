$(function() {

  var sites = [
    {
      label: 'Google',
      link: 'http://google.com'
    },
    {
      label: 'YouTube',
      link: 'http://youtube.com'
    },
    {
      label: 'Facebook',
      link: 'http://facebook.com'
    },
    {
      label: 'Baidu',
      link: 'http://baidu.com'
    },
    {
      label: 'Yahoo!',
      link: 'http://yahoo.com'
    },
    {
      label: 'Amazon',
      link: 'http://amazon.com'
    },
    {
      label: 'Wikipedia',
      link: 'http://wikipedia.org'
    },
    {
      label: 'Tencent QQ',
      link: 'http://qq.com'
    },
    {
      label: 'Google India',
      link: 'http://google.co.in'
    },
    {
      label: 'Twitter',
      link: 'http://twitter.com'
    }
  ];

  var template = $('#site-list-item').html();

  console.log(template);

  var $list = $('#site-list');

  sites.forEach(function(site) {

    var output = template.replace(/@@@([^@]+)@@@/g, function(matchData, capture) {
      return site[capture];
    })
    $list.append(output);
  });

})
