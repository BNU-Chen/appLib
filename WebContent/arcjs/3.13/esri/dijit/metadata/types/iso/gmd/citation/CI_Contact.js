// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/citation/templates/CI_Contact.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n\t\tdata-dojo-props\x3d"target:\'gmd:CI_Contact\',minOccurs:0"\x3e\r\n\r\n\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gmd:phone\',minOccurs:0,\r\n\t\t\t\t\tlabel:\'${i18nIso.CI_Contact.phone}\'"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/CI_Telephone"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gmd:address\',minOccurs:0,\r\n\t\t\t\t\tlabel:\'${i18nIso.CI_Contact.address}\'"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/CI_Address"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gmd:onlineResource\',minOccurs:0,\r\n\t\t\t\t\tlabel:\'${i18nIso.CI_Contact.onlineResource}\'"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/CI_OnlineResource"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gmd:hoursOfService\',minOccurs:0,\r\n\t\t\t\t  label:\'${i18nIso.CI_Contact.hoursOfService}\'"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\t\tdata-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\r\n\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n\t\t\t\tdata-dojo-props\x3d"target:\'gmd:contactInstructions\',minOccurs:0,\r\n\t\t\t\t  label:\'${i18nIso.CI_Contact.contactInstructions}\'"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n\t\t\t\t\tdata-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\r\n\t\t\x3c/div\x3e\r\n\r\n\t\x3c/div\x3e\r\n\t\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/citation/CI_Contact","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/Tabs ../../../../form/InputTextArea ../../../../form/iso/AbstractObject ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference ./CI_Address ./CI_OnlineResource ./CI_Telephone dojo/text!./templates/CI_Contact.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,q,r,e,f){a=a(d,{templateString:e});
c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.citation.CI_Contact",a,f);return a});