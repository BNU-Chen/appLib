/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/dijit/geoenrichment/bufferTitle","dojo/string ../../tasks/geoenrichment/DriveBuffer ../../tasks/geoenrichment/IntersectingGeographies ../../tasks/geoenrichment/DriveUnits dojo/i18n!../../nls/jsapi ../../extend".split(" "),function(c,f,g,d,b,h){function e(e,a){switch(e){case "polyline":return a instanceof f?c.substitute(b.lineBuffer[d.MILES],{radius:"1"}):c.substitute(b.lineBuffer[a&&a.units||d.MILES],{radius:(a&&a.radii[0]||1).toString()});case "polygon":return b.polygon;default:return a instanceof
f?c.substitute(b.pointDriveTime[a&&a.units||d.MILES],{radius:(a&&a.radii[0]||1).toString()}):a instanceof g?c.substitute(b.stdGeo,{level:a.geographyLevels[0].layerID}):c.substitute(b.pointRing[a&&a.units||d.MILES],{radius:(a&&a.radii[0]||1).toString()})}}b=b.geoenrichment.dijit.bufferTitle;h("esri.dijit.geoenrichment.bufferTitle",e);return e});