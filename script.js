$("document").ready(() => {

  let randomStr = 'Leggings stumptown vape umami meggings la croix tote bag enamel pin lyft letterpress knausgaard photo booth disrupt roof party Craft beer art party meh tumeric gluten-free actually four dollar toast plaid Wolf migas distillery humblebrag tilde fanny pack listicle keffiyeh tbh paleo sustainable Plaid four dollar toast truffaut listicle irony mixtape tousled hella locavore put a bird on it poutine Etsy wayfarers kickstarter hammock af'
  const randomWords = randomStr.split(' ');
  let randomNum = Math.random() * (randomWords.length-1) + 1;
  let hangedWord = randomWords

  $(".letters").on('click', (e)=> {
    alert($(e.target).text())
  })

})