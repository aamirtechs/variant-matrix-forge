const test=require("node:test");const assert=require("node:assert/strict");const L=require("../src/logic.js");
const axes=[{name:"Size",values:[{value:"S"},{value:"M"}]},{name:"Color",values:[{value:"Red"},{value:"Blue"}]}];
test("cartesian count",()=>{assert.equal(L.cartesian(axes).length,4);});
test("generate variants with sku and price deltas",()=>{const vs=L.generateVariants({title:"Tee",basePrice:20,skuPrefix:"TEE"},[{name:"Size",values:[{value:"S",delta:0},{value:"XL",delta:5}]}],{});assert.equal(vs[1].price,25);assert.match(vs[1].sku,/TEE-XL/);});
test("exclusions remove combos",()=>{const vs=L.generateVariants({title:"Tee",basePrice:10,skuPrefix:"T"},axes,{exclusions:[{Size:"S",Color:"Red"}]});assert.equal(vs.length,3);});
test("option code builder",()=>{assert.equal(L.optionCode("Extra Large"),"EXTR");assert.equal(L.optionCode("Red"),"RED");});
test("shopify csv has header and rows",()=>{const vs=L.generateVariants({title:"My Tee",basePrice:10,skuPrefix:"T"},axes,{});const csv=L.toShopifyCSV({title:"My Tee"},vs);assert.match(csv,/Handle,Title/);assert.equal(csv.split("\n").length,5);});
test("woocommerce csv format",()=>{const vs=L.generateVariants({title:"Tee",basePrice:10,skuPrefix:"T"},axes,{});const csv=L.toWooCommerceCSV({title:"Tee"},vs);assert.match(csv,/variation/);assert.match(csv,/Attribute 1 name/);});
test("three axes",()=>{const a3=[...axes,{name:"Material",values:[{value:"Cotton"}]}];assert.equal(L.cartesian(a3).length,4);const vs=L.generateVariants({title:"T",basePrice:1,skuPrefix:"X"},a3,{});assert.equal(vs.length,4);});
