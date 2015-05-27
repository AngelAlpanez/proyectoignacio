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


function fSuperficieRoutes() {

//    Path.map("#/superficie").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('superficie').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //superficieControl.modalListEventsLoading(superficieObject, superficieView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/superficie").to(function () {
        $('#indexContenidoJsp').spinner();
        oSuperficieControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oSuperficieModel, oSuperficieView);
        //superficieControl.modalListEventsLoading(superficieObject, superficieView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oSuperficieControl.getClassNameSuperficie());
        return false;
    });

    Path.map("#/superficie/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oSuperficieControl.list($('#indexContenido'), paramsObject, null, oSuperficieModel, oSuperficieView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/superficie/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oSuperficieControl.view($('#indexContenido'), paramsObject['id'], oSuperficieModel, oSuperficieView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/superficie/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oSuperficieControl.edit($('#indexContenido'), paramsObject['id'], oSuperficieModel, oSuperficieView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/superficie/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oSuperficieControl.new($('#indexContenido'), null, oSuperficieModel, oSuperficieView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/superficie/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oSuperficieControl.new($('#indexContenido'), paramsObject, oSuperficieModel, oSuperficieView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/superficie/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oSuperficieControl.remove($('#indexContenido'), paramsObject['id'], oSuperficieModel, oSuperficieView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}