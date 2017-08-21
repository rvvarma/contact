var t = require('tcomb');

var createcontact = t.struct({

  CompanyName: t.Str,
SellingDetails:t.Str




});

var Updatecontact = t.struct({
  UID:       t.Str,
  CompanyName: t.Str,
  CompanyName: t.Str,
SellingDetails:t.Str,
RowVersion:t.Str

});


module.exports = {
createcontact:  createcontact,
Updatecontact:Updatecontact
};
