
/* 
 * Copyright (C) 2014 raznara
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


var compraView = function (strClase) {
    this.clase = strClase;
};
compraView.prototype = new view('compra');
compraView.prototype.getClassNameCompra = function () {
    return this.getClassName() + "Vista";
};
var oCompraView = new compraView('compra');


compraView.prototype.loadButtons = function (valor) {
    //sacar el id_de_marca a partir del id de compra
    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-md">';
    botonera += '<a class="btn btn-default view" id="' + valor.id + '"  href="jsp#/' + this.clase + '/view/' + valor.id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + valor.id + '"  href="jsp#/' + this.clase + '/edit/' + valor.id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + valor.id + '"  href="jsp#/' + this.clase + '/remove/' + valor.id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '<a class="btn btn-default view" id="' + valor.id + '"  href="jsp#/marcas' + '/view/' + valor.obj_zapatilla.obj_marcas.id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
compraView.prototype.loadFormValues = function (valores, campos) {
//                    $('#compra_form #titulo').val(valores['titulo']);
//                    $('#compra_form #contenido').val(valores['contenido']);
//                    $('#compra_form #alta').val(valores['alta']);
//                    $('#compra_form #cambio').val(valores['cambio']);
//                    $('#compra_form #hits').val(valores['hits']);
//                    $('#compra_form #id_usuario').val(valores['id_usuario']);
//                    $('#compra_form #etiquetas').val(valores['etiquetas']);
//                    $('#compra_form #publicado').val(valores['publicado']);
//                    $('#compra_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);



};

compraView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#compra_form #titulo');
//                    valores['contenido'] = $('#compra_form #contenido');
//                    valores['alta'] = $('#compra_form #alta');
//                    valores['cambio'] = $('#compra_form #cambio');
//                    valores['hits'] = $('#compra_form #hits');
//                    valores['id_usuario'] = $('#compra_form #id_usuario');
//                    valores['etiquetas'] = $('#compra_form #etiquetas');
//                    valores['publicado'] = $('#compra_form #publicado');
//                    valores['portada'] = $('#compra_form #portada');

    var disabled = $('#compraForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#compraForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

compraView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#compraForm #obj_usuario_button').unbind('click');
    $("#compraForm #obj_usuario_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar compra
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "compra");

        $("#compraForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#compraForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#compraForm #obj_zapatilla_button').unbind('click');
    $("#compraForm #obj_zapatilla_button").click(function () {
        var oControl = oZapatillaControl;

        $("#compraForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de zapatilla'), "", thisObject.getFormFooter(), true);

        $('#compraForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oZapatillaModel, oZapatillaView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_zapatilla_id').val(id).change();
            $('#obj_zapatilla_desc').text(decodeURIComponent(oZapatillaModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oZapatillaModel, oZapatillaView);
        return false;
    });
    $('#contenido_button').unbind('click');
    $('#contenido_button').click(function () {
        //cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Edición de contenidos</h3>';
        cabecera = thisObject.getFormHeader('Edición de contenidos');
        //pie = '<button type="button" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cerrar</button>';                        
        pie = '<a class="btn btn-primary" href="http://creoleparser.googlecode.com/svn/trunk/creoleparser/test_pages/CheatSheetPlus.html">Sintaxis</a>';
        pie += thisObject.getFormFooter();
        contenido = '<div class="row"><div class="col-md-6">';
        contenido += '<textarea type="text" id="contenidomodal" name="contenido" rows="20" cols="70" placeholder="contenido"></textarea>';
        contenido += '</div><div class="col-md-6"><div id="textoparseado"></div></div>';
        contenido += '</div>';

        $('#compraForm').append(thisObject.getEmptyModal());

        util().loadForm('#modal01', cabecera, contenido, pie, true);
        var texto = $('#contenido').val();
        $('#contenidomodal').val(texto);
        util().creoleParse(texto, $('#textoparseado'));
        $('#contenido').val($('#contenidomodal').val());
        $('#contenidomodal').keyup(function () {
            util().creoleParse($('#contenidomodal').val(), $('#textoparseado'));
            $('#contenido').val($('#contenidomodal').val());
        });
        return false;
    });
};

compraView.prototype.okValidation = function (f) {
    $('#compraForm').on('success.form.bv', f);
};



view.prototype.printValue = function (value, valor, recortar) {

    var thisObject = this;
    var strResult = "";
    if (/obj_/.test(valor)) {
        if (value[valor].id > 0) {
            if (valor == "obj_zapatilla") {
                strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ": " + value[valor].nombre + '</a>';
            } else { //usuario
                if (valor == "obj_usuario") {
                    strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ": " + value[valor].login + ' (' + value[valor].obj_tipousuario.descripcion + ')</a>';
                } else {
                    strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].id + ":" + util().getForeign(value[valor]) + '</a>';
                }
            }

        } else {
            strResult = '???';
        }
    } else {
        switch (value[valor]) {
            case true:
                strResult = '<i class="glyphicon glyphicon-ok"></i>';
                break;
            case false:
                strResult = '<i class="glyphicon glyphicon-remove"></i>';
                break;
            default:
                strResult = decodeURIComponent(value[valor]);
                //if (typeof fieldContent == "string") {
                if (recortar)
                    if (strResult.length > 50) //don't show too long fields
                        strResult = strResult.substr(0, 20) + " ...";
                //}
        }
        ;
    }
    ;
    return strResult;
};