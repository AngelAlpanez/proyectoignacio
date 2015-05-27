/* 
 * Copyright (C) 2014 rafa
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */


function fMarcasRoutes() {

//    Path.map("#/marcas").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('marcas').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //marcasControl.modalListEventsLoading(marcasObject, marcasView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

      Path.map("#/marcas").to(function () {
        $('#indexContenidoJsp').spinner();
        omarcasControl.listCuadros($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, omarcasModel, omarcasView);
        //marcaControl.modalListEventsLoading(marcaObject, marcaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        $('#indexContenidoJsp').append(omarcasControl.getClassNamemarcas());
        return false;
    });

    Path.map("#/marcas/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        omarcasControl.listCuadros($('#indexContenido'), paramsObject, null, omarcasModel, omarcasView);
        $('#indexContenidoJsp').empty();
        return false;
    });


    Path.map("#/marcas").to(function () {
        $('#indexContenidoJsp').spinner();
        oMarcasControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oMarcasModel, oMarcasView);
        //marcasControl.modalListEventsLoading(marcasObject, marcasView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oMarcasControl.getClassNameMarcas());
        return false;
    });

    Path.map("#/marcas/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMarcasControl.list($('#indexContenido'), paramsObject, null, oMarcasModel, oMarcasView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/marcas/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMarcasControl.view($('#indexContenido'), paramsObject['id'], oMarcasModel, oMarcasView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/marcas/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMarcasControl.edit($('#indexContenido'), paramsObject['id'], oMarcasModel, oMarcasView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/marcas/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMarcasControl.new($('#indexContenido'), null, oMarcasModel, oMarcasView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/marcas/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMarcasControl.new($('#indexContenido'), paramsObject, oMarcasModel, oMarcasView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/marcas/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oMarcasControl.remove($('#indexContenido'), paramsObject['id'], oMarcasModel, oMarcasView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}