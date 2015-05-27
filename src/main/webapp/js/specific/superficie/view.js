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


var superficieView = function (strClase) {
    this.clase = strClase;
};
superficieView.prototype = new view('superficie');
superficieView.prototype.getClassNameSuperficie = function () {
    return this.getClassName() + "Vista";
};
var oSuperficieView = new superficieView('superficie');


superficieView.prototype.loadButtons = function (valor) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-md">';
    botonera += '<a class="btn btn-default view" id="' + valor.id + '"  href="jsp#/' + this.clase + '/view/' + valor.id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + valor.id + '"  href="jsp#/' + this.clase + '/edit/' + valor.id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + valor.id + '"  href="jsp#/' + this.clase + '/remove/' + valor.id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
superficieView.prototype.loadFormValues = function (valores, campos) {
//                    $('#superficie_form #titulo').val(valores['titulo']);
//                    $('#superficie_form #contenido').val(valores['contenido']);
//                    $('#superficie_form #alta').val(valores['alta']);
//                    $('#superficie_form #cambio').val(valores['cambio']);
//                    $('#superficie_form #hits').val(valores['hits']);
//                    $('#superficie_form #id_usuario').val(valores['id_usuario']);
//                    $('#superficie_form #etiquetas').val(valores['etiquetas']);
//                    $('#superficie_form #publicado').val(valores['publicado']);
//                    $('#superficie_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

superficieView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#superficie_form #titulo');
//                    valores['contenido'] = $('#superficie_form #contenido');
//                    valores['alta'] = $('#superficie_form #alta');
//                    valores['cambio'] = $('#superficie_form #cambio');
//                    valores['hits'] = $('#superficie_form #hits');
//                    valores['id_usuario'] = $('#superficie_form #id_usuario');
//                    valores['etiquetas'] = $('#superficie_form #etiquetas');
//                    valores['publicado'] = $('#superficie_form #publicado');
//                    valores['portada'] = $('#superficie_form #portada');

    var disabled = $('#superficieForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#superficieForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

superficieView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#superficieForm #obj_usuario_button').unbind('click');
    $("#superficieForm #obj_usuario_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar superficie
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "superficie");

        $("#superficieForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#superficieForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#superficieForm #obj_superficie_button').unbind('click');
    $("#superficieForm #obj_superficie_button").click(function () {
        var oControl = oTiposuperficieControl;

        $("#superficieForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de superficie'), "", thisObject.getFormFooter(), true);

        $('#superficieForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTiposuperficieModel, oTiposuperficieView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tiposuperficie_id').val(id).change();
            $('#obj_tiposuperficie_desc').text(decodeURIComponent(oTiposuperficieModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oTiposuperficieModel, oTiposuperficieView);
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

        $('#superficieForm').append(thisObject.getEmptyModal());

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

superficieView.prototype.okValidation = function (f) {
    $('#superficieForm').on('success.form.bv', f);
};