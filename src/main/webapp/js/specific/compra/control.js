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

var compraControl = function (strClase) {
    this.clase = strClase;
};
compraControl.prototype = new control('compra');
compraControl.prototype.getClassNameCompra = function () {
    return this.getClassName() + "Control";
};
var oCompraControl = new compraControl('compra');







control.prototype.new = function (place, objParams, oModel, oView) {
    var thisObject = this;
    $(place).empty();
    $(place).append(oView.getPanel("Alta de " + this.clase, oView.getEmptyForm()));
    //id must not be enabled
    $('#id').val('0').attr("disabled", true);
    if (objParams) {
        //soporte de claves ajenas
        var selector = objParams["systemfilter"].replace('id_', 'obj_');
        $('#' + selector + "_id").val(objParams["systemfiltervalue"]).attr("disabled", true);
        $('#' + selector + "_button").attr("disabled", true).hide();
        var oModelo = "o" + objParams["systemfilter"].replace('id_', '').charAt(0).toUpperCase() + objParams["systemfilter"].replace('id_', '').slice(1) + "Model";
        $('#' + selector + '_desc').text(decodeURIComponent(window[oModelo].getMeAsAForeignKey(objParams["systemfiltervalue"])));
        //--
        window[oModelo].loadAggregateViewOne(objParams["systemfiltervalue"]);
        $('#precio').val(window[oModelo].getCachedOne().precio);
        window[oModelo].loadAggregateViewOne(objParams["systemfiltervalue"]);
        $('#cantidad').val(window[oModelo].getCachedOne().cantidad);





        $(document).ready(function () {
            $('#fecha_group').datetimepicker({
                pickTime: false,
                language: 'es',
                showToday: true
            });

            $(".js-compra").click(function () {
                var id = $("#id").val();
                var id_usuario = $("#obj_usuario_id").val();
                var nombre = $("#obj_zapatilla_desc").text();
                //tiene una label lo mete vacio y toca pillarlo con text
                var precio = $("#precio").val();
                var id_zapa = $("#obj_zapatilla_id").val();
                debugger;
                var cantidad = $("#cantidadvalor").val();
                var stock = $("#cantidad").val();

                $.ajax({
                    url: "<%=request.getContextPath()%>/json?ob=carrito",
                    type: "POST",
                    data: {id: id,
                        id_usuario: id_usuario,
                        id_zapa: id_zapa,
                        nombre: nombre,
                        precio: precio,
                        cantidad: cantidad,
                        stock: stock
                    },
                    success: function (source) {
                        alert("tu compra");
                    }
                });
                return false;
            });

            //http://jqueryvalidation.org/documentation/ //recarga no esta donde toca.
            $(".js-compra").click(function () {
                location.reload();
            });

            //Este boton pruebas para pasar stock precio ;)
            $(".js-terminar").click(function () {

                var id = $("#id").val();
                var id_zapa = $("#obj_zapatilla_id").val();
                //precio no lo pasa
                //var precio=$("#precio").val(); Se queda todo a 0
                var stock = $("#cantidad").val();

                $.ajax({
                    url: "<%=request.getContextPath()%>/json?ob=carrito",
                    type: "POST",
                    data: {id: id,
                        id_zapa: id_zapa,
                        precio: precio,
                        stock: stock
                    },
                    success: function (source) {

                    }
                });
                return false;
            });
            //alert ($('#cantidad').val());
            $('#compraForm')
                    .bootstrapValidator({
                        container: '#messages',
                        feedbackIcons: {
                            valid: 'glyphicon glyphicon-ok',
                            invalid: 'glyphicon glyphicon-remove',
                            validating: 'glyphicon glyphicon-refresh'
                        },
                        fields: {
                            cantidad: {
                                validators: {
                                    notEmpty: {
                                        message: 'Debe introducir una cantidad'
                                    },
                                    double: {
                                        message: 'El importe debe ser numerico'
                                    },
                                    between: {
                                        min: -0,
                                        max: 999,
                                    },
                                }
                            },
                            cantidadvalor: {
                                validators: {
                                    notEmpty: {
                                        message: 'Debe introducir una cantidad'
                                    },
                                    double: {
                                        message: 'El importe debe ser numerico'
                                    },
                                    between: {
                                        min: -0,
                                        max: $('#cantidad').val(),
                                    },
                                }
                            },
                            precio: {
                                validators: {
                                    notEmpty: {
                                        message: 'Debe introducir un importe'
                                    },
                                    double: {
                                        message: 'El importe debe ser numerico'
                                    },
                                    between: {
                                        min: -0,
                                        max: 999999.22
                                    },
                                    regexp: {
                                        regexp: /((\d+)(\.\d{2}))$/,
                                        message: 'El importe tiene que ser un numérico con dos decimales'
                                    }

                                }
                            },
                            fecha: {
                                validators: {
                                    notEmpty: {
                                        message: 'Debe introducir una fecha'
                                    },
                                    date: {
                                        format: 'DD/MM/YYYY',
                                        message: 'La fecha no tiene formato DD/MM/YYYY'
                                    }
                                }
                            }


                        }
                    })

                    .on('change', '[name="id_usuario"]', function () {
                        $('#documentoForm').bootstrapValidator('revalidateField', 'id_usuario');
                    })

                    .on('change', '[name="id_zapatilla"]', function () {
                        $('#documentoForm').bootstrapValidator('revalidateField', 'id_zapatilla');
                    })
                    ;
            $('#fecha').on('dp.change dp.show', function (e) {
// Revalidate the date when user change it
                $('#documentoForm').bootstrapValidator('revalidateField', 'fecha');
            });

        });






    }
    oView.doEventsLoading();
    //$('#submitForm').unbind('click');
    //$('#submitForm').click(function () {
    oView.okValidation(function (e) {
        resultado = oModel.setOne({json: JSON.stringify(oView.getFormValues())});
        oView.doResultOperationNotifyToUser(place, resultado["status"], "Se ha creado el registro con id=" + resultado["message"], resultado["message"], true);
        e.preventDefault();
        return false;
    });
    //});
};