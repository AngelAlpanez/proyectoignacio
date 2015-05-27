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


var pisadaView = function (strClase) {
    this.clase = strClase;
};
pisadaView.prototype = new view('pisada');
pisadaView.prototype.getClassNamePisada = function () {
    return this.getClassName() + "Vista";
};
var oPisadaView = new pisadaView('pisada');


pisadaView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-md">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
pisadaView.prototype.loadFormValues = function (valores, campos) {
//                    $('#pisada_form #titulo').val(valores['titulo']);
//                    $('#pisada_form #contenido').val(valores['contenido']);
//                    $('#pisada_form #alta').val(valores['alta']);
//                    $('#pisada_form #cambio').val(valores['cambio']);
//                    $('#pisada_form #hits').val(valores['hits']);
//                    $('#pisada_form #id_pisada').val(valores['id_pisada']);
//                    $('#pisada_form #etiquetas').val(valores['etiquetas']);
//                    $('#pisada_form #publicado').val(valores['publicado']);
//                    $('#pisada_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

pisadaView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#pisada_form #titulo');
//                    valores['contenido'] = $('#pisada_form #contenido');
//                    valores['alta'] = $('#pisada_form #alta');
//                    valores['cambio'] = $('#pisada_form #cambio');
//                    valores['hits'] = $('#pisada_form #hits');
//                    valores['id_pisada'] = $('#pisada_form #id_pisada');
//                    valores['etiquetas'] = $('#pisada_form #etiquetas');
//                    valores['publicado'] = $('#pisada_form #publicado');
//                    valores['portada'] = $('#pisada_form #portada');

    var disabled = $('#pisadaForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#pisadaForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

pisadaView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#pisadaForm #obj_pisada_button').unbind('click');
    $("#pisadaForm #obj_pisada_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar pisada
        //vista('pisada').cargaModalBuscarClaveAjena('#modal01', "pisada");

        $("#pisadaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de pisada'), "", thisObject.getFormFooter(), true);

        $('#pisadaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_pisada_id').val(id).change();
            $('#obj_pisada_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#pisadaForm #obj_pisada_button').unbind('click');
    $("#pisadaForm #obj_pisada_button").click(function () {
        var oControl = oTipopisadaControl;

        $("#pisadaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de pisada'), "", thisObject.getFormFooter(), true);

        $('#pisadaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipopisadaModel, oTipopisadaView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_pisada_id').val(id).change();
            $('#obj_pisada_desc').text(decodeURIComponent(oTipopisadaModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oTipopisadaModel, oTipopisadaView);
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

        $('#pisadaForm').append(thisObject.getEmptyModal());

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

pisadaView.prototype.okValidation = function (f) {
    $('#pisadaForm').on('success.form.bv', f);
};