// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
define("esri/dijit/SymbolStyler/colorRampUtil",["dojo/_base/array","dojox/gfx"],function(l,k){var d={createColorRamp:function(a){var b=a.node,c=a.width,f=a.height;a=d._stopsFromColors(a);b=k.createSurface(b,c,f);return b=b.createRect(b.getDimensions()).setFill({type:"linear",x1:0,y1:0,x2:0,y2:f,colors:a})},updateColorRamp:function(a){var b=a.ramp,c=b.getFill();c.colors=d._stopsFromColors(a);b.setFill(c);return b},_stopsFromColors:function(a){var b=a.colors;a=a.hasStops;var c=b.length,f=a?1/c:1/(c-
1),d=[],e=b[0],h;if("object"===typeof e&&e.hasOwnProperty("offset")&&e.hasOwnProperty("color"))return b;for(var g=0;g<c;g++)h=g*f,e=b[c-1-g],d.push({offset:h,color:e}),a&&(h=(g+1)*f,d.push({offset:h,color:e}));return d}};return d});