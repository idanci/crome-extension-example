var patanii = [
  {str_in: "minivan", str_out: "кучерявый"},
  {str_in: "vledniov", str_out: "лысый"}
]

var wordReplacer = {
  replaceMini: function (str_in, str_out) {
    var regex = new RegExp(str_in, "gi");
    $("a, span").each(function() {
      if (!(this.innerText.indexOf(str_in) == -1)) {
        this.innerHTML = this.innerText.replace(regex, str_out);
      };
    });
  }
};

patanii.forEach(function(bratish) {
  wordReplacer.replaceMini(bratish.str_in, bratish.str_out);
});
