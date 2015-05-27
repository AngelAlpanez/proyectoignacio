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


var marcasView = function (strClase) {
    this.clase = strClase;
};
marcasView.prototype = new view('marcas');
marcasView.prototype.getClassNameMarcas = function () {
    return this.getClassName() + "Vista";
};
var oMarcasView = new marcasView('marcas');


marcasView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-md">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
marcasView.prototype.loadFormValues = function (valores, campos) {
//                    $('#marcas_form #titulo').val(valores['titulo']);
//                    $('#marcas_form #contenido').val(valores['contenido']);
//                    $('#marcas_form #alta').val(valores['alta']);
//                    $('#marcas_form #cambio').val(valores['cambio']);
//                    $('#marcas_form #hits').val(valores['hits']);
//                    $('#marcas_form #id_marcas').val(valores['id_marcas']);
//                    $('#marcas_form #etiquetas').val(valores['etiquetas']);
//                    $('#marcas_form #publicado').val(valores['publicado']);
//                    $('#marcas_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

marcasView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#marcas_form #titulo');
//                    valores['contenido'] = $('#marcas_form #contenido');
//                    valores['alta'] = $('#marcas_form #alta');
//                    valores['cambio'] = $('#marcas_form #cambio');
//                    valores['hits'] = $('#marcas_form #hits');
//                    valores['id_marcas'] = $('#marcas_form #id_marcas');
//                    valores['etiquetas'] = $('#marcas_form #etiquetas');
//                    valores['publicado'] = $('#marcas_form #publicado');
//                    valores['portada'] = $('#marcas_form #portada');

    var disabled = $('#marcasForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#marcasForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

marcasView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#marcasForm #obj_marcas_button').unbind('click');
    $("#marcasForm #obj_marcas_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar marcas
        //vista('marcas').cargaModalBuscarClaveAjena('#modal01', "marcas");

        $("#marcasForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de marca'), "", thisObject.getFormFooter(), true);

        $('#marcasForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_marcas_id').val(id).change();
            $('#obj_marcas_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#marcasForm #obj_marcas_button').unbind('click');
    $("#marcasForm #obj_marcas_button").click(function () {
        var oControl = oMarcasControl;

        $("#marcasForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de marcas'), "", thisObject.getFormFooter(), true);

        $('#marcasForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oMarcasModel, oMarcasView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_marcas_id').val(id).change();
            $('#obj_marcas_desc').text(decodeURIComponent(oMarcasModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oMarcasModel, oMarcasView);
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

        $('#marcasForm').append(thisObject.getEmptyModal());

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

marcasView.prototype.okValidation = function (f) {
    $('#marcasForm').on('success.form.bv', f);
};





marcasView.prototype.getBodyPageTable = function (page, fieldNames, visibleFields, tdbuttons) {
    var thisObject = this;
    var tabla = "";
    $.each(page, function (index, value) {
        tabla += '<tr>';
        var numField = 0;
        var id;
        var nombre;
        var imagen;
        var strClaveAjena;
//        $.each(fieldNames, function (index, valor) {
//            if ("id" == valor) {
//                id = value[valor];
//            }
//            ;
//            numField++;
//            if (numField <= visibleFields) {
//                tabla += '<td>' + thisObject.printValue(value, valor, true) + '</td>';
//            }
//        });

        $.each(fieldNames, function (index, valor) {
            if ("id" == valor) {
                id = value[valor];
            }
            
            if ("marca" == valor) {
                marca = value[valor];
            }
            
            if ("imagen" == valor) {
                imagen = value[valor];
            }
        });
        
        tabla += '<td>' + id + '</td>';
        tabla += '<td>' + marca + '</td>';
        tabla += '<td><img src="' + imagen +'"/></td>';
        tabla += '<td>';
        tabla += tdbuttons(id);
        tabla += '</td>';
        tabla += '</tr>';
    });
    return tabla;
};



