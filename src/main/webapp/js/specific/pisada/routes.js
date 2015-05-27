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


function fPisadaRoutes() {

//    Path.map("#/pisada").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('pisada').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //pisadaControl.modalListEventsLoading(pisadaObject, pisadaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/pisada").to(function () {
        $('#indexContenidoJsp').spinner();
        oPisadaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oPisadaModel, oPisadaView);
        //pisadaControl.modalListEventsLoading(pisadaObject, pisadaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oPisadaControl.getClassNamePisada());
        return false;
    });

    Path.map("#/pisada/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPisadaControl.list($('#indexContenido'), paramsObject, null, oPisadaModel, oPisadaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/pisada/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPisadaControl.view($('#indexContenido'), paramsObject['id'], oPisadaModel, oPisadaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/pisada/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPisadaControl.edit($('#indexContenido'), paramsObject['id'], oPisadaModel, oPisadaView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/pisada/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPisadaControl.new($('#indexContenido'), null, oPisadaModel, oPisadaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/pisada/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPisadaControl.new($('#indexContenido'), paramsObject, oPisadaModel, oPisadaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/pisada/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPisadaControl.remove($('#indexContenido'), paramsObject['id'], oPisadaModel, oPisadaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}