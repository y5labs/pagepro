// Generated by CoffeeScript 1.10.0
module.exports = function(options) {
  var currentpage, itemsperpage, pageendindex, pagestartindex, totalitems, totalpages;
  totalitems = options.totalitems, itemsperpage = options.itemsperpage, currentpage = options.currentpage;
  totalpages = Math.ceil(totalitems / itemsperpage);
  currentpage = Math.max(currentpage, 1);
  currentpage = Math.min(currentpage, totalpages);
  pagestartindex = (currentpage - 1) * itemsperpage;
  pageendindex = -1 + Math.min(currentpage * itemsperpage, totalitems);
  return {
    totalitems: totalitems,
    totalpages: totalpages,
    itemsperpage: itemsperpage,
    currentpage: currentpage,
    hasnextpage: currentpage < totalpages,
    hasprevpage: currentpage > 1,
    pagestartindex: pagestartindex,
    pageendindex: pageendindex,
    itemsonpage: pageendindex - pagestartindex + 1
  };
};