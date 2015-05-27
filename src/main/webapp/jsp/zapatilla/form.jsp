<%-- 
 Copyright (C) July 2014 Rafael Aznar

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
--%>

<form class="form-horizontal" role="form" action="#" id="zapatillaForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="nombre">Nombre:</label>
        <div class="col-sm-6">
            <input type="text" id="nombre" class="form-control"  name="nombre" size="15" placeholder="nombre" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="precio">Precio:</label>
        <div class="col-sm-6">
            <input type="text" id="precio" class="form-control"  name="precio" size="15" placeholder="precio" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="cantidad">Cantidad:</label>
        <div class="col-sm-6">
            <input type="text" id="cantidad" class="form-control"  name="cantidad" size="15" placeholder="cantidad" />
        </div>
    </div>
   



    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_marcas_id">Marca: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_marcas_id" class="input-mini" name="id_marcas" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_marcas_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_marcas_desc" id="obj_marcas_desc"></label>                     
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_pisada_id">Pisada: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_pisada_id" class="input-mini" name="id_pisada" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_pisada_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_pisada_desc" id="obj_pisada_desc"></label>                     
    </div>



    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_superficie_id">Superficie: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_superficie_id" class="input-mini" name="id_superficie" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_superficie_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_superficie_desc" id="obj_superficie_desc"></label>                     
    </div>



    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div id="messages"></div>
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary" id="submitForm">Guardar</button>
        </div>
    </div>

</form>


<script type="text/javascript">

    $(document).ready(function () {
        $('#alta_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        $('#cambio_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        //http://jqueryvalidation.org/documentation/
        $('#zapatillaForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        nombre: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un título'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El título debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        precio: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un precio'
                                },
                                double: {
                                    message: 'El valor del precio debe ser un entero'
                                },
                                between: {
                                    min: 0.00,
                                    max: 999.99,
                                    message: 'El número de hits debe ser un entero entre 0 y 999,99'
                                },
                                regexp: {
                                    regexp: /((\d+)+(\.\d{2}))$/,
                                    message: 'El precio tiene que ser un número con dos decimales'
                                }
                            }

                        },
                        cantidad: {
                            validators: {
                                notEmpty: {
                                    message: 'Debes introducir una cantidad'
                                },
                                integer: {
                                    message: 'La cantidad debe ser un entero'
                                },
                                between: {
                                    min: -0,
                                    max: 999,
                                    message: 'Introduce una cantidad entre 0 y 999'
                                }
                            }

                        },
                        id_marcas: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir una marca'
                                },
                                integer: {
                                    message: 'El identificador de la marca debe ser un entero'
                                }
                            }
                        },
                        id_pisada: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un tipo de pisada'
                                },
                                integer: {
                                    message: 'El identificador de la pisada debe ser un entero'
                                }
                            }
                        },
                        id_superficie: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un tipo de superficie'
                                },
                                integer: {
                                    message: 'El identificador de la superficie debe ser un entero'
                                }
                            }
                        },
                    }
                })
                .on('change', '[name="id_marcas"]', function () {
                    $('#zapatillaForm').bootstrapValidator('revalidateField', 'id_marcas');
                })

                .on('change', '[name="id_pisada"]', function () {
                    $('#zapatillaForm').bootstrapValidator('revalidateField', 'id_pisada');
                })

                .on('change', '[name="id_superficie"]', function () {
                    $('#zapatillaForm').bootstrapValidator('revalidateField', 'id_superficie');
                })
                ;
        $('#alta_group').on('dp.change dp.show', function (e) {
// Revalidate the date when user change it
            $('#zapatillaForm').bootstrapValidator('revalidateField', 'alta_group');
        });
        $('#cambio_group').on('dp.change dp.show', function (e) {
// Revalidate the date when user change it
            $('#zapatillaForm').bootstrapValidator('revalidateField', 'cambio_group');
        });
    });



</script>
