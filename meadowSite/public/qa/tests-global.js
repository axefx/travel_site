suite('Global Tests', function(){
  test('page has a valid title',
  function(){
    assert(document.title.match(/\S/) && document.title.toUpperCase() !=='TODO');
  });
});
