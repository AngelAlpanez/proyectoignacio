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


function fZapatillaRoutes() {

//    Path.map("#/zapatilla").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('zapatilla').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //zapatillaControl.modalListEventsLoading(zapatillaObject, zapatillaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/zapatilla").to(function () {
        $('#indexContenidoJsp').spinner();
        oZapatillaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oZapatillaModel, oZapatillaView);
        //zapatillaControl.modalListEventsLoading(zapatillaObject, zapatillaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oZapatillaControl.getClassNameZapatilla());
        return false;
    });

    Path.map("#/zapatilla/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oZapatillaControl.list($('#indexContenido'), paramsObject, null, oZapatillaModel, oZapatillaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/zapatilla/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oZapatillaControl.view($('#indexContenido'), paramsObject['id'], oZapatillaModel, oZapatillaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/zapatilla/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oZapatillaControl.edit($('#indexContenido'), paramsObject['id'], oZapatillaModel, oZapatillaView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/zapatilla/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oZapatillaControl.new($('#indexContenido'), null, oZapatillaModel, oZapatillaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/zapatilla/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oZapatillaControl.new($('#indexContenido'), paramsObject, oZapatillaModel, oZapatillaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/zapatilla/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oZapatillaControl.remove($('#indexContenido'), paramsObject['id'], oZapatillaModel, oZapatillaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}