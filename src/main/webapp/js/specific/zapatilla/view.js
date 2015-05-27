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


var zapatillaView = function (strClase) {
    this.clase = strClase;
};
zapatillaView.prototype = new view('zapatilla');
zapatillaView.prototype.getClassNameZapatilla = function () {
    return this.getClassName() + "Vista";
};
var oZapatillaView = new zapatillaView('zapatilla');


zapatillaView.prototype.loadButtons = function (valor) {

     var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-md">';
    botonera += '<a class="btn btn-default view" id="' + valor.id + '"  href="jsp#/' + this.clase + '/view/' + valor.id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
   
    botonera += '<a class="btn btn-default edit" id="' + valor.id + '"  href="jsp#/' + this.clase + '/edit/' + valor.id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + valor.id + '"  href="jsp#/' + this.clase + '/remove/' + valor.id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '<a class="btn btn-default buy" id="' + valor.id + '"  href="jsp#/compra/new/systemfilter=id_zapatilla&systemfiltervalue=' + valor.id +'"><i class="glyphicon glyphicon-euro"></i></a>';
    botonera += '<a class="btn btn-default view" id="' + valor.id + '" href="jsp#/marcas/new/systemfilter=id_marcas&systemfiltervalue=' + valor.id + '"><i class=glyphicon glyhicon-eye-open"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
zapatillaView.prototype.loadFormValues = function (valores, campos) {
//                    $('#zapatilla_form #titulo').val(valores['titulo']);
//                    $('#zapatilla_form #contenido').val(valores['contenido']);
//                    $('#zapatilla_form #alta').val(valores['alta']);
//                    $('#zapatilla_form #cambio').val(valores['cambio']);
//                    $('#zapatilla_form #hits').val(valores['hits']);
//                    $('#zapatilla_form #id_superficie').val(valores['id_superficie']);
//                    $('#zapatilla_form #etiquetas').val(valores['etiquetas']);
//                    $('#zapatilla_form #publicado').val(valores['publicado']);
//                    $('#zapatilla_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

zapatillaView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#zapatilla_form #titulo');
//                    valores['contenido'] = $('#zapatilla_form #contenido');
//                    valores['alta'] = $('#zapatilla_form #alta');
//                    valores['cambio'] = $('#zapatilla_form #cambio');
//                    valores['hits'] = $('#zapatilla_form #hits');
//                    valores['id_superficie'] = $('#zapatilla_form #id_superficie');
//                    valores['etiquetas'] = $('#zapatilla_form #etiquetas');
//                    valores['publicado'] = $('#zapatilla_form #publicado');
//                    valores['portada'] = $('#zapatilla_form #portada');

    var disabled = $('#zapatillaForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#zapatillaForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};




zapatillaView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#zapatillaForm #obj_pisada_button').unbind('click');
    $("#zapatillaForm #obj_pisada_button").click(function () {
        var oControl = oPisadaControl;  //para probar dejar zapatilla
        //vista('superficie').cargaModalBuscarClaveAjena('#modal01', "zapatilla");

        $("#zapatillaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de pisada'), "", thisObject.getFormFooter(), true);

        $('#zapatillaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oPisadaModel, oPisadaView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_pisada_id').val(id).change();
            $('#obj_pisada_desc').text(decodeURIComponent(oPisadaModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oPisadaModel, oPisadaView);
        return false;
    });
    
    

    $('#zapatillaForm #obj_superficie_button').unbind('click');
    $("#zapatillaForm #obj_superficie_button").click(function () {
        var oControl = oSuperficieControl;  //para probar dejar zapatilla
        //vista('superficie').cargaModalBuscarClaveAjena('#modal01', "zapatilla");

        $("#zapatillaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de superficie'), "", thisObject.getFormFooter(), true);

        $('#zapatillaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oSuperficieModel, oSuperficieView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_superficie_id').val(id).change();
            $('#obj_superficie_desc').text(decodeURIComponent(oSuperficieModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oSuperficieModel, oSuperficieView);
        return false;
    });
    
    $('#zapatillaForm #obj_marcas_button').unbind('click');
    $("#zapatillaForm #obj_marcas_button").click(function () {
        var oControl = oMarcasControl;  //para probar dejar zapatilla
        //vista('superficie').cargaModalBuscarClaveAjena('#modal01', "zapatilla");

        $("#zapatillaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de una marca'), "", thisObject.getFormFooter(), true);

        $('#zapatillaForm').append(thisObject.getEmptyModal());

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

        $('#zapatillaForm').append(thisObject.getEmptyModal());

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

zapatillaView.prototype.okValidation = function (f) {
    $('#zapatillaForm').on('success.form.bv', f);
};